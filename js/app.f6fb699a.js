(function(e)
 {function t(t)
  {for(var n,i,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;
   for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);
   while(d.length)d.shift()();
   return o.push.apply(o,l||[]),r()}
  
  function r(){
    for(var e,t=0;t<o.length;t++){
      for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}
    return e}
 
  var n={},a={app:0},o=[];
  function i(e){
    return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7a9496d6"}[e]+".js"}
  
  function c(t){
    if(n[t])
      return n[t].exports;
    var r=n[t]={i:t,l:!1,exports:{}};
    return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);
      else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);
           var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);
           var l=new Error;
           o=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=a[e];if(0!==r){
             if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};
           var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}
                                                                               return Promise.all(t)},
      c.m=e,c.c=n,
      c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},
      c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},
      c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)
      return e;
                        var r=Object.create(null);
                        if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)
                          for(var n in e)
                            c.d(r,n,function(t){return e[t]}.bind(null,n));
                        return r},
      c.n=function(e){var t=e&&e.__esModule?function(){
      return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-app-bar-nav-icon"),r("v-toolbar-title",[e._v("Katja's Projects")])],1),r("v-main",[r("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}}},c=i,s=r("2877"),l=r("6544"),u=r.n(l),p=r("7496"),d=r("40dc"),f=r("5bc1"),v=r("f6c4"),m=r("2a7f"),b=Object(s["a"])(c,a,o,!1,null,null,null),h=b.exports;u()(b,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VMain:v["a"],VToolbarTitle:m["a"]});r("d3b7");var g=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HelloWorld")],1)},w=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-img",{staticClass:"white--text align-end",attrs:{src:r("9d64"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"300px",contain:""}},[n("v-card-title",[e._v("The Residence Assistants")])],1),n("v-card-text",{staticClass:"text--primary"},[n("div",[e._v(' An online 3 to 5 player cooperative trick taking game based on "The Crew: Quest for Planet Nine" ')])]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:"",href:"https://tiangco.github.io/ras/",target:"_blank"}},[e._v(" Play ")])],1)],1)],1)],1)],1)},x=[],_={name:"HelloWorld",data:function(){return{cards:[{title:"Pre-fab homes",src:"../assets/logo.png",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}]}}},O=_,V=r("8336"),P=r("b0af"),C=r("99d9"),T=r("62ad"),A=r("a523"),k=r("adda"),S=r("0fd9"),E=Object(s["a"])(O,j,x,!1,null,null,null),H=E.exports;u()(E,{VBtn:V["a"],VCard:P["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VCol:T["a"],VContainer:A["a"],VImg:k["a"],VRow:S["a"]});var M={name:"Home",components:{HelloWorld:H}},B=M,$=Object(s["a"])(B,y,w,!1,null,null,null),N=$.exports;n["a"].use(g["a"]);var R=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],W=new g["a"]({routes:R}),I=W,J=r("2f62");n["a"].use(J["a"]);var L=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=r("f309");n["a"].use(q["a"]);var F=new q["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:I,store:L,vuetify:F,render:function(e){return e(h)}}).$mount("#app")},"9d64":function(e,t,r){e.exports=r.p+"img/TheRAs.1ac12093.png"}});
//# sourceMappingURL=app.f6fb699a.js.map
