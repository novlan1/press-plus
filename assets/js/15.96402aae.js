(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{419:function(e,t,a){},461:function(e,t,a){"use strict";var n=a(419);a.n(n).a},476:function(e,t,a){"use strict";a.r(t);var n={name:"LogItemText",functional:!1,props:{showTag:{type:Boolean,default:!0},tagType:{type:String,default:"feat"},only:{type:Boolean,default:!1}},computed:{tagName:function(){var e="新增";switch(this.tagType){case"feat":e="新增";break;case"fix":e="修复";break;case"docs":e="文档";break;case"refactor":e="重构";break;case"perf":e="优化";break;case"test":e="测试";break;case"revert":e="回滚"}return e}}},r=(a(461),a(35)),s=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"log-item-text",class:{"text--only":e.only}},[e.showTag?a("Badge",{attrs:{text:e.tagName,type:e.tagType,right:"10"}}):e._e(),e._v(" "),e._t("default",(function(){return[e._v("-")]}))],2)}),[],!1,null,null,null);t.default=s.exports}}]);