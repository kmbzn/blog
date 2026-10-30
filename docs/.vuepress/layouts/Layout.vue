<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { Content, RouteLink, useRoutePath, usePageData } from 'vuepress/client'
import sections from '@temp/study-sidebar.js'

const path = useRoutePath()
const page = usePageData()
const mobile = ref(false)
const sidebarOpen = ref(false)
const closeButton = ref(null)
let mediaQuery
let gesture
let previousFocus
let previousOverflow

function closeSidebar() {
  sidebarOpen.value = false
}

function syncViewport() {
  mobile.value = mediaQuery.matches
  if (!mobile.value) closeSidebar()
}

function startSwipe(event) {
  gesture = null
  if (!mobile.value || event.touches.length !== 1) return
  if (event.target.closest('pre, table, input, textarea, select, [contenteditable="true"]')) return
  const touch = event.touches[0]
  gesture = { x: touch.clientX, y: touch.clientY }
}

function moveSwipe(event) {
  if (!gesture || event.touches.length !== 1) {
    gesture = null
    return
  }
  const dx = event.touches[0].clientX - gesture.x
  const dy = event.touches[0].clientY - gesture.y
  if (Math.abs(dy) > 16 && Math.abs(dy) >= Math.abs(dx)) {
    gesture = null
    return
  }
  if (Math.abs(dx) > 16 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    if (event.cancelable) event.preventDefault()
  }
}

function endSwipe(event) {
  if (!gesture || !event.changedTouches.length) return
  const dx = event.changedTouches[0].clientX - gesture.x
  const dy = event.changedTouches[0].clientY - gesture.y
  gesture = null
  if (Math.abs(dx) < 60 || Math.abs(dx) <= Math.abs(dy) * 1.5) return
  sidebarOpen.value = dx > 0
}

function cancelSwipe() {
  gesture = null
}

function handleKeydown(event) {
  if (!mobile.value || !sidebarOpen.value) return
  if (event.key === 'Escape') closeSidebar()
  if (event.key !== 'Tab') return
  const elements = [...document.querySelectorAll('.sidebar button, .sidebar summary, .sidebar a')]
    .filter(element => element.getClientRects().length)
  const first = elements[0]
  const last = elements.at(-1)
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}

watch(path, closeSidebar)
watch(sidebarOpen, async open => {
  if (open) {
    previousFocus = document.activeElement
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    if (sidebarOpen.value) closeButton.value?.focus()
  } else {
    if (previousOverflow !== undefined) document.body.style.overflow = previousOverflow
    previousOverflow = undefined
    previousFocus?.focus()
  }
})

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 900px)')
  syncViewport()
  mediaQuery.addEventListener('change', syncViewport)
  document.addEventListener('touchstart', startSwipe, { passive: true })
  document.addEventListener('touchmove', moveSwipe, { passive: false })
  document.addEventListener('touchend', endSwipe, { passive: true })
  document.addEventListener('touchcancel', cancelSwipe, { passive: true })
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', syncViewport)
  document.removeEventListener('touchstart', startSwipe)
  document.removeEventListener('touchmove', moveSwipe)
  document.removeEventListener('touchend', endSwipe)
  document.removeEventListener('touchcancel', cancelSwipe)
  document.removeEventListener('keydown', handleKeydown)
  if (previousOverflow !== undefined) document.body.style.overflow = previousOverflow
})
</script>

<template>
  <a class="skip-link" href="#main-content">본문으로 건너뛰기</a>
  <div class="notes-layout">
    <aside class="sidebar" :class="{ 'is-open': sidebarOpen }" :inert="mobile && !sidebarOpen" aria-label="전체 게시물">
      <button ref="closeButton" class="sidebar-close" type="button" aria-label="사이드바 닫기" @click="closeSidebar">×</button>
      <nav>
        <details
          v-for="section in sections"
          :key="section.text"
          :open="section.text === '마이크로프로세서'"
        >
          <summary><h2>{{ section.text }}</h2></summary>
          <ol>
            <li v-for="item in section.children" :key="item.path">
              <RouteLink :to="item.path" :aria-current="path === item.path ? 'page' : undefined">
                {{ item.text }}
              </RouteLink>
            </li>
          </ol>
        </details>
      </nav>
    </aside>
    <main id="main-content" tabindex="-1" :inert="mobile && sidebarOpen">
      <template v-if="page.path === '/404.html'">
        <h1>페이지를 찾을 수 없습니다</h1>
      </template>
      <Content v-else />
    </main>
  </div>
</template>
