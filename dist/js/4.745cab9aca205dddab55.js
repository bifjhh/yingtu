webpackJsonp([4],{"80bi":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={components:{NavTop:e("bOL6").a},data:function(){return{list:[],page:1,id:"",ifNext:!1}},created:function(){this.id=this.$route.params.id,this.getList(this)},methods:{toinfo:function(t){var i=1*t.target.dataset.type+1e3;this.$router.push({name:"details",params:{id:i}})},getList:function(t){var i=void 0;8==t.id?i="_manyoulist_001":9==t.id&&(i="_huodonglist_001"),t.$http.post("",{apiCode:i,page:t.page,size:10}).then(function(i){200==i.status&&"OK"==i.statusText&&(t.list=t.list.concat(i.data.info),t.list.length>10?t.ifNext=!0:t.ifNext=!1)})},next:function(){this.getList(this)}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"info_box"},[t._l(t.list,function(i){return e("div",t._b({key:i.id,staticClass:"conten",on:{click:t.toinfo}},"div",{"data-type":i.id},!1),[e("div",t._b({staticClass:"title"},"div",{"data-type":i.id},!1),[t._v(t._s(i.title))]),t._v(" "),e("div",t._b({staticClass:"img"},"div",{"data-type":i.id},!1),[e("img",t._b({attrs:{src:i.img}},"img",{"data-type":i.id},!1))])])}),t._v(" "),t.ifNext?e("button",{on:{click:t.next}},[t._v("加载更多...")]):t._e(),t._v(" "),e("NavTop")],2)},staticRenderFns:[]};var n=e("VU/8")(a,s,!1,function(t){e("o12Z")},"data-v-5412ca9a",null);i.default=n.exports},o12Z:function(t,i){}});
//# sourceMappingURL=4.745cab9aca205dddab55.js.map