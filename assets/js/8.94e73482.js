(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{384:function(t,e,n){},386:function(t,e,n){"use strict";var i=n(0),r=!1;e.a=function(t,e){if(!i.a.prototype.$isServer){var n=function(t){e.drag&&e.drag(t)},s=function t(i){document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",t),document.onselectstart=null,document.ondragstart=null,r=!1,e.end&&e.end(i)};t.addEventListener("mousedown",(function(t){r||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},document.addEventListener("mousemove",n),document.addEventListener("mouseup",s),r=!0,e.start&&e.start(t))}))}}},391:function(t,e,n){"use strict";var i=n(384);n.n(i).a},393:function(t,e,n){"use strict";n.r(e);var i=n(386),r={props:{color:{type:Object,default:function(){return{}}},vertical:{type:Boolean,default:!0}},data:function(){return{thumbLeft:0,thumbTop:0}},computed:{hueValue:function(){return this.color.get("hue")}},watch:{hueValue:function(){this.update()}},mounted:function(){var t=this,e=this.$refs,n=e.bar,r=e.thumb,s={drag:function(e){t.handleDrag(e)},end:function(e){t.handleDrag(e)}};Object(i.a)(n,s),Object(i.a)(r,s),this.update()},methods:{handleClick:function(t){var e=this.$refs.thumb;t.target!==e&&this.handleDrag(t)},handleDrag:function(t){var e,n=this.$el.getBoundingClientRect(),i=this.$refs.thumb;if(this.vertical){var r=t.clientY-n.top;r=Math.min(r,n.height-i.offsetHeight/2),r=Math.max(i.offsetHeight/2,r),e=Math.round((r-i.offsetHeight/2)/(n.height-i.offsetHeight)*360)}else{var s=t.clientX-n.left;s=Math.min(s,n.width-i.offsetWidth/2),s=Math.max(i.offsetWidth/2,s),e=Math.round((s-i.offsetWidth/2)/(n.width-i.offsetWidth)*360)}this.color.set("hue",e)},getThumbLeft:function(){if(this.vertical)return 0;var t=this.$el,e=this.color.get("hue");if(!t)return 0;var n=this.$refs.thumb;return Math.round(e*(t.offsetWidth-n.offsetWidth/2)/360)},getThumbTop:function(){if(!this.vertical)return 0;var t=this.$el,e=this.color.get("hue");if(!t)return 0;var n=this.$refs.thumb;return Math.round(e*(t.offsetHeight-n.offsetHeight/2)/360)},update:function(){this.thumbLeft=this.getThumbLeft(),this.thumbTop=this.getThumbTop()}}},s=(n(391),n(35)),o=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"press-color-hue-slider",class:{"is-vertical":this.vertical}},[e("div",{ref:"bar",staticClass:"press-color-hue-slider__bar",on:{click:this.handleClick}}),this._v(" "),e("div",{ref:"thumb",staticClass:"press-color-hue-slider__thumb",style:{left:this.thumbLeft+"px",top:this.thumbTop+"px"}})])}),[],!1,null,"b64da036",null);e.default=o.exports}}]);