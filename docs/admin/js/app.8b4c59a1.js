(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2834cf5f":"48313f96","chunk-2d0b3a39":"20d880dc","chunk-2d0c7f3e":"db237720","chunk-2d0e51e2":"1554b1ee","chunk-2d215d30":"4c1da98b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t){},"4f87":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout",[n("router-view",{attrs:{slot:"body"},slot:"body"})],1)],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("menu-bar"),e._t("body")],2)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"menu-bar"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("A&B Consultores Corporativos")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{exact:"",to:{name:"noticias"}}},[e._v("Noticias")]),n("b-nav-item",{attrs:{href:"#"}},[e._v("Usuarios")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" juanquedena@gmail.com ")]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[e._v("Perfil")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("Cerrar Sessión")])],1)],1)],1)],1)],1)},s=[],l={name:"MenuBar"},f=l,d=n("2877"),p=Object(d["a"])(f,i,s,!1,null,null,null),b=p.exports,h={name:"Layout",components:{MenuBar:b}},v=h,m=Object(d["a"])(v,u,c,!1,null,null,null),y=m.exports,g={name:"App",components:{Layout:y}},w=g,k=Object(d["a"])(w,o,a,!1,null,null,null),_=k.exports,x=(n("d3b7"),n("8c4f"));r["default"].use(x["a"]);var j=new x["a"]({routes:[{name:"inicio",path:"/",component:function(){return n.e("chunk-2d0e51e2").then(n.bind(null,"92b5"))}},{name:"quienes-somos",path:"/quienes-somos",component:function(){return n.e("chunk-2d215d30").then(n.bind(null,"c09f"))}},{name:"servicios-de-asesoria",path:"/servicios-de-asesoria",component:function(){return n.e("chunk-2d0c7f3e").then(n.bind(null,"538b"))}},{name:"contactanos",path:"/contactanos",component:function(){return n.e("chunk-2d0b3a39").then(n.bind(null,"28da"))}},{name:"noticias",path:"/admin/noticias",component:function(){return n.e("chunk-2834cf5f").then(n.bind(null,"b91d"))}}]}),O=n("4360"),P=n.n(O),S=n("5f5b"),E=n("b1e0"),A=(n("4f87"),n("99af"),n("d4ec")),C=n("bee2"),L=n("bc3a"),M=n.n(L),q=n("a7fe"),T=n.n(q),$="http://localhost:3000/",B={init:function(){r["default"].use(T.a,M.a),r["default"].axios.defaults.baseURL=$},setHeader:function(){}},J=function(){function e(t){Object(A["a"])(this,e),this.resource=t}return Object(C["a"])(e,[{key:"query",value:function(e){return r["default"].axios.get(this.resource,{params:e}).catch((function(e){throw new Error("AbstractService ".concat(e))}))}},{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r["default"].axios.get("".concat(this.resource,"/").concat(e)).catch((function(e){throw new Error("AbstractService ".concat(e))}))}},{key:"post",value:function(e){return r["default"].axios.post("".concat(this.resource),e)}},{key:"update",value:function(e,t){return r["default"].axios.put("".concat(this.resource,"/").concat(e),t)}},{key:"put",value:function(e){return r["default"].axios.put("".concat(this.resource),e)}},{key:"delete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r["default"].axios.delete("".concat(this.resource,"/").concat(e)).catch((function(e){throw new Error("AbstractService ".concat(e))}))}}]),e}(),U=(new J("proyectos"),new J("mvps"),B);r["default"].use(S["a"]),r["default"].use(E["a"]),r["default"].config.productionTip=!1,U.init(),new r["default"]({router:j,store:P.a,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.8b4c59a1.js.map