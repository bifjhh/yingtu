webpackJsonp([5],{dKBn:function(t,n){},"iNA+":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={components:{NavTop:e("bOL6").a},data:function(){return{conten:""}},created:function(){var t=this,n=t.$route.params.id;console.log(t.$route.params.id),t.$http.post("",{apiCode:"_jianqiaodetail_001",type:n}).then(function(n){200==n.status&&"OK"==n.statusText&&(t.conten=n.data.info.content)})}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"info_box"},[n("NavTop"),this._v(" "),n("div",{staticClass:"conten",domProps:{innerHTML:this._s(this.conten)}})],1)},staticRenderFns:[]};var s=e("VU/8")(a,o,!1,function(t){e("dKBn")},"data-v-1375a104",null);n.default=s.exports}});
//# sourceMappingURL=5.6b7cd71c4cad9f4295dc.js.map