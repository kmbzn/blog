/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1b2b7ef35ba58091e89117e3e2646b30"
  },
  {
    "url": "assets/css/0.styles.0e9b822d.css",
    "revision": "b78d9bd1b7bb9b281849c6c5871c1975"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.aef570a2.js",
    "revision": "8c8d2456ef17dcba49276193f3801017"
  },
  {
    "url": "assets/js/10.3be9ba10.js",
    "revision": "b9ab8c918c73b48ddd08fcad3267ecef"
  },
  {
    "url": "assets/js/11.89241896.js",
    "revision": "c72951e8890478d89288030bf42b5eea"
  },
  {
    "url": "assets/js/12.4fa06bb7.js",
    "revision": "194c099bc08001d6f4e69246e1c8b4b0"
  },
  {
    "url": "assets/js/13.db5eb42a.js",
    "revision": "b24b7729137e2ac924364d618db17741"
  },
  {
    "url": "assets/js/14.a654c061.js",
    "revision": "29f631edf4f6e88d8910c5552ba297b8"
  },
  {
    "url": "assets/js/15.82f66eb5.js",
    "revision": "5cfa746490d63c4430dee9eeb125e004"
  },
  {
    "url": "assets/js/16.41334cbf.js",
    "revision": "3a362c3af4b2412a0d40a4453e9b2c56"
  },
  {
    "url": "assets/js/17.9f4ed163.js",
    "revision": "81238ebb62d6c0526655f41ccbf8db5b"
  },
  {
    "url": "assets/js/18.bb8e1e7a.js",
    "revision": "eb73001c442116625899b046608b36cc"
  },
  {
    "url": "assets/js/19.6965bf28.js",
    "revision": "bb5f0d7445b754ef238133af606ad6a9"
  },
  {
    "url": "assets/js/2.ddfd2681.js",
    "revision": "8c34e7a7e8d3174e2bff517c80478e5c"
  },
  {
    "url": "assets/js/20.9f752867.js",
    "revision": "7299c7d273c099aa99c2fa5b9e5e4f9e"
  },
  {
    "url": "assets/js/21.85cd1bb2.js",
    "revision": "6e7cb03fb902432d449dd941f1e64679"
  },
  {
    "url": "assets/js/22.6bbde796.js",
    "revision": "ef567f5c046d36140ccb7e51c37fd4dc"
  },
  {
    "url": "assets/js/23.1c6b188d.js",
    "revision": "8cf76d7023f20bf4f91a640424401920"
  },
  {
    "url": "assets/js/24.653ab3f1.js",
    "revision": "8eb3b0c8311eca40d02ac1035fd83351"
  },
  {
    "url": "assets/js/25.bf3894f9.js",
    "revision": "3e4f77bd92ef72dcf9f62f643bdc18f1"
  },
  {
    "url": "assets/js/26.f92df003.js",
    "revision": "1a7a74da0fa4f114b908a1f34adfd29d"
  },
  {
    "url": "assets/js/27.90f2b486.js",
    "revision": "601759daf81b135b17af1509e43efe53"
  },
  {
    "url": "assets/js/28.923bcf31.js",
    "revision": "e304c3e14b7948a03ce7a56605741f61"
  },
  {
    "url": "assets/js/29.35c0a9bb.js",
    "revision": "d7e8c59639ab6a0ed47973df8aaa1770"
  },
  {
    "url": "assets/js/3.7e2f5075.js",
    "revision": "a308329742c283fe403e9b4c78506e9e"
  },
  {
    "url": "assets/js/30.f568f8e0.js",
    "revision": "61a65aed930a6a20d89942fcb426b63d"
  },
  {
    "url": "assets/js/31.8cb51645.js",
    "revision": "251c3a63cdcab2b392de9d258e00ec07"
  },
  {
    "url": "assets/js/32.6fc1c002.js",
    "revision": "d1d278086596970d2716dfd018d47544"
  },
  {
    "url": "assets/js/33.e6eae1aa.js",
    "revision": "962d0cc7b2d04d34422c7f84d1e6fcc6"
  },
  {
    "url": "assets/js/34.f4137101.js",
    "revision": "85d081cb9b0034d83ef671f1f1601253"
  },
  {
    "url": "assets/js/35.646e59d5.js",
    "revision": "3e7506cba6c10a8bfd97c0146849872d"
  },
  {
    "url": "assets/js/4.107563ed.js",
    "revision": "e2ca1e4601ec213a93d23ac962a74b0d"
  },
  {
    "url": "assets/js/5.5467bfa0.js",
    "revision": "c1501468ad211777bfd4ef8c94ca4334"
  },
  {
    "url": "assets/js/6.e9ea9ee0.js",
    "revision": "3b3f32504e06912df2b9aaade0de28d6"
  },
  {
    "url": "assets/js/7.4a5373f5.js",
    "revision": "c212f4703f1ae765e0e560d4417387ca"
  },
  {
    "url": "assets/js/app.c2e3c149.js",
    "revision": "d0cf9eca6cbcc8e05ed74d4044ba3ae2"
  },
  {
    "url": "assets/js/vendors~docsearch.663d6e13.js",
    "revision": "8bc34d9e220031e107f40d9f4dcaae68"
  },
  {
    "url": "computer-graphics/1-Course-Intro.html",
    "revision": "e8644e163080213b9886e6e741707716"
  },
  {
    "url": "computer-graphics/2-Rendering-Basics.html",
    "revision": "a9ed72131d29ea74250e7420a3085f5f"
  },
  {
    "url": "computer-graphics/3-Transformations.html",
    "revision": "17c470df8f83f5d5985551f107050e91"
  },
  {
    "url": "computer-graphics/4-Affine-Space-Frame_Matrix.html",
    "revision": "d3c9a7a6fe2fc29b564628d1e1ab47c8"
  },
  {
    "url": "computer-graphics/5-Vertex-Processing-1.html",
    "revision": "74d364830dd91fdcf55ecde94d6bf24b"
  },
  {
    "url": "computer-graphics/6-Vertex-Processing-2.html",
    "revision": "3cba13ce714d77f2a82e3b4b1c62ca46"
  },
  {
    "url": "computer-graphics/7-Hierachical-Modeling-Mesh.html",
    "revision": "ae2d30c3488f85e6921836fd6460e008"
  },
  {
    "url": "computer-graphics/8-Lighting.html",
    "revision": "0bb20d2fa931887cc53a3f77901d144b"
  },
  {
    "url": "images/android-chrome-192x192.png",
    "revision": "44eef7870fc8168458fc94f198ceab58"
  },
  {
    "url": "images/android-chrome-512x512.png",
    "revision": "68c372c14e81a3ea2cab612e248a72f3"
  },
  {
    "url": "images/apple-touch-icon.png",
    "revision": "1f3a26bb16d8ea4518916d8ec0812b4a"
  },
  {
    "url": "images/example.png",
    "revision": "82df45d7ce11e0ec1808c757e26dcb4c"
  },
  {
    "url": "images/favicon-16x16.png",
    "revision": "83559a544f03e60a2a475db8d9afa6aa"
  },
  {
    "url": "images/favicon-32x32.png",
    "revision": "48c1ef66e49b030ed10d48f85fe5b3fa"
  },
  {
    "url": "images/kmbzn.png",
    "revision": "2ea8fbd64def8c23d70595a86d1d43db"
  },
  {
    "url": "images/main.svg",
    "revision": "7732984b5805363b0f751a5d402df830"
  },
  {
    "url": "images/og-home.png",
    "revision": "9215f0cd99a1a77517ca4a247e5f1f70"
  },
  {
    "url": "images/profile.jpg",
    "revision": "b033703835906ad06d74078f1f4f82ae"
  },
  {
    "url": "images/transformations.png",
    "revision": "fe67524f81ac1a6c029dbb414e622bd9"
  },
  {
    "url": "index.html",
    "revision": "1633e0698fa1dea5c1ceca9cc2e8c814"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
