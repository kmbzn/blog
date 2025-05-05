export default ({ router }) => {
    if (typeof window !== 'undefined') {
      router.afterEach(() => {
        setTimeout(() => {
          if (window.renderMathInElement) {
            window.renderMathInElement(document.body, {
              delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
              ],
              throwOnError: false
            });
          }
        }, 100);
      });
    }
  };
