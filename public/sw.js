if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),r={module:{uri:o},exports:t,require:c};s[o]=Promise.all(n.map((e=>r[e]||c(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Images/DefaultAvatar.png",revision:"93769ed8d24faa529cd294cf63577823"},{url:"/Images/DefaultBackdrop.png",revision:"a4d6c5c510a3ee72de782536f71224ef"},{url:"/Images/DefaultImage.png",revision:"1235213ca5b1e501bed6acc65af6f798"},{url:"/Images/Hex.png",revision:"364fd4a4b671973f82037e8154285c5d"},{url:"/Images/Loader.svg",revision:"82831cd041f2f5614dd30ca7bcd01a9c"},{url:"/Images/OG.png",revision:"f3827277f2d1f3fe393c105fbdf64325"},{url:"/Images/poster.webp",revision:"508076401021e9974d70a05711670747"},{url:"/_next/static/7_21ILbBGZUonui_iXoTM/_buildManifest.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/7_21ILbBGZUonui_iXoTM/_middlewareManifest.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/7_21ILbBGZUonui_iXoTM/_ssgManifest.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/417-37f693e40b84a4ec.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/651.cd440d205ca10b23.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/962-6e5e4ce671eb44cd.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/main-eecdf7f175a16956.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/_app-3f4d6b5d910bc409.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/_error-0260c064403af775.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/about-8f661b937870a23c.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/index-38944d9511d1a8a5.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/keyword/%5Bid%5D-2db98c59547e273e.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/movies/%5Bid%5D-9413824830cb03ca.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/search/%5Bsearch%5D-6f803e8160cdce63.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/pages/tv/%5Bid%5D-d392731dc78ee77b.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/chunks/webpack-7a4c15aaadd5dcff.js",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/_next/static/css/6e888d87bba80579.css",revision:"7_21ILbBGZUonui_iXoTM"},{url:"/android-chrome-192x192.png",revision:"7bd412846eea22575e40182091d66f50"},{url:"/android-chrome-512x512.png",revision:"e1c995d62888825232a45845405babd4"},{url:"/apple-touch-icon.png",revision:"4f95ae6de6c9cb9d0bc101d8ab3f38c5"},{url:"/favicon-16x16.png",revision:"e919b6786da9166bdb097e5e5639b4a0"},{url:"/favicon-32x32.png",revision:"02772b18a541fa2cd6d4f1267c9cdee1"},{url:"/favicon.ico",revision:"b1e9733184a15b63104e1e6bacb5cb9e"},{url:"/logo192.png",revision:"5ceb9a558b3c4fd7b3e6a67679773a08"},{url:"/logo256.png",revision:"f538303fbf9a3afb277ee982b5df345e"},{url:"/logo384.png",revision:"b3fb47094d343c300fedafc31a898eec"},{url:"/logo512.png",revision:"7b1bfe8ff3be49693104829cbe8e1ebf"},{url:"/manifest.json",revision:"d2ade744e1f46052a47ee5b2ad37fd9b"},{url:"/maskable.png",revision:"c82bb5b639d06f8aaafcdc75b317ef8f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));