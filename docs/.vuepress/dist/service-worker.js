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
    "revision": "c10e85cc12ee4cfbae7d5891022d3559"
  },
  {
    "url": "assets/css/0.styles.62620382.css",
    "revision": "8a2edd1a9d4274aa412993a51173589f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a6d6fe71.js",
    "revision": "6424170f139d772ed9269d8e2dc2e1e5"
  },
  {
    "url": "assets/js/10.73ef9888.js",
    "revision": "780b2cdc1b5206dcf542f7fd9e08564d"
  },
  {
    "url": "assets/js/11.15839c60.js",
    "revision": "32b9921167abe98a997a30462d3e5e83"
  },
  {
    "url": "assets/js/12.5377fab7.js",
    "revision": "ae2d1ba158bc9e0d17d1d1db72e61a2b"
  },
  {
    "url": "assets/js/13.941ca841.js",
    "revision": "8d765c627f02814465bf546ae54600b2"
  },
  {
    "url": "assets/js/14.93fda981.js",
    "revision": "75861d3a03372b418605d3929912cb91"
  },
  {
    "url": "assets/js/15.c4a98167.js",
    "revision": "511b0a3ccc369a1fd3db498798b79e58"
  },
  {
    "url": "assets/js/16.9daade6c.js",
    "revision": "97bb6396c6a9ea6ab6e1aff1a13b0ea6"
  },
  {
    "url": "assets/js/17.563cb716.js",
    "revision": "9a5f7e6b838a2c15934ad173eb23bb00"
  },
  {
    "url": "assets/js/18.ee3df6ff.js",
    "revision": "e363a5b706e31ad307424abfa95be2bd"
  },
  {
    "url": "assets/js/19.34b32096.js",
    "revision": "09575d59eb5722e2c6bf2ef09b334002"
  },
  {
    "url": "assets/js/2.c315856f.js",
    "revision": "2b2537a114b2983a906ca1103b6b3019"
  },
  {
    "url": "assets/js/20.4dde745d.js",
    "revision": "5ef0703f44d4e870b2933158252d2ed9"
  },
  {
    "url": "assets/js/21.2d34e817.js",
    "revision": "d3d9587e64f7ae2cdc1c33eef22f14e4"
  },
  {
    "url": "assets/js/22.9ee89e7b.js",
    "revision": "05fdaa2f29a53da96ec49ad08210582b"
  },
  {
    "url": "assets/js/23.8733a8a9.js",
    "revision": "fd53feefddbb72b1b35b2dd9fc16edc8"
  },
  {
    "url": "assets/js/24.3c2f7e40.js",
    "revision": "ac20b27615aa39fbe2d8f0bc5b68f651"
  },
  {
    "url": "assets/js/25.b808a736.js",
    "revision": "dd6cb4019f67926df9170412d29b5354"
  },
  {
    "url": "assets/js/26.c6ff53d2.js",
    "revision": "e38f06ecec3c1feadf982e12e3b4b194"
  },
  {
    "url": "assets/js/27.66efda1f.js",
    "revision": "16ca8f3de9edce7663c613752e48dd82"
  },
  {
    "url": "assets/js/28.78b30a25.js",
    "revision": "2af1807c9b42ad5d6739172d98bcbeff"
  },
  {
    "url": "assets/js/29.dfedbca4.js",
    "revision": "0062e6fb5e4a550f46241800efbdad58"
  },
  {
    "url": "assets/js/3.c0dfa28d.js",
    "revision": "d719ad8a3520074752fd9c742cb5c8bd"
  },
  {
    "url": "assets/js/30.35b9fa4f.js",
    "revision": "93198f05a4667d7e29f205a16903d789"
  },
  {
    "url": "assets/js/31.c3263cb7.js",
    "revision": "392e18d852f629c58d2099cc1ba5e5e3"
  },
  {
    "url": "assets/js/32.0e79e404.js",
    "revision": "8c2a6c1f76ffe85f5abdc9c1fa539fff"
  },
  {
    "url": "assets/js/33.040d8d8f.js",
    "revision": "d1cbff5aefc4c280f8ca206362c1e90c"
  },
  {
    "url": "assets/js/34.10f264d7.js",
    "revision": "7ab0ad56e6543e00949c555e0c4e5239"
  },
  {
    "url": "assets/js/4.0149da4e.js",
    "revision": "fe683d5315e421e52bed97a48d231e7f"
  },
  {
    "url": "assets/js/5.c50bed32.js",
    "revision": "7f6dca70433c129c3a41aedd24621aa7"
  },
  {
    "url": "assets/js/6.308da3ee.js",
    "revision": "b780182e9dc9e3e2ca95ce36236bfa09"
  },
  {
    "url": "assets/js/7.b9b26fb2.js",
    "revision": "2253c870c52f8678e61780d53456350d"
  },
  {
    "url": "assets/js/app.bb2642aa.js",
    "revision": "b7a879d5737ef7d4b8b38cda9265952b"
  },
  {
    "url": "assets/js/vendors~docsearch.663d6e13.js",
    "revision": "8bc34d9e220031e107f40d9f4dcaae68"
  },
  {
    "url": "computer-graphics/1-Course-Intro.html",
    "revision": "6212ba9498452e1a9c255af32a4f670a"
  },
  {
    "url": "computer-graphics/2-Rendering-Basics.html",
    "revision": "58785858fe575544023274d4c76a0cb9"
  },
  {
    "url": "computer-graphics/3-Transformations-v2.html",
    "revision": "d28e86b8597daaa51cd311cb20360072"
  },
  {
    "url": "computer-graphics/4-Affine-Space-Frame_Matrix.html",
    "revision": "7f242f65a98e3230c71ae9e18cc1b1f8"
  },
  {
    "url": "computer-graphics/5-Vertex-Processing-1.html",
    "revision": "f4583f66ce0cc96181666d65b83fab39"
  },
  {
    "url": "computer-graphics/6-Vertex-Processing-2.html",
    "revision": "fa61bf7ac1c6be45b70c4ccd8bad754f"
  },
  {
    "url": "computer-graphics/7-Hierachical-Modeling-Mesh.html",
    "revision": "61f046672078947f13d61fadc18704e5"
  },
  {
    "url": "computer-graphics/8-Lighting.html",
    "revision": "f534452aac4eabb99e6dc1033ef44229"
  },
  {
    "url": "images/banner.png",
    "revision": "f5d558ef609074c4de8010f89c882bf2"
  },
  {
    "url": "images/BMC.png",
    "revision": "56a2d8b38f355fd930fc24e8b20aa572"
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
    "url": "index.html",
    "revision": "63fc0ab7736a0e9eeac73b661915ba42"
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
