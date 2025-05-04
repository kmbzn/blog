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
    "revision": "df018eb2f50b61b3e2a8d35782ee7856"
  },
  {
    "url": "assets/css/0.styles.6393867d.css",
    "revision": "b7a9c1f67dcaf1fcceb8ac3655bbe64d"
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
    "url": "assets/js/26.be62c9f8.js",
    "revision": "45a76c94b1963bce76edfbf604c90603"
  },
  {
    "url": "assets/js/27.8173b92d.js",
    "revision": "65d89e66a3d24c49c5233cc1c94c0a4a"
  },
  {
    "url": "assets/js/28.eef9d038.js",
    "revision": "80619ecdcb70bbfaf22ae5434431afff"
  },
  {
    "url": "assets/js/29.b47ece12.js",
    "revision": "e831c713830953815009eb7db2a3ff94"
  },
  {
    "url": "assets/js/3.7e2f5075.js",
    "revision": "a308329742c283fe403e9b4c78506e9e"
  },
  {
    "url": "assets/js/30.1b08b666.js",
    "revision": "1adaba08efdefc495fd989aa1686f65c"
  },
  {
    "url": "assets/js/31.3f4b63f6.js",
    "revision": "a4a4fdc54ae014a699107bc897ff61a1"
  },
  {
    "url": "assets/js/32.ad33d72d.js",
    "revision": "3a783581d5da9b8a2cfcaf21f5711355"
  },
  {
    "url": "assets/js/33.d491e2e6.js",
    "revision": "6405bc3cf8e631d947d20eac1de1eddb"
  },
  {
    "url": "assets/js/34.9fade83f.js",
    "revision": "dc0cbf7defd6cbff43ad8524e13d617b"
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
    "url": "assets/js/app.3f9354f2.js",
    "revision": "2d597c59202135b5164d6cf7475ba5b4"
  },
  {
    "url": "assets/js/vendors~docsearch.663d6e13.js",
    "revision": "8bc34d9e220031e107f40d9f4dcaae68"
  },
  {
    "url": "computer-graphics/1-Course-Intro.html",
    "revision": "4f04ec74bc8277c70e24a46dd5d9620e"
  },
  {
    "url": "computer-graphics/2-Rendering-Basics.html",
    "revision": "84695b713ffef582065f63d130e4ee0c"
  },
  {
    "url": "computer-graphics/3-Transformations-v2.html",
    "revision": "5919eb69d84f19de5639703556930cc1"
  },
  {
    "url": "computer-graphics/4-Affine-Space-Frame_Matrix.html",
    "revision": "1ed7203b767fd1fe2283498acfb4d4de"
  },
  {
    "url": "computer-graphics/5-Vertex-Processing-1.html",
    "revision": "163406f5e21f76773373e269f288b59c"
  },
  {
    "url": "computer-graphics/6-Vertex-Processing-2.html",
    "revision": "a5b3a816ea9d58a8e6af038116e4b5c9"
  },
  {
    "url": "computer-graphics/7-Hierachical-Modeling-Mesh.html",
    "revision": "c7bd6939449054aff59c7074131a69d7"
  },
  {
    "url": "computer-graphics/8-Lighting.html",
    "revision": "43ada19193ed0ebe37da9c31dcd48d1a"
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
    "revision": "a04ac45fabed19d13058c01ae78fc1db"
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
