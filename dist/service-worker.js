if(!self.define){let s,l={};const n=(n,r)=>(n=new URL(n+".js",r).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,i)=>{const e=s||("document"in self?document.currentScript.src:"")||location.href;if(l[e])return;let u={};const c=s=>n(s,e),o={module:{uri:e},exports:u,require:c};l[e]=Promise.all(r.map((s=>o[s]||c(s)))).then((s=>(i(...s),u)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"track-it"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/152.c1cb6072.css",revision:null},{url:"/css/367.bd1d7f64.css",revision:null},{url:"/css/458.45a694af.css",revision:null},{url:"/css/462.708d581f.css",revision:null},{url:"/css/554.6cffa447.css",revision:null},{url:"/css/680.ac77071b.css",revision:null},{url:"/css/732.c3df9126.css",revision:null},{url:"/css/744.14a2f19e.css",revision:null},{url:"/css/765.8dbefec8.css",revision:null},{url:"/css/952.a18325b5.css",revision:null},{url:"/css/app.eda7e3a8.css",revision:null},{url:"/css/chunk-vendors.70444ac7.css",revision:null},{url:"/favicon.png",revision:"9f256f902a2b804bc9f6d6e4c0d84c3d"},{url:"/fonts/bootstrap-icons.70a9dee9.woff",revision:null},{url:"/fonts/bootstrap-icons.bfa90bda.woff2",revision:null},{url:"/index.html",revision:"60381100d6f5fa42c5c13a6db7830baf"},{url:"/js/152.7e23f4b9.js",revision:null},{url:"/js/367.83cbcfee.js",revision:null},{url:"/js/458.cbd103e4.js",revision:null},{url:"/js/462.881c7ddc.js",revision:null},{url:"/js/554.21178901.js",revision:null},{url:"/js/668.da7904d6.js",revision:null},{url:"/js/680.62f8c2b6.js",revision:null},{url:"/js/732.fcc1c01d.js",revision:null},{url:"/js/744.0b4bab0f.js",revision:null},{url:"/js/765.8cf42444.js",revision:null},{url:"/js/838.1211f66e.js",revision:null},{url:"/js/952.cf26556a.js",revision:null},{url:"/js/app.2c496706.js",revision:null},{url:"/js/chunk-vendors.e86e9371.js",revision:null},{url:"/manifest.json",revision:"7e2a329f9022aa10004fff66eaa83583"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
