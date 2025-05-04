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
    "revision": "4a1a68e3656adb0fc49a98291b8da5fb"
  },
  {
    "url": "assets/css/0.styles.097f7555.css",
    "revision": "b1af7bfb25075c2d12351984dbb8221f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4f07d9c2.js",
    "revision": "aee82dcc968a2985c95311b8e65d2283"
  },
  {
    "url": "assets/js/10.ff1598d2.js",
    "revision": "446f7f1a237c02575f45d4c234b95568"
  },
  {
    "url": "assets/js/11.246a69bf.js",
    "revision": "d297a220f240fe3511dca7e22c8cdb83"
  },
  {
    "url": "assets/js/12.7df642e8.js",
    "revision": "a5cbd609c3708809e3db51c31592d71e"
  },
  {
    "url": "assets/js/13.e57ac035.js",
    "revision": "a7bdf349d6a868ee4780f70ba63c642f"
  },
  {
    "url": "assets/js/14.d4b79f85.js",
    "revision": "cbd4492b33a973573c8aee762b4be176"
  },
  {
    "url": "assets/js/15.ce937c3c.js",
    "revision": "f7a2b7a462edcbc4fbdbbdab7704f886"
  },
  {
    "url": "assets/js/16.35cfa2fe.js",
    "revision": "45f688878f0eb4dae19473e52e85377d"
  },
  {
    "url": "assets/js/17.3e5e8f2f.js",
    "revision": "cfa0dd70b7fce64bcbca1ff8b9daf3a4"
  },
  {
    "url": "assets/js/18.bb8e1e7a.js",
    "revision": "eb73001c442116625899b046608b36cc"
  },
  {
    "url": "assets/js/19.2f7e28ae.js",
    "revision": "73fa7d34f3a5be21c6dba21c05541e84"
  },
  {
    "url": "assets/js/2.ef20ac42.js",
    "revision": "e73d598c10046732821b8e166a40d223"
  },
  {
    "url": "assets/js/20.321501ab.js",
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
    "url": "assets/js/25.a8628ef5.js",
    "revision": "252c14d63980145e149dbc0ab1081479"
  },
  {
    "url": "assets/js/26.f69b21dd.js",
    "revision": "ba0b9a7552e0ca37cbd48e99478d3e5b"
  },
  {
    "url": "assets/js/27.b93cbfe2.js",
    "revision": "4de8038135940484f9f256cf295e775d"
  },
  {
    "url": "assets/js/28.bc755508.js",
    "revision": "b28e78e1bec2b9665190f13c75068864"
  },
  {
    "url": "assets/js/29.bb93d1d5.js",
    "revision": "69f63cedc82a7dff64481dfdbc621210"
  },
  {
    "url": "assets/js/3.15216429.js",
    "revision": "4c9a4af69e0f18fa5f566fab57725d2b"
  },
  {
    "url": "assets/js/30.6deed893.js",
    "revision": "554b0fd1aabc8d1f85f513b0d408df62"
  },
  {
    "url": "assets/js/31.9cfd4e14.js",
    "revision": "382f807594caaf3d94597b6478e41051"
  },
  {
    "url": "assets/js/32.f572fc08.js",
    "revision": "18c24d289a6e585c716c24d0e4e88547"
  },
  {
    "url": "assets/js/33.b5e6d889.js",
    "revision": "cb5616d474284da9131e1e2dd51f815c"
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
    "url": "assets/js/6.c4de5fb4.js",
    "revision": "c37e2668738afa32f2c538e73053213e"
  },
  {
    "url": "assets/js/7.4a5373f5.js",
    "revision": "c212f4703f1ae765e0e560d4417387ca"
  },
  {
    "url": "assets/js/app.3bcdd454.js",
    "revision": "715a71b06587ffef7f3211984c9fe6a8"
  },
  {
    "url": "assets/js/vendors~docsearch.663d6e13.js",
    "revision": "8bc34d9e220031e107f40d9f4dcaae68"
  },
  {
    "url": "computer-graphics/1-Course-Intro.html",
    "revision": "4994c0419ecc8019294a4af05e7ac06e"
  },
  {
    "url": "computer-graphics/2-Rendering-Basics.html",
    "revision": "3082172902d52f360d7c7ca78427d2b4"
  },
  {
    "url": "computer-graphics/3-Transformations-v2.html",
    "revision": "5f90bbc2f6a9b66b87bf04646ebf3e29"
  },
  {
    "url": "computer-graphics/4-Affine-Space-Frame_Matrix.html",
    "revision": "de53d4510d8f8d85e9e758fe7383d510"
  },
  {
    "url": "computer-graphics/5-Vertex-Processing-1.html",
    "revision": "8470ba263822907865c5f33ec7cd2db6"
  },
  {
    "url": "computer-graphics/6-Vertex-Processing-2.html",
    "revision": "4a30becd1645c6dcde657ca22e88c64e"
  },
  {
    "url": "computer-graphics/7-Hierachical-Modeling-Mesh.html",
    "revision": "6abc2cc559178405ec03021278785f75"
  },
  {
    "url": "computer-graphics/8-Lighting.html",
    "revision": "1602c50cc56ee6ca8ab1c26ff5a946f7"
  },
  {
    "url": "images/example.png",
    "revision": "82df45d7ce11e0ec1808c757e26dcb4c"
  },
  {
    "url": "images/kmbzn.png",
    "revision": "c2d8e1905ba07c7df643cbd6f3a6ad45"
  },
  {
    "url": "images/logo.png",
    "revision": "196e5d1f2f3eed723e901517c20926d3"
  },
  {
    "url": "images/main.svg",
    "revision": "ee29bf53597637369d1bb55d6a7e431a"
  },
  {
    "url": "images/profile.jpg",
    "revision": "b17c38360752244f439bb08d4e8e7f68"
  },
  {
    "url": "index.html",
    "revision": "534c049a6c5dd46fd79f9126b9ece412"
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
