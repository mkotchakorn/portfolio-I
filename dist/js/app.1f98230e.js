(function(t){function n(n){for(var r,a,c=n[0],A=n[1],i=n[2],f=0,g=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&g.push(u[a][0]),u[a]=0;for(r in A)Object.prototype.hasOwnProperty.call(A,r)&&(t[r]=A[r]);d&&d(n);while(g.length)g.shift()();return o.push.apply(o,i||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,a=1;a<e.length;a++){var A=e[a];0!==u[A]&&(r=!1)}r&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},u={app:0},o=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-09e89f12":"3dea0a3c","chunk-0a64fc96":"613def64","chunk-7e5f9a2d":"f05e9261"}[t]+".js"}function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e=u[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,r){e=u[t]=[n,r]}));n.push(e[2]=r);var o,A=document.createElement("script");A.charset="utf-8",A.timeout=120,c.nc&&A.setAttribute("nonce",c.nc),A.src=a(t);var i=new Error;o=function(n){A.onerror=A.onload=null,clearTimeout(f);var e=u[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,e[1](i)}u[t]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:A})}),12e4);A.onerror=A.onload=o,document.head.appendChild(A)}return Promise.all(n)},c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/",c.oe=function(t){throw console.error(t),t};var A=window["webpackJsonp"]=window["webpackJsonp"]||[],i=A.push.bind(A);A.push=n,A=A.slice();for(var f=0;f<A.length;f++)n(A[f]);var d=i;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0f5a":function(t,n,e){t.exports=e.p+"img/contact.db9f3a55.png"},4947:function(t,n,e){t.exports=e.p+"img/profile.8cde3929.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("navbar")],1),e("div",{attrs:{id:"content"}},[e("router-view")],1)])},o=[],a=(e("fd37"),function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"navbar"}},[r("h1",{staticClass:"center"},[t._v("KOTCHAKORN M.")]),r("h3",{staticClass:"center"},[t._v("- "+t._s(t.$route.name)+" -")]),r("hr"),r("div",{staticClass:"menu center"},[r("div",{staticClass:"menuLink"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:e("c709")}})]),r("h6",[t._v("Portfolio")])],1),r("div",{staticClass:"menuLink"},[r("router-link",{attrs:{to:"/About"}},[r("img",{attrs:{src:e("4947")}})]),r("h6",[t._v("About")])],1),r("div",{staticClass:"menuLink"},[r("router-link",{attrs:{to:"/contact"}},[r("img",{attrs:{src:e("0f5a")}})]),r("h6",[t._v("Contact")])],1)])])}),c=[],A={name:"navbar",data:function(){return{windowWidth:window.innerWidth}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth}))}},i=A,f=e("2877"),d=Object(f["a"])(i,a,c,!1,null,null,null),g=d.exports,l={components:{navbar:g}},v=l,s=Object(f["a"])(v,u,o,!1,null,null,null),p=s.exports,B=(e("d3b7"),e("8c4f"));r["a"].use(B["a"]);var w=[{path:"/",name:"Portfolio",component:function(){return e.e("chunk-7e5f9a2d").then(e.bind(null,"c9e5"))}},{path:"/About",name:"About",component:function(){return e.e("chunk-09e89f12").then(e.bind(null,"c66d"))}},{path:"/contact",name:"Contact",component:function(){return e.e("chunk-0a64fc96").then(e.bind(null,"b8fa"))}}],E=new B["a"]({routes:w}),h=E;e("4989"),e("21b6");r["a"].config.productionTip=!1,new r["a"]({router:h,render:function(t){return t(p)}}).$mount("#app")},c709:function(t,n){t.exports="data:image/png;base64,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"},fd37:function(t,n,e){}});
//# sourceMappingURL=app.1f98230e.js.map