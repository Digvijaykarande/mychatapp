if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),l={module:{uri:t},exports:o,require:d};s[t]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-brOnZgGe.css",revision:null},{url:"assets/index-x_cByQ0F.js",revision:null},{url:"index.html",revision:"00b45b2a33d087a38954ed616f995249"},{url:"registerSW.js",revision:"6de17ea044603a698b8049bb9c29d48f"},{url:"service-worker.js",revision:"7585a6e176481bbcd22460dcc8ff7d2e"},{url:"manifest.webmanifest",revision:"8e77cf06f5193cd873c4229fade52277"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
