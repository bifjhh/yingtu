webpackJsonp([7],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),i=t("/ocq");o.default.use(i.a);var a=new i.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:function(){return t.e(1).then(t.bind(null,"26dS"))},name:"home"},{path:"/info/:id",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"iNA+"))},name:"info"},{path:"/details/:id",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"uD20"))},name:"details"},{path:"/list/:id",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"80bi"))},name:"list"},{path:"/school",component:function(){return t.e(3).then(t.bind(null,"MsqU"))},name:"school"}]}),r=t("mtWM"),u=t.n(r),c=t("NC6I"),s=t.n(c),d=t("mw3O"),l=t.n(d),p=(t("tvR6"),t("zL8q")),f=(t("UAgs"),{components:{},data:function(){return{h:0}},created:function(){this.h=document.documentElement.clientHeight}}),h={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{style:{minHeight:this.h+"px"},attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var m=t("VU/8")(f,h,!1,function(e){t("rgpc")},null,null).exports;o.default.config.productionTip=!1,u.a.defaults.timeout=5e3,u.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",u.a.defaults.baseURL="https://en-top.cn/index.php",u.a.interceptors.request.use(function(e){e.data.token=s()("1e56c95504a9a846e4c7043704a20f25");var n=JSON.stringify(e.data);return e.data=l.a.stringify({json:n}),e},function(e){console.log(e),Promise.reject(e)}),o.default.prototype.$http=u.a,o.default.use(p.Carousel),o.default.use(p.CarouselItem),new o.default({el:"#app",render:function(e){return e(m)},router:a})},UAgs:function(e,n){var t,o,i,a,r;t=document,o=window,i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",r=function(){var e=i.clientWidth;e&&(i.style.fontSize=e/750*100+"px")},t.addEventListener&&(o.addEventListener(a,r,!1),t.addEventListener("DOMContentLoaded",r,!1))},rgpc:function(e,n){},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.5938f4696de3d09e42ca.js.map