(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5,8,9],{384:function(t,e,n){},385:function(t,e,n){},386:function(t,e,n){"use strict";var r=n(0),o=!1;e.a=function(t,e){if(!r.a.prototype.$isServer){var n=function(t){e.drag&&e.drag(t)},a=function t(r){document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",t),document.onselectstart=null,document.ondragstart=null,o=!1,e.end&&e.end(r)};t.addEventListener("mousedown",(function(t){o||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},document.addEventListener("mousemove",n),document.addEventListener("mouseup",a),o=!0,e.start&&e.start(t))}))}}},388:function(t,e,n){},389:function(t,e,n){},391:function(t,e,n){"use strict";var r=n(384);n.n(r).a},392:function(t,e,n){"use strict";var r=n(385);n.n(r).a},393:function(t,e,n){"use strict";n.r(e);var r=n(386),o={props:{color:{type:Object,default:function(){return{}}},vertical:{type:Boolean,default:!0}},data:function(){return{thumbLeft:0,thumbTop:0}},computed:{hueValue:function(){return this.color.get("hue")}},watch:{hueValue:function(){this.update()}},mounted:function(){var t=this,e=this.$refs,n=e.bar,o=e.thumb,a={drag:function(e){t.handleDrag(e)},end:function(e){t.handleDrag(e)}};Object(r.a)(n,a),Object(r.a)(o,a),this.update()},methods:{handleClick:function(t){var e=this.$refs.thumb;t.target!==e&&this.handleDrag(t)},handleDrag:function(t){var e,n=this.$el.getBoundingClientRect(),r=this.$refs.thumb;if(this.vertical){var o=t.clientY-n.top;o=Math.min(o,n.height-r.offsetHeight/2),o=Math.max(r.offsetHeight/2,o),e=Math.round((o-r.offsetHeight/2)/(n.height-r.offsetHeight)*360)}else{var a=t.clientX-n.left;a=Math.min(a,n.width-r.offsetWidth/2),a=Math.max(r.offsetWidth/2,a),e=Math.round((a-r.offsetWidth/2)/(n.width-r.offsetWidth)*360)}this.color.set("hue",e)},getThumbLeft:function(){if(this.vertical)return 0;var t=this.$el,e=this.color.get("hue");if(!t)return 0;var n=this.$refs.thumb;return Math.round(e*(t.offsetWidth-n.offsetWidth/2)/360)},getThumbTop:function(){if(!this.vertical)return 0;var t=this.$el,e=this.color.get("hue");if(!t)return 0;var n=this.$refs.thumb;return Math.round(e*(t.offsetHeight-n.offsetHeight/2)/360)},update:function(){this.thumbLeft=this.getThumbLeft(),this.thumbTop=this.getThumbTop()}}},a=(n(391),n(35)),s=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"press-color-hue-slider",class:{"is-vertical":this.vertical}},[e("div",{ref:"bar",staticClass:"press-color-hue-slider__bar",on:{click:this.handleClick}}),this._v(" "),e("div",{ref:"thumb",staticClass:"press-color-hue-slider__thumb",style:{left:this.thumbLeft+"px",top:this.thumbTop+"px"}})])}),[],!1,null,"b64da036",null);e.default=s.exports},394:function(t,e,n){"use strict";n.r(e);var r=n(386),o={props:{color:{required:!0}},data:function(){return{cursorTop:0,cursorLeft:0,background:"hsl(0, 100%, 50%)"}},computed:{colorValue:function(){return{hue:this.color.get("hue"),value:this.color.get("value")}}},watch:{colorValue:function(){this.update()}},mounted:function(){var t=this;Object(r.a)(this.$el,{drag:function(e){t.handleDrag(e)},end:function(e){t.handleDrag(e)}}),this.update()},methods:{update:function(){var t=this.color.get("saturation"),e=this.color.get("value"),n=this.$el,r=n.clientWidth,o=n.clientHeight;this.cursorLeft=t*r/100,this.cursorTop=(100-e)*o/100,this.background="hsl(".concat(this.color.get("hue"),", 100%, 50%)")},handleDrag:function(t){var e=this.$el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;n=Math.max(0,n),n=Math.min(n,e.width),r=Math.max(0,r),r=Math.min(r,e.height),this.cursorLeft=n,this.cursorTop=r,this.color.set({saturation:n/e.width*100,value:100-r/e.height*100})}}},a=(n(392),n(35)),s=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"press-color-svpanel",style:{backgroundColor:this.background}},[e("div",{staticClass:"press-color-svpanel__white"}),this._v(" "),e("div",{staticClass:"press-color-svpanel__black"}),this._v(" "),e("div",{staticClass:"press-color-svpanel__cursor",style:{top:this.cursorTop+"px",left:this.cursorLeft+"px"}},[e("div")])])}),[],!1,null,"477d4f32",null);e.default=s.exports},410:function(t,e,n){"use strict";var r=n(388);n.n(r).a},411:function(t,e,n){"use strict";var r=n(389);n.n(r).a},412:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={A:10,B:11,C:12,D:13,E:14,F:15},o={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},a=function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)},s=function(t){return"string"==typeof t&&-1!==t.indexOf("%")};e.bound01=function(t,e){a(t)&&(t="100%");var n=s(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt("".concat(t*e),10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat("".concat(e))},e.isOnePointZero=a,e.isPercentage=s,e.parseHexChannel=function(t){return 2===t.length?16*(r[t[0].toUpperCase()]||+t[0])+(r[t[1].toUpperCase()]||+t[1]):r[t[0].toUpperCase()]||+t[0]},e.rgbToHex=function(t){var e=t.r,n=t.g,r=t.b,a=function(t){t=Math.min(Math.round(t),255);var e=Math.floor(t/16),n=t%16;return"".concat(o[e]||e).concat(o[n]||n)};return isNaN(e)||isNaN(n)||isNaN(r)?"":"#".concat(a(e)).concat(a(n)).concat(a(r))}},413:function(t,e,n){},428:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(412);e.hsl2hsv=function(t,e,n){n/=100;var r=e/=100,o=Math.max(n,.01);return e*=(n*=2)<=1?n:2-n,r*=o<=1?o:2-o,{h:t,s:100*(0===n?2*r/(o+r):2*e/(n+e)),v:100*((n+e)/2)}},e.hsv2hsl=function(t,e,n){return[t,e*n/((t=(2-e)*n)<1?t:2-t)||0,t/2]},e.hsv2rgb=function(t,e,n){t=6*r.bound01(t,360),e=r.bound01(e,100),n=r.bound01(n,100);var o=Math.floor(t),a=t-o,s=n*(1-e),i=n*(1-a*e),c=n*(1-(1-a)*e),u=o%6,h=[n,i,s,s,c,n][u],l=[c,n,n,i,s,s][u],f=[s,s,c,n,n,i][u];return{r:Math.round(255*h),g:Math.round(255*l),b:Math.round(255*f)}},e.rgb2hsv=function(t,e,n){t=r.bound01(t,255),e=r.bound01(e,255),n=r.bound01(n,255);var o=Math.max(t,e,n),a=Math.min(t,e,n),s=0,i=o,c=o-a,u=0===o?0:c/o;if(o===a)s=0;else{switch(o){case t:s=(e-n)/c+(e<n?6:0);break;case e:s=(n-t)/c+2;break;case n:s=(t-e)/c+4}s/=6}return{h:360*s,s:100*u,v:100*i}}},430:function(t,e,n){"use strict";n.r(e);var r=n(393),o=n(394),a={components:{HueSlider:r.default,SvPanel:o.default},props:{color:{type:Object,default:function(){return{}}}},data:function(){return{customInput:"",showPopper:!1}},computed:{currentColor:function(){var t=this.$parent;return t.value||t.showPanelColor?t.color.value:""}},watch:{showPopper:function(t){var e=this;!0===t&&this.$nextTick((function(){var t=e.$refs,n=t.sl,r=t.hue,o=t.alpha;n&&n.update(),r&&r.update(),o&&o.update()}))},currentColor:{immediate:!0,handler:function(t){this.customInput=t}}},mounted:function(){this.popperElm=this.$el,this.$parent.popperElm=this.popperElm,this.referenceElm=this.$parent.$el},methods:{confirmValue:function(){this.$emit("pick")},handleConfirm:function(){this.color.fromString(this.customInput)}}},s=(n(410),n(411),n(35)),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-color-wrap"},[n("div",{staticClass:"press-color-upper"},[n("sv-panel",{attrs:{color:t.color}}),t._v(" "),n("hue-slider",{attrs:{color:t.color}})],1),t._v(" "),n("div",{staticClass:"press-color-buttons"},[n("div",{staticClass:"press-color-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.customInput,expression:"customInput"}],staticClass:"press-input",domProps:{value:t.customInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleConfirm.apply(null,arguments)},blur:t.handleConfirm,input:function(e){e.target.composing||(t.customInput=e.target.value)}}})]),t._v(" "),n("div",[n("button",{staticClass:"press-button press-button--text press-button--mini",on:{click:function(e){return t.$emit("clear")}}},[t._v("\n        清空\n      ")]),t._v(" "),n("button",{staticClass:"press-button press-button--primary press-button--mini",on:{click:t.confirmValue}},[t._v("\n        确定\n      ")])])])])}),[],!1,null,"3ce452c5",null);e.default=i.exports},454:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(412),o=n(428);function a(t){var e=t.value,n=t.reg,r=void 0===n?/hsla|hsl|\(|\)/gm:n,a=t.transformFunc,s=void 0===a?o.hsl2hsv:a,i=100,c=0,u=100,h=100,l=e.replace(r,"").split(/\s|,/g).filter((function(t){return""!==t})).map((function(t,e){return e>2?parseFloat(t):parseInt(t,10)}));if(4===l.length?i=Math.floor(100*parseFloat("".concat(l[3]))):3===l.length&&(i=100),l.length>=3){var f=s(l[0],l[1],l[2]);c=f.h,u=f.s,h=f.v}return{h:c,s:u,v:h,alpha:i}}function s(t){return a({value:t,reg:/hsla|hsl|\(|\)/gm,transformFunc:o.hsl2hsv})}function i(t){var e=100,n=t.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter((function(t){return""!==t})).map((function(t,e){return e>2?parseFloat(t):parseInt(t,10)}));return 4===n.length?e=Math.floor(100*parseFloat("".concat(n[3]))):3===n.length&&(e=100),{h:n[0],s:n[1],v:n[2],alpha:e}}function c(t){return a({value:t,reg:/rgba|rgb|\(|\)/gm,transformFunc:o.rgb2hsv})}function u(t){var e=t.replace("#","").trim(),n=0,o=0,a=0,s=0;return/^(?:[0-9a-fA-F]{3}){1,2}|[0-9a-fA-F]{8}$/.test(e)?(3===e.length?(n=r.parseHexChannel(e[0]+e[0]),o=r.parseHexChannel(e[1]+e[1]),a=r.parseHexChannel(e[2]+e[2])):6!==e.length&&8!==e.length||(n=r.parseHexChannel(e.substring(0,2)),o=r.parseHexChannel(e.substring(2,4)),a=r.parseHexChannel(e.substring(4,6))),8===e.length?s=Math.floor(r.parseHexChannel(e.substring(6))/255*100):3!==e.length&&6!==e.length||(s=100),{r:n,g:o,b:a,alpha:s}):{r:n,g:o,b:a,alpha:s}}e.parseColorToHSV=function(t){var e,n,r,a=100,h=0,l=100,f=100;if(-1!==t.indexOf("hsl")){var p=s(t);h=p.h,l=p.s,f=p.v,a=p.alpha}else if(-1!==t.indexOf("hsv")){p=i(t);h=p.h,l=p.s,f=p.v,a=p.alpha}else if(-1!==t.indexOf("rgb")){p=c(t);h=p.h,l=p.s,f=p.v,a=p.alpha}else if(-1!==t.indexOf("#")){var d=u(t),v=d.r,m=d.g,g=d.b;a=d.alpha;p=o.rgb2hsv(v,m,g);h=p.h,l=p.s,f=p.v}return e=h,n=l,r=f,h=Math.max(0,Math.min(360,e)),l=Math.max(0,Math.min(100,n)),f=Math.max(0,Math.min(100,r)),{h:h,s:l,v:f,alpha:a}},e.parseHSLString=s,e.parseHSVString=i,e.parseRGBBracket=c,e.parseRGBHex=u},455:function(t,e,n){"use strict";var r=n(413);n.n(r).a},465:function(t,e,n){"use strict";n.r(e);n(31),n(32),n(99);var r=n(430),o=n(93),a=n(44),s=n(45),i=n(454).parseColorToHSV,c=n(428).hsv2rgb,u=n(412).rgbToHex,h=function(){function t(e){for(var n in Object(a.a)(this,t),this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="",e=e||{})e.hasOwnProperty(n)&&(this[n]=e[n]);this.doOnChange()}return Object(s.a)(t,[{key:"set",value:function(t,e){if(1!==arguments.length||"object"!==Object(o.a)(t))this["_".concat(t)]=e,this.doOnChange();else for(var n in t)t.hasOwnProperty(n)&&this.set(n,t[n])}},{key:"get",value:function(t){return this["_".concat(t)]}},{key:"toRgb",value:function(){return c(this._hue,this._saturation,this._value)}},{key:"fromString",value:function(t){if(!t)return this._hue=0,this._saturation=100,this._value=100,void this.doOnChange();var e=i(t),n=e.h,r=e.s,o=e.v,a=e.alpha;this._hue=n,this._saturation=r,this._value=o,this._hue=a,this.doOnChange()}},{key:"compare",value:function(t){return Math.abs(t._hue-this._hue)<2&&Math.abs(t._saturation-this._saturation)<1&&Math.abs(t._value-this._value)<1&&Math.abs(t._alpha-this._alpha)<1}},{key:"doOnChange",value:function(){var t,e,n,r=this._hue,o=this._saturation,a=this._value,s=this._alpha,i=this.format,h=[t=r,(e=o/100)*(n=a/100)/((t=(2-e)*n)<1?t:2-t)||0,t/2],l=c(r,o,a),f=l.r,p=l.g,d=l.b;if(this.enableAlpha)switch(i){case"hsl":this.value="hsla(".concat(r,", ").concat(Math.round(100*h[1]),"%, ").concat(Math.round(100*h[2]),"%, ").concat(s/100,")");break;case"hsv":this.value="hsva(".concat(r,", ").concat(Math.round(o),"%, ").concat(Math.round(a),"%, ").concat(s/100,")");break;default:this.value="rgba(".concat(f,", ").concat(p,", ").concat(d,", ").concat(s/100,")")}else switch(i){case"hsl":this.value="hsl(".concat(r,", ").concat(Math.round(100*h[1]),"%, ").concat(Math.round(100*h[2]),"%)");break;case"hsv":this.value="hsv(".concat(r,", ").concat(Math.round(o),"%, ").concat(Math.round(a),"%)");break;case"rgb":this.value="rgb(".concat(f,", ").concat(p,", ").concat(d,")");break;default:this.value=u(c(r,o,a))}}}]),t}();n(7),n(46);function l(t,e,n){this.$children.forEach((function(r){r.$options.componentName===t?r.$emit.apply(r,[e].concat(n)):l.apply(r,[t,e].concat([n]))}))}var f={methods:{dispatch:function(t,e,n){for(var r=this.$parent||this.$root,o=r.$options.componentName;r&&(!o||o!==t);)(r=r.$parent)&&(o=r.$options.componentName);r&&r.$emit.apply(r,[e].concat(n))},broadcast:function(t,e,n){l.call(this,t,e,n)}}},p={components:{PickerDropdown:r.default},mixins:[f],props:{value:{type:String,default:""}},data:function(){return{color:new h({}),showPicker:!1,showPanelColor:!1}},computed:{displayedColor:function(){return this.value||this.showPanelColor?this.displayedRgb(this.color,this.showAlpha):"transparent"}},watch:{value:function(t){t?t&&t!==this.color.value&&this.color.fromString(t):this.showPanelColor=!1},color:{deep:!0,handler:function(){this.showPanelColor=!0}},displayedColor:function(t){if(this.showPicker){var e=new h({enableAlpha:this.showAlpha,format:this.colorFormat});e.fromString(this.value),t!==this.displayedRgb(e,this.showAlpha)&&this.$emit("active-change",t)}}},mounted:function(){var t=this.value;t&&this.color.fromString(t),this.popperElm=this.$refs.dropdown.$el,document.addEventListener("click",this.onDocumentClick)},beforeDestroy:function(){document.removeEventListener("click",this.onDocumentClick)},methods:{onDocumentClick:function(t){this.$el.contains(t.target)||(this.showPicker=!1)},handleTrigger:function(){this.colorDisabled||(this.showPicker=!this.showPicker)},confirmValue:function(){var t=this.color.value;this.$emit("input",t),this.$emit("change",t),this.dispatch("ElFormItem","el.form.change",t),this.showPicker=!1},clearValue:function(){this.$emit("input",null),this.$emit("change",null),null!==this.value&&this.dispatch("ElFormItem","el.form.change",null),this.showPanelColor=!1,this.showPicker=!1,this.resetColor()},hide:function(){this.showPicker=!1,this.resetColor()},resetColor:function(){var t=this;this.$nextTick((function(){t.value?t.color.fromString(t.value):t.showPanelColor=!1}))},displayedRgb:function(t,e){if(!(t instanceof h))throw Error("color should be instance of Color Class");var n=t.toRgb(),r=n.r,o=n.g,a=n.b;return e?"rgba(".concat(r,", ").concat(o,", ").concat(a,", ").concat(t.get("alpha")/100,")"):"rgb(".concat(r,", ").concat(o,", ").concat(a,")")}}},d=(n(455),n(35)),v=Object(d.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"press-color-picker"},[n("div",{staticClass:"press-color-picker__trigger",style:{backgroundColor:t.displayedColor},on:{click:function(e){return e.stopPropagation(),t.handleTrigger.apply(null,arguments)}}})]),t._v(" "),n("PickerDropdown",{directives:[{name:"show",rawName:"v-show",value:t.showPicker,expression:"showPicker"}],ref:"dropdown",attrs:{color:t.color},on:{pick:t.confirmValue,clear:t.clearValue}})],1)}),[],!1,null,"2b25ef72",null);e.default=v.exports}}]);