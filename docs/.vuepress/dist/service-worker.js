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
    "revision": "ea4bee40263de68fd25ddbabdcb87629"
  },
  {
    "url": "assets/css/0.styles.a5a6618b.css",
    "revision": "853c8f7cc1b809a893e950ef6dfe1ae3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.07f33ce1.js",
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
    "url": "assets/js/25.baf97143.js",
    "revision": "272540050032f6ff5c8a8bfc964ac866"
  },
  {
    "url": "assets/js/26.73aab62c.js",
    "revision": "7e9fcd95e52a341cd27465b61fdaa86c"
  },
  {
    "url": "assets/js/27.416bda8d.js",
    "revision": "9bf23d3e37545dbc745a0f599260cfb3"
  },
  {
    "url": "assets/js/28.253c07b2.js",
    "revision": "56bebdeebbb26b4ad34ca30f4b2727f5"
  },
  {
    "url": "assets/js/29.c56866f6.js",
    "revision": "2512e1c4c679408e461d18bffbddd61c"
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
    "url": "assets/js/31.67ba72de.js",
    "revision": "f74832a2dbe5a7c7018820b7f6b6bac8"
  },
  {
    "url": "assets/js/32.8865ebee.js",
    "revision": "eea16220499a985fd55b9db78e63b645"
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
    "url": "assets/js/app.1a586d9d.js",
    "revision": "b73bf5a0f8a1a777b7f3203f65f9379f"
  },
  {
    "url": "assets/js/vendors~docsearch.663d6e13.js",
    "revision": "8bc34d9e220031e107f40d9f4dcaae68"
  },
  {
    "url": "computer-graphics/1-Course-Intro.html",
    "revision": "c0c4cac5007f90f1f4640d5c94048375"
  },
  {
    "url": "computer-graphics/2-Rendering-Basics.html",
    "revision": "a10b277f4484f8ce21a315535d3f20ba"
  },
  {
    "url": "computer-graphics/3-Transformations-v2.html",
    "revision": "b6deda6573ca702f78bc5542fe93d120"
  },
  {
    "url": "computer-graphics/4-Affine-Space-Frame_Matrix.html",
    "revision": "57411b8fa9f07264197575ea01cd496b"
  },
  {
    "url": "computer-graphics/5-Vertex-Processing-1.html",
    "revision": "b8daccf6406f867390a432ad35ec2892"
  },
  {
    "url": "computer-graphics/6-Vertex-Processing-2.html",
    "revision": "f2585038f6768a1b00ba53f3c6bb19d6"
  },
  {
    "url": "computer-graphics/7-Hierachical-Modeling-Mesh.html",
    "revision": "1e8407fd287333198a21127d195d5b31"
  },
  {
    "url": "computer-graphics/8-Lighting.html",
    "revision": "a49af9b61e9768e660ad2c08b3916afb"
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
    "revision": "b13627c92fd59b430c829eebd60b223d"
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
