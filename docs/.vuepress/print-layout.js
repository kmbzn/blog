// Match the A4 content box declared in the print stylesheet.
const keepSelector = '.print-heading-block, .fenced-code, pre:not(.fenced-code pre), table'
const headingSelector = 'h1, h2, h3, h4, h5, h6'
const whitespaceBudget = 0.2

export function installPrintLayout() {
  let relaxed = []

  function reset() {
    for (const element of relaxed) element.removeAttribute('data-print-split')
    relaxed = []
  }

  function prepare() {
    reset()
    const source = document.querySelector('#main-content')
    if (!source) return

    const measure = source.cloneNode(true)
    measure.removeAttribute('id')
    measure.removeAttribute('inert')
    measure.classList.add('print-measure')
    measure.setAttribute('aria-hidden', 'true')
    const originals = [...source.querySelectorAll(keepSelector)]
    const candidates = [...measure.querySelectorAll(keepSelector)]
    const boundaries = new Map()
    const markers = candidates.map(element => {
      // A heading belongs to the following block, even when that block splits.
      const start = element.previousElementSibling?.matches(headingSelector)
        ? element.previousElementSibling
        : element
      const shared = boundaries.get(start.parentElement)
      if (start !== element && shared) return shared
      const marker = document.createElement('span')
      marker.className = 'print-position'
      start.before(marker)
      boundaries.set(element, marker)
      return marker
    })

    document.body.append(measure)
    try {
      // Columns use the browser's fragmentation engine at the print page size.
      // Relax parents before children so each measurement includes earlier choices.
      const origin = measure.getBoundingClientRect()
      for (const [index, element] of candidates.entries()) {
        const before = markers[index].getBoundingClientRect()
        const after = element.getClientRects()[0]
        if (!after) continue
        const moved = after.left - before.left > origin.width / 2
        const remaining = origin.bottom - before.top
        if (moved && remaining > origin.height * whitespaceBudget + 1) {
          element.setAttribute('data-print-split', '')
          originals[index].setAttribute('data-print-split', '')
          relaxed.push(originals[index])
        }
      }
    } finally {
      measure.remove()
    }
  }

  window.addEventListener('beforeprint', prepare)
  window.addEventListener('afterprint', reset)
  return () => {
    window.removeEventListener('beforeprint', prepare)
    window.removeEventListener('afterprint', reset)
    reset()
  }
}
