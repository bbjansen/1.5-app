(function(e){function t(t){for(var i,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);v&&v(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},o={app:0},r=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a994aa58"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"f0b05e14"}[e]+".css",o=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===i||l===o)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var i=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[e],v.parentNode.removeChild(v),n(r)},v.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){a[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(v);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}o[e]=void 0}};var v=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var v=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"21bb":function(e,t,n){"use strict";var i=n("2dad"),a=n.n(i);a.a},"2dad":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v(" Home ")]),e._v(" | "),n("router-link",{attrs:{to:"/settings"}},[e._v(" Settings ")])],1),n("router-view",{attrs:{devices:e.allDevices,distance:e.distance},on:{distanceUpdate:e.changeDistance}})],1)},o=[],r=(n("7db0"),n("4160"),n("159b"),n("d4ec")),c=n("bee2"),s=n("2caf"),u=n("262e"),l=n("9ab4"),d=n("60a3"),v=function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.allDevices=[],e.distance=0,e}return Object(c["a"])(n,[{key:"getStoredDistance",value:function(){var e=localStorage.getItem("DISTANCE")||"0";this.distance=JSON.parse(e)}},{key:"getStoredDevices",value:function(){var e=localStorage.getItem("DEVICES")||"[]";this.allDevices=JSON.parse(e)}},{key:"getStoredNotificationSettings",value:function(){var e=localStorage.getItem("NOTIFICATION")||"false";return JSON.parse(e)}},{key:"created",value:function(){this.getStoredDevices(),this.getStoredDistance(),document.addEventListener("deviceready",this.onDeviceReady,!1)}},{key:"startBackgroundNotifications",value:function(){window.cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:!0}),this.getStoredNotificationSettings()||(localStorage.setItem("NOTIFICATION",JSON.stringify(!0)),window.cordova.plugins.backgroundMode.on("activate",(function(){window.cordova.plugins.notification.local.schedule({id:1,title:"Please activate notifications",text:"Testing notifications",smallIcon:"res://cordova",sound:null,badge:1})})),window.cordova.plugins.backgroundMode.on("deactivate",(function(){window.cordova.plugins.notification.local.cancelAll(1)})))}},{key:"sendPushNotification",value:function(){window.cordova.plugins.notification.local.schedule({id:1,title:"ALERT",text:"Someone is too close",smallIcon:"res://cordova",sound:null,badge:1})}},{key:"onDeviceReady",value:function(){var e=this;window.cordova.plugins.backgroundMode.enable(),this.startBackgroundNotifications(),this.collectDevices(),setInterval((function(){e.collectDevices()}),500),setInterval((function(){e.cleanAlerts()}),5e3)}},{key:"cleanAlerts",value:function(){this.allDevices.forEach((function(e){e.isDanger=!1}))}},{key:"collectDevices",value:function(){window.ble.startScan([],this.onDiscoverDevice,this.onError)}},{key:"onDiscoverDevice",value:function(e){var t=this.allDevices.find((function(t){return t.id===e.id}));t?(t.rssi=e.rssi,t.distance=-2.5*e.rssi,t.isDanger=this.shouldAlert(e.rssi),t.isDanger&&!t.excluded&&(navigator.vibrate(200),this.sendPushNotification())):this.allDevices.push(e)}},{key:"shouldAlert",value:function(e){var t=-60;return 1===this.distance&&(t=-80),2===this.distance&&(t=-90),3===this.distance&&(t=-100),e>t}},{key:"onError",value:function(e){console.log("Error trying to get device",e)}},{key:"onDevicesChange",value:function(e){localStorage.setItem("DEVICES",JSON.stringify(e))}},{key:"changeDistance",value:function(e){this.distance=e,localStorage.setItem("DISTANCE",JSON.stringify(e))}}]),n}(d["c"]);Object(l["a"])([Object(d["d"])("allDevices")],v.prototype,"onDevicesChange",null),v=Object(l["a"])([d["a"]],v);var f=v,h=f,p=(n("5c0b"),n("2877")),g=Object(p["a"])(h,a,o,!1,null,null,null),b=g.exports,y=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v(" Nearby devices ")]),e.isEdit?n("div",[n("b-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("b-button",{attrs:{type:"is-primary"},on:{click:e.save}},[e._v(" save ")])],1):e._e(),n("ul",e._l(e.lowestRssi,(function(t){return n("li",{key:t.id,class:{"is-danger":t.isDanger}},[n("span",{on:{click:function(n){return e.edit(t)}}},[e._v(" "+e._s(t.name||"Untitled")+" "),n("br"),n("strong",[e._v(e._s(t.distance)+" cm")])]),t.excluded?n("b-button",{attrs:{type:"is-small"},on:{click:function(n){return e.add(t)}}},[e._v(" alert ")]):n("b-button",{attrs:{type:"is-small"},on:{click:function(n){return e.exclude(t)}}},[e._v(" ignore ")])],1)})),0)])},k=[],D=(n("fb6a"),n("b0c0"),n("25f0"),function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.name="",e.isEdit=!1,e.editableDeviceId={},e}return Object(c["a"])(n,[{key:"edit",value:function(e){this.isEdit=!0,this.editableDeviceId=e.id,this.name=e.name||"Untitled..."}},{key:"getDeviceById",value:function(e){return this.devices.find((function(t){return t.id===e}))}},{key:"save",value:function(){var e=this.getDeviceById(this.editableDeviceId);e.name=this.name.toString(),this.name="",this.isEdit=!1}},{key:"exclude",value:function(e){var t=this.getDeviceById(e.id);t.excluded=!0}},{key:"add",value:function(e){var t=this.getDeviceById(e.id);t.excluded=!1}},{key:"lowestRssi",get:function(){return this.devices?this.devices.sort((function(e,t){return e.rssi<t.rssi?1:-1})).slice(0,10):[]}}]),n}(d["c"]));Object(l["a"])([Object(d["b"])()],D.prototype,"devices",void 0),D=Object(l["a"])([d["a"]],D);var O=D,S=O,w=(n("21bb"),Object(p["a"])(S,m,k,!1,null,null,null)),I=w.exports;i["a"].use(y["a"]);var j=[{path:"/",name:"Home",component:I},{path:"/settings",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))}}],E=new y["a"]({base:"",routes:j}),_=E,N=n("289d");n("5abe");i["a"].use(N["a"],{defaultIconPack:"fa"}),i["a"].config.productionTip=!1,new i["a"]({router:_,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.ad95d6f5.js.map