(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-189144a4"],{"132d":function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var i,r=n("bd86"),a=(n("7514"),n("f386"),n("c5f6"),n("6762"),n("2fdb"),n("4804"),n("a9ad")),s=n("af2b"),o=n("7560"),u=n("80d2"),l=n("a026"),c=n("58df");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t){return["fas","far","fal","fab"].some((function(e){return t.includes(e)}))}function v(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var p=Object(c["a"])(a["a"],s["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(u["s"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(u["q"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(u["e"])(this.size)},getDefaultData:function(){var t=Boolean(this.$listeners.click||this.$listeners["!click"]),e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:d({"aria-hidden":!t,role:t?"button":null},this.$attrs),on:this.$listeners};return e},applyColors:function(t){t.class=d({},t.class,{},this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),r="material-icons",a=t.indexOf("-"),s=a<=-1;s?n.push(t):(r=t.slice(0,a),f(r)&&(r="")),i.class[r]=!0,i.class[t]=!s;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.tag,i,n)},renderSvgIcon:function(t,e){var n=this.getDefaultData();n.class["v-icon--svg"]=!0,n.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.$attrs["aria-label"],"aria-label":this.$attrs["aria-label"]};var i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i},n.attrs.height=i,n.attrs.width=i),this.applyColors(n),e("svg",n,[e("path",{attrs:{d:t}})])},renderSvgIconComponent:function(t,e){var n=this.getDefaultData();n.class["v-icon--is-component"]=!0;var i=this.getSize();i&&(n.style={fontSize:i,height:i}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(r,n)}},render:function(t){var e=this.getIcon();return"string"===typeof e?v(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,i=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,r?[r]:i)}})},"166a":function(t,e,n){},"20d6":function(t,e,n){"use strict";var i=n("5ca1"),r=n("0a49")(6),a="findIndex",s=!0;a in[]&&Array(1)[a]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},3206:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u}));var i=n("bd86"),r=n("a026"),a=n("d9bd");function s(t,e){return function(){return Object(a["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function o(t,e,n){var a=e&&n?{register:s(e,n),unregister:s(e,n)}:null;return r["a"].extend({name:"registrable-inject",inject:Object(i["a"])({},t,{default:a})})}function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].extend({name:"registrable-provide",methods:e?{}:{register:null,unregister:null},provide:function(){return Object(i["a"])({},t,e?this:{register:this.register,unregister:this.unregister})}})}},4804:function(t,e,n){},"490a":function(t,e,n){"use strict";n("c5f6"),n("8d4f");var i=n("a9ad"),r=n("80d2");e["a"]=i["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(r["e"])(this.calculatedSize),width:Object(r["e"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4e82":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("bd86"),r=n("3206");function a(t,e,n){var a=Object(r["a"])(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(i["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}});return a}a("itemGroup")},"5d6a":function(t,e,n){"use strict";var i=n("6e5a"),r=n.n(i);r.a},"604c":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("8e6e"),n("456d"),n("20d6"),n("7514"),n("ac6a"),n("6762"),n("2fdb");var i=n("bd86"),r=(n("c5f6"),n("166a"),n("a452")),a=n("7560"),s=n("58df"),o=n("d9bd");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=Object(s["a"])(r["a"],a["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return l({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});c.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"6e5a":function(t,e,n){},"7e58":function(t,e,n){},"8d4f":function(t,e,n){},"9d26":function(t,e,n){"use strict";var i=n("132d");e["a"]=i["a"]},af2b:function(t,e,n){"use strict";n("f386");var i=n("a026");e["a"]=i["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},f227:function(t,e,n){"use strict";n("c5f6");var i=n("a026"),r=n("3865");i["a"].component("animated-number",{props:{value:{type:[Number,String],default:"0",required:!0},easing:{type:String,default:"linear"},duration:{type:Number,default:1e3}},template:"<span>{{ animatedValue.toFixed && animatedValue.toFixed(0) }}</span>",data:function(){return{animatedValue:0}},watch:{value:function(t){this.animateValue(t)}},methods:{animateValue:function(t){Object(r["a"])({targets:this,animatedValue:t,easing:this.easing})}},mounted:function(){this.animateValue(this.value)}})},f2e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var i=n("bd86"),r=n("a026");function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return r["a"].extend({name:"toggleable",model:{prop:e,event:n},props:Object(i["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(i["a"])(t,e,(function(t){this.isActive=!!t})),Object(i["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var s=a();e["a"]=s},f386:function(t,e,n){"use strict";n("386b")("small",(function(t){return function(){return t(this,"small","","")}}))},f807:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$user?n("v-card",{staticClass:"mb-1"},[n("v-card-title",{attrs:{"primary-title":""}},[n("h5",{staticClass:"headline mb-0"},[t._v("\n      "+t._s(t.$tr.BALANCE)+":\n      "),n("code",{staticStyle:{"white-space":"normal"}},[n("animated-number",{attrs:{value:t.$user.balance}}),t._v("X2P\n      ")],1)]),t.steamworks?t._e():n("add-balance")],1),n("v-card-text",{staticClass:"py-0"},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"spacer"},[n("v-text-field",{attrs:{label:t.$tr.BET_AMOUNT,error:!!t.betError,"error-messages":t.betError,outlined:""},on:{mousewheel:t.betInputScroll,click:function(e){t.betError=!1}},model:{value:t.betValue,callback:function(e){t.betValue=e},expression:"betValue"}})],1),n("v-btn-toggle",{staticClass:"btn-bet d-block pb-8"},[n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){t.betValue=void 0}}},[t._v(t._s(t.$tr.CLEAR))]),n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){t.betValue=t.prevBet}}},[t._v(t._s(t.$tr.PREVIOUS_BET))]),n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){return t.add(1)}}},[t._v("+1")]),n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){return t.add(10)}}},[t._v("+10")]),n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){return t.add(100)}}},[t._v("+100")]),n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){return t.add(1e3)}}},[t._v("+1000")]),n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){return t.add(t.betValue)}}},[t._v("x2")]),n("v-btn",{staticClass:"v-btn--active",attrs:{height:"55"},on:{click:function(e){t.betValue=t.$user.balance}}},[t._v("MAX")])],1)],1)],1)],1):t._e()},r=[],a=(n("f227"),{data:function(){return{betError:"",betValue:void 0,prevBet:void 0}},computed:{steamworks:function(){return this.core.steamworks}},methods:{add:function(t){if(this.roulette.error=null,t){var e=parseInt(this.betValue);isNaN(e)&&(e=0),e+=t,e>this.$user.balance||(this.betValue=e)}},betInputScroll:function(t){this.roulette.error=null,this.betValue||(this.betValue=0),t.wheelDelta<0&this.betValue<=0?this.betValue=0:t.wheelDelta>0&this.betValue==this.$user.balance||(this.betValue=parseInt(this.betValue)+(t.wheelDelta>0?10:-10))}},inject:["core","roulette"],components:{addBalance:function(){return n.e("chunk-2d0bd978").then(n.bind(null,"2d3c"))}},created:function(){this.$tr.register({BALANCE:{en:"Balance",ru:"Баланс"},BET_AMOUNT:{en:"Bet amount...",ru:"Ставка"},CLEAR:{en:"Clear",ru:"Очистить"},PREVIOUS_BET:{en:"Last",ru:"Посл."}})},mounted:function(){var t=this;this.roulette.$on("betError",(function(e){return t.betError=e}))}}),s=a,o=(n("5d6a"),n("2877")),u=n("6544"),l=n.n(u),c=n("8336"),h=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),d=(n("7e58"),n("604c")),f=d["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return d["a"].options.computed.classes.call(this)}},methods:{genData:d["a"].options.methods.genData}}),v=n("a9ad"),p=n("58df");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach((function(e){Object(h["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=Object(p["a"])(f,v["a"]).extend({name:"v-btn-toggle",props:{rounded:Boolean},computed:{classes:function(){return g({},f.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--rounded":this.rounded},this.themeClasses)}},methods:{genData:function(){return this.setTextColor(this.color,g({},f.options.methods.genData.call(this)))}}}),y=n("b0af"),O=n("99d9"),x=n("0e8f"),V=n("a722"),w=n("8654"),S=Object(o["a"])(s,i,r,!1,null,null,null);e["default"]=S.exports;l()(S,{VBtn:c["a"],VBtnToggle:b,VCard:y["a"],VCardText:O["a"],VCardTitle:O["b"],VFlex:x["a"],VLayout:V["a"],VTextField:w["a"]})}}]);