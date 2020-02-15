self.__precacheManifest = [
  {
    "url": "/_next/static/9G2mfs2Ysiw5e3S3UpEXx/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/9G2mfs2Ysiw5e3S3UpEXx/pages/_app.js",
    "revision": "7fd4914210db7f343c90"
  },
  {
    "url": "/_next/static/9G2mfs2Ysiw5e3S3UpEXx/pages/_error.js",
    "revision": "f5b082773f8139f95467"
  },
  {
    "url": "/_next/static/9G2mfs2Ysiw5e3S3UpEXx/pages/index.js",
    "revision": "d8bc77a5f57e05eb6fd3"
  },
  {
    "url": "/_next/static/chunks/b2e3fe915fbb25f9257a67ca2f4fd2bcc437a053.ff3d6454a4bb8ad5573c.js",
    "revision": "f1b724e286fb9f2c0289"
  },
  {
    "url": "/_next/static/chunks/commons.d2a4fe2d2b7011536268.js",
    "revision": "a73f014a8f931960cc1e"
  },
  {
    "url": "/_next/static/runtime/main-e31552551be0d666dbee.js",
    "revision": "de806101df20d8c55165"
  },
  {
    "url": "/_next/static/runtime/polyfills-d60742b4f5287123c374.js",
    "revision": "95b699a6b2e3eb71673d"
  },
  {
    "url": "/_next/static/runtime/webpack-2dafc8058821cf630788.js",
    "revision": "96035b09135e3adf95f4"
  }
];

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

importScripts(
  
);

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
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.js$|.ttf$|.otf$|.css$|.svg$|.jpg$|.png$/, new workbox.strategies.CacheFirst(), 'GET');
