if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const t=e=>s(e,i),f={module:{uri:i},exports:r,require:t};a[i]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.jpeg",revision:"15439cb319630bebf7ef0c6feb945174"},{url:"/10.jpg",revision:"afaa1ba0f6ed5e22dda9d45898fdc5f6"},{url:"/11.webp",revision:"dd7070f5c926fc44690d1a967ea06818"},{url:"/12.webp",revision:"2453a53daf7bb6623e815c122d8ceff7"},{url:"/13.jpg",revision:"36ca05c2f1700bfa4c7ab0e6f790fea1"},{url:"/14.jpg",revision:"02fd18f749eb746fbffc1fcdb9f63f1d"},{url:"/15.jpg",revision:"cb24a492ab7bb99df0cd33887e12a36e"},{url:"/17.webp",revision:"8f6d32d20415f2f54639cc78ee5be56b"},{url:"/6.jpg",revision:"172a187ea6260947c5f90a60941a88be"},{url:"/7.jpg",revision:"97a38aced56d964fb6007e642797ab1d"},{url:"/8.jpeg",revision:"759062dde08ecbe3e17077ec4084d95b"},{url:"/9.jpg",revision:"d662373791f212b6a90e567840aeac49"},{url:"/Botanical Garden.jpg",revision:"96d36053071f8779cac034258d26a172"},{url:"/Dolphin nose_Coonoor.jpeg",revision:"f2358ef985b4d16c43cd383b21ee8b16"},{url:"/YBP.png",revision:"71d75b0dae5ccb5161f04aff80f0db62"},{url:"/_next/app-build-manifest.json",revision:"eba32b34d2ad1150690488969ec1a676"},{url:"/_next/static/chunks/1204-1909bb76872572c6.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/1645-bad9632cb05ef531.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/184-7bba7be27ed946f5.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/19-4654bb435be7d6d5.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/2170a4aa-0f9fa4e1abae99a0.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/231-90b6697b7e46433c.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/2931-f5824059c28020f4.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/3190-050d7a7b7cd9d74f.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/479ba886-6a42afe2a0b339bc.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/5223-0e48c421b72a7833.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/6918-2d0603db5be7a791.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/7023-00b1b89f5d423b4d.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/7428-9822055ec8dc1e86.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/8173-f0a5087b134bf6ad.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/8472-d59363aa989a7237.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/8e1d74a4-c4bcff0dcd77b8c3.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/9109-9fe9affc3bcc361d.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/9836-c619578bdd4bd373.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/9950.998f67cecac1730c.js",revision:"998f67cecac1730c"},{url:"/_next/static/chunks/ad2866b8-132beccc886a61ce.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/Contact/%5Bid%5D/page-93c1a6a3cc48f589.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/Contact/page-d8dd07570be94918.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/PrivacyPolicy/page-8e0e234a52634a86.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/RefundPolicy/page-3a6f3f12a4de62a9.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/Registration/page-6ac3b929f206ffa5.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/Schedule/page-365a2ff3f658630b.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/Speakers/page-6f4f2ff5fb72e6e3.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/Sponsors/SponsorForm/page-7cc17ffa829daca1.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/Sponsors/page-648bb3feefa2377b.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/TermsOfService/page-e2708a22fddf2da3.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/_not-found/page-1ff889d4e2bf28d6.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/abstractForm/%5Bid%5D/page-ab16e7374a336947.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/abstractForm/page-afd79179b2c46dab.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/admin/abstractList/page-84886c3febf7a83f.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/admin/registrationList/page-7c9cec6ca4509653.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/dashboard/page-c142792a5de7b49a.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/group-registration/page-f27f03b186cff931.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/host/page-7e03b67792565ccd.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/layout-c6691d37161e3b08.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/news/%5Bid%5D/page-4d855d3e185a6add.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/ooty/page-749c41dc6de4da7f.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/organisingCommittee/page-155c44432bf49105.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/organization/page-a59b361510d89b66.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/app/page-add1aa6232729804.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/baf10521.27f4c91f78a0d6f2.js",revision:"27f4c91f78a0d6f2"},{url:"/_next/static/chunks/c15bf2b0-c5f2ab0c4ce668d5.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/ca377847-bac4c1f5deb6fdfc.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/fd9d1056-12faf7b739272735.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/main-45d26cf8b7cc6a23.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/main-app-a56c36294aac96d2.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-370a63e3aa2aae56.js",revision:"fZ7m6rkw0TnLgc0-vBPBa"},{url:"/_next/static/css/5a56e3c1761e58ad.css",revision:"5a56e3c1761e58ad"},{url:"/_next/static/css/7aac8ec5af8db4be.css",revision:"7aac8ec5af8db4be"},{url:"/_next/static/fZ7m6rkw0TnLgc0-vBPBa/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/fZ7m6rkw0TnLgc0-vBPBa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/ai-drug-development.jpg",revision:"5a218da36c00d8549937b96464545006"},{url:"/ai-drug-discovery.jpg",revision:"fecfcb1171dc1eada50483baf851b65f"},{url:"/arpb.png",revision:"8d31a9e792871d684f09a0171746788a"},{url:"/dpu.png",revision:"e730492f836b0b4daa2f80ed8e253696"},{url:"/harshal-more-8dS_mTPZ38w-unsplash.jpg",revision:"141b4da07381a5fd252e062e4721e6f0"},{url:"/jsslogo.png",revision:"62413edfb0e31688bd61b9aa0e0f7ad0"},{url:"/jssnewlogo.png",revision:"7f01c01cc92d718f90684ab72b6a4497"},{url:"/manifest.json",revision:"c3b310006c09021cbf57d542deacd02c"},{url:"/nextgen.png",revision:"dc40c5b82bb9a41eac5c62604fb1911e"},{url:"/og-image.png",revision:"dd8f0ef66333b0b2cdffe95f5378ed15"},{url:"/ooty-banner.webp",revision:"0c5a79b02933b5ba41aa73e2324df7b2"},{url:"/ooty.mp4",revision:"8eecb7d21f601f3037cc01e4e82af140"},{url:"/operant.png",revision:"320420738239614a2aef8be1811451f1"},{url:"/opflogo.png",revision:"d12c1e859027a07229eabc6f76cfdca7"},{url:"/profile/Dhanabal.png",revision:"dccceaae09908601a1cf5937ebde7e4f"},{url:"/profile/Durai.png",revision:"7987be71642f0ccd4207596d67e28cb4"},{url:"/profile/Gomathy.png",revision:"56e36bfa5dfcf18eaa2d2ef476cb7f21"},{url:"/profile/Gowramma.png",revision:"c89fef887652b25d4fb7839a33eafb3f"},{url:"/profile/Jubie.png",revision:"cbc4d0aef9f280f4ea1935663ea2b726"},{url:"/profile/Kalirajan.jpg",revision:"5bcaa5fafa8723118cf2277282cd94e7"},{url:"/profile/Surinder.png",revision:"b5cfe1a62811024cd97702d7748f3839"},{url:"/profile/Vijay.jpeg",revision:"63c0325cff06ef224b41aaece1808c18"},{url:"/profile/Wu.jpg",revision:"5a7ea3ed84ecb6af91c76e09f4ce5c4a"},{url:"/profile/chancellor.jpg",revision:"c7753846bab3f4e0459f9ed779907a6d"},{url:"/profile/gopal.jpeg",revision:"debe5e0b8420db3cdcf214c0853ef5fb"},{url:"/robots.txt",revision:"9d0c82bf52f768089b97ffcbcece784b"},{url:"/sitemap-0.xml",revision:"bf01b055b4ef9af336c5d2b1d881caec"},{url:"/sitemap.xml",revision:"28b10ac4733fe8be9e5d0948c5a903b4"},{url:"/uploads/ea9558bc-95b6-4fcd-84a5-880aca5e6758-SBI Application.pdf",revision:"34d45e9d0ad40dfe12ebcd98200283a8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
