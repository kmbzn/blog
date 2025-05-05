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
    "revision": "e74e5c1a9ad3f8adc0723ee203769c3c"
  },
  {
    "url": "assets/css/0.styles.89bd505f.css",
    "revision": "e07a3b6fc02b960bd34a77029170c90d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.93e900e1.js",
    "revision": "5462192609f892aa0ff8141b17f2a40b"
  },
  {
    "url": "assets/js/10.6637bfee.js",
    "revision": "83e31ac00f8b5621ea855e9c9cafb16f"
  },
  {
    "url": "assets/js/11.89241896.js",
    "revision": "c72951e8890478d89288030bf42b5eea"
  },
  {
    "url": "assets/js/12.1f81aafc.js",
    "revision": "13a0fb7ed2bef31c8f04dd4666818cba"
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
    "url": "assets/js/2.a3ccddde.js",
    "revision": "4be22105727f7459bcccebd17a323ce1"
  },
  {
    "url": "assets/js/20.1bb4a017.js",
    "revision": "1bb388568c0ecb528c70e9809a2c86dc"
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
    "url": "assets/js/24.bffcbf0e.js",
    "revision": "e46d0b32ef76246df50ca5b317bec13f"
  },
  {
    "url": "assets/js/25.bf3894f9.js",
    "revision": "3e4f77bd92ef72dcf9f62f643bdc18f1"
  },
  {
    "url": "assets/js/26.9253c6d9.js",
    "revision": "0649004cdcdf03deeb8aaa25c2e5f671"
  },
  {
    "url": "assets/js/27.12370f35.js",
    "revision": "ce85c8a5bf2e67ca3a313b0ddde093d0"
  },
  {
    "url": "assets/js/28.04d83615.js",
    "revision": "259f4a607d15dc8718427bbd62df8480"
  },
  {
    "url": "assets/js/29.6a8bd8f9.js",
    "revision": "dd9a1bbeec7db7e54c20a6eee1d5a0d1"
  },
  {
    "url": "assets/js/3.7e2f5075.js",
    "revision": "a308329742c283fe403e9b4c78506e9e"
  },
  {
    "url": "assets/js/30.96458012.js",
    "revision": "f19d0f7ee28524464b2c78d382ba7574"
  },
  {
    "url": "assets/js/31.e4ff9fc2.js",
    "revision": "64a5034773e6bd69e35217a67524043c"
  },
  {
    "url": "assets/js/32.7927ebe4.js",
    "revision": "5a53f7c6a544433df1e6deeee8a1063a"
  },
  {
    "url": "assets/js/33.2f8007c2.js",
    "revision": "f5bce4ac6b5ddc5f1e0051ee02523c30"
  },
  {
    "url": "assets/js/34.873a7ee0.js",
    "revision": "ac25356d02644e582ceeaa34f78c1038"
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
    "url": "assets/js/app.627c7db0.js",
    "revision": "6a580a3f409901fa360fe023209c705b"
  },
  {
    "url": "assets/js/vendors~docsearch.663d6e13.js",
    "revision": "8bc34d9e220031e107f40d9f4dcaae68"
  },
  {
    "url": "computer-graphics/1-Course-Intro.html",
    "revision": "2bb92bb69b1f1b9786003ab664c3e7f5"
  },
  {
    "url": "computer-graphics/2-Rendering-Basics.html",
    "revision": "c3662a6e4e941283bab59166566623cc"
  },
  {
    "url": "computer-graphics/3-Transformations.html",
    "revision": "4711e316e349e623a9fcf6be90ef5a09"
  },
  {
    "url": "computer-graphics/4-Affine-Space-Frame_Matrix.html",
    "revision": "b70ed04dbf5de644e731f2e3708b12fb"
  },
  {
    "url": "computer-graphics/5-Vertex-Processing-1.html",
    "revision": "6c45e2e986d5041f7e50c68c6f90d25f"
  },
  {
    "url": "computer-graphics/6-Vertex-Processing-2.html",
    "revision": "04fdc991d0e0a59a2780a0ec12bebaae"
  },
  {
    "url": "computer-graphics/7-Hierachical-Modeling-Mesh.html",
    "revision": "a1b3de8b4307ff3317f14fd00f0315cd"
  },
  {
    "url": "computer-graphics/8-Lighting.html",
    "revision": "8fb903bbbfbec994f3013db2826d3639"
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
    "revision": "ee29bf53597637369d1bb55d6a7e431a"
  },
  {
    "url": "images/og-home.png",
    "revision": "9215f0cd99a1a77517ca4a247e5f1f70"
  },
  {
    "url": "images/profile.jpg",
    "revision": "b17c38360752244f439bb08d4e8e7f68"
  },
  {
    "url": "index.html",
    "revision": "b276e52742179a9793034653c2fcbc88"
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
