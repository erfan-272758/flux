(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c6ae8f0"],{"06d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("2f79"),a=Object(r["c"])({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"1f1e":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("2f79"),a=Object(r["c"])({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"205f":function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("9b76"),s=n("8690"),u=n("365c"),l=n("d82f"),b=n("cf75"),d=n("d580"),f=n("6197"),p=n("b885");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=Object(b["d"])(Object(l["m"])(O(O({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(o["t"]),footerClass:Object(b["c"])(o["e"]),footerHtml:Object(b["c"])(o["t"])})),c["l"]),g=Object(r["c"])({name:c["l"],functional:!0,props:m,render:function(t,e){var n,r=e.props,c=e.data,o=e.children,i=r.footerBgVariant,u=r.footerBorderVariant,l=r.footerTextVariant;return t(r.footerTag,Object(a["a"])(c,{staticClass:"card-footer",class:[r.footerClass,(n={},j(n,"bg-".concat(i),i),j(n,"border-".concat(u),u),j(n,"text-".concat(l),l),n)],domProps:o?{}:Object(s["a"])(r.footerHtml,r.footer)}),o)}}),v=n("4918");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=Object(b["d"])(Object(l["m"])(y(y({},Object(l["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(o["g"],!1),end:Object(b["c"])(o["g"],!1),start:Object(b["c"])(o["g"],!1),top:Object(b["c"])(o["g"],!1)})),c["n"]),k=Object(r["c"])({name:c["n"],functional:!0,props:x,render:function(t,e){var n=e.props,r=e.data,c=n.src,o=n.alt,i=n.width,s=n.height,u="card-img";return n.top?u+="-top":n.right||n.end?u+="-right":n.bottom?u+="-bottom":(n.left||n.start)&&(u+="-left"),t("img",Object(a["a"])(r,{class:u,attrs:{src:c,alt:o,width:i,height:s}}))}});function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=Object(b["a"])(x,b["f"].bind(null,"img"));T.imgSrc.required=!1;var V=Object(b["d"])(Object(l["m"])(C(C(C(C(C(C({},f["b"]),p["b"]),m),T),d["a"]),{},{align:Object(b["c"])(o["t"]),noBody:Object(b["c"])(o["g"],!1)})),c["j"]),z=Object(r["c"])({name:c["j"],functional:!0,props:V,render:function(t,e){var n,r=e.props,c=e.data,o=e.slots,l=e.scopedSlots,d=r.imgSrc,h=r.imgLeft,O=r.imgRight,j=r.imgStart,v=r.imgEnd,w=r.imgBottom,y=r.header,P=r.headerHtml,x=r.footer,D=r.footerHtml,C=r.align,V=r.textVariant,z=r.bgVariant,R=r.borderVariant,$=l||{},_=o(),B={},I=t(),E=t();if(d){var F=t(k,{props:Object(b["e"])(T,r,b["h"].bind(null,"img"))});w?E=F:I=F}var M=t(),A=Object(u["a"])(i["p"],$,_);(A||y||P)&&(M=t(p["a"],{props:Object(b["e"])(p["b"],r),domProps:A?{}:Object(s["a"])(P,y)},Object(u["b"])(i["p"],B,$,_)));var N=Object(u["b"])(i["h"],B,$,_);r.noBody||(N=t(f["a"],{props:Object(b["e"])(f["b"],r)},N),r.overlay&&d&&(N=t("div",{staticClass:"position-relative"},[I,N,E]),I=t(),E=t()));var H=t(),L=Object(u["a"])(i["o"],$,_);return(L||x||D)&&(H=t(g,{props:Object(b["e"])(m,r),domProps:A?{}:Object(s["a"])(D,x)},Object(u["b"])(i["o"],B,$,_))),t(r.tag,Object(a["a"])(c,{staticClass:"card",class:(n={"flex-row":h||j,"flex-row-reverse":(O||v)&&!(h||j)},S(n,"text-".concat(C),C),S(n,"bg-".concat(z),z),S(n,"border-".concat(R),R),S(n,"text-".concat(V),V),n)}),[I,M,N,H,E])}})},3321:function(t,e,n){},"40fc":function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return P}));var r=n("2f79"),a=n("0056"),c=n("a723"),o=n("906c"),i=n("6b77"),s=n("a8c8"),u=n("58f2"),l=n("3a58"),b=n("d82f"),d=n("cf75"),f=n("fa73");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=Object(u["a"])("value",{type:c["o"],defaultValue:"",event:a["R"]}),m=j.mixin,g=j.props,v=j.prop,w=j.event,y=Object(d["d"])(Object(b["m"])(h(h({},g),{},{ariaInvalid:Object(d["c"])(c["j"],!1),autocomplete:Object(d["c"])(c["t"]),debounce:Object(d["c"])(c["o"],0),formatter:Object(d["c"])(c["k"]),lazy:Object(d["c"])(c["g"],!1),lazyFormatter:Object(d["c"])(c["g"],!1),number:Object(d["c"])(c["g"],!1),placeholder:Object(d["c"])(c["t"]),plaintext:Object(d["c"])(c["g"],!1),readonly:Object(d["c"])(c["g"],!1),trim:Object(d["c"])(c["g"],!1)})),"formTextControls"),P=Object(r["c"])({mixins:[m],props:y,data:function(){var t=this[v];return{localValue:Object(f["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,r="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!r,"form-control":r||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s["c"])(Object(l["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(d["b"])(this.formatter)}},watch:O({},v,(function(t){var e=Object(f["g"])(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(f["g"])(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(f["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["b"])(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.lazy;if(!r||n){this.clearDebounce();var a=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(w,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},c=this.computedDebounce;c>0&&!r&&!n?this.$_inputDebounceTimer=setTimeout(a,c):a()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(a["v"],n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(a["d"],n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(f["g"])(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(a["b"],t)},focus:function(){this.disabled||Object(o["d"])(this.$el)},blur:function(){this.disabled||Object(o["c"])(this.$el)}}})},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return j}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("2326"),s=n("6c06"),u=n("7b1e"),l=n("3a58"),b=n("cf75"),d=n("fa73");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=function(t,e,n){var r=encodeURIComponent(p.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},O=Object(b["d"])({alt:Object(b["c"])(o["t"]),blank:Object(b["c"])(o["g"],!1),blankColor:Object(b["c"])(o["t"],"transparent"),block:Object(b["c"])(o["g"],!1),center:Object(b["c"])(o["g"],!1),fluid:Object(b["c"])(o["g"],!1),fluidGrow:Object(b["c"])(o["g"],!1),height:Object(b["c"])(o["o"]),left:Object(b["c"])(o["g"],!1),right:Object(b["c"])(o["g"],!1),rounded:Object(b["c"])(o["j"],!1),sizes:Object(b["c"])(o["f"]),src:Object(b["c"])(o["t"]),srcset:Object(b["c"])(o["f"]),thumbnail:Object(b["c"])(o["g"],!1),width:Object(b["c"])(o["o"])},c["O"]),j=Object(r["c"])({name:c["O"],functional:!0,props:O,render:function(t,e){var n,r=e.props,c=e.data,o=r.alt,b=r.src,p=r.block,O=r.fluidGrow,j=r.rounded,m=Object(l["c"])(r.width)||null,g=Object(l["c"])(r.height)||null,v=null,w=Object(i["b"])(r.srcset).filter(s["a"]).join(","),y=Object(i["b"])(r.sizes).filter(s["a"]).join(",");return r.blank&&(!g&&m?g=m:!m&&g&&(m=g),m||g||(m=1,g=1),b=h(m,g,r.blankColor||"transparent"),w=null,y=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",p=!0),t("img",Object(a["a"])(c,{attrs:{src:b,alt:o,width:m?Object(d["g"])(m):null,height:g?Object(d["g"])(g):null,srcset:w||null,sizes:y||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||O,"w-100":O,rounded:""===j||!0===j},f(n,"rounded-".concat(j),Object(u["m"])(j)&&""!==j),f(n,v,v),f(n,"d-block",p),n)}))}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("cf75"),s=n("fa73"),u=Object(i["d"])({title:Object(i["c"])(o["t"]),titleTag:Object(i["c"])(o["t"],"h4")},c["q"]),l=Object(r["c"])({name:c["q"],functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.titleTag,Object(a["a"])(r,{staticClass:"card-title"}),c||Object(s["g"])(n.title))}})},6076:function(t,e,n){"use strict";n("99af");var r=n("b4c0");e["a"]={help:function(){return Object(r["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(r["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(r["a"])().get("/daemon/getinfo")},getFluxNodeStatus:function(){return Object(r["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(r["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listFluxNodes:function(){return Object(r["a"])().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList:function(){return Object(r["a"])().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount:function(){return Object(r["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(r["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(r["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(r["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(r["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(r["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(r["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(r["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(r["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(r["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(r["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(r["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(r["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf:function(t){return Object(r["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(r["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(r["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(r["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(r["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(r["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(r["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(r["a"])()},cancelToken:function(){return r["b"]}}},6197:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return O}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("d82f"),s=n("cf75"),u=n("d580"),l=n("4968"),b=n("ba06");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(s["d"])(Object(i["m"])(f(f(f(f({},l["b"]),b["b"]),Object(s["a"])(u["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(o["e"]),overlay:Object(s["c"])(o["g"],!1)})),c["k"]),O=Object(r["c"])({name:c["k"],functional:!0,props:h,render:function(t,e){var n,r=e.props,c=e.data,o=e.children,i=r.bodyBgVariant,u=r.bodyBorderVariant,d=r.bodyTextVariant,f=t();r.title&&(f=t(l["a"],{props:Object(s["e"])(l["b"],r)}));var h=t();return r.subTitle&&(h=t(b["a"],{props:Object(s["e"])(b["b"],r),class:["mb-2"]})),t(r.bodyTag,Object(a["a"])(c,{staticClass:"card-body",class:[(n={"card-img-overlay":r.overlay},p(n,"bg-".concat(i),i),p(n,"border-".concat(u),u),p(n,"text-".concat(d),d),n),r.bodyClass]}),[f,h,o])}})},"9c7d":function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n("2f79"),a=n("c637"),c=n("a723"),o=n("906c"),i=n("7b1e"),s=n("a8c8"),u=n("3a58"),l=n("d82f"),b=n("cf75"),d=n("dde7"),f=n("06d9"),p=n("ad47"),h=n("d520"),O=n("40fc"),j=n("1f1e"),m=n("90ef"),g=n("602d"),v=n("bc9a"),w=n("992e"),y=n("3c21");function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var D="__bv__visibility_observer",C=function(){function t(e,n){P(this,t),this.el=e,this.callback=n.callback,this.margin=n.margin||0,this.once=n.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver()}return k(t,[{key:"createObserver",value:function(){var t=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(i["e"])(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(e){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}Object(r["e"])((function(){Object(o["B"])((function(){t.observer&&t.observer.observe(t.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},n=Boolean(e.isIntersecting||e.intersectionRatio>0);n!==this.visible&&(this.visible=n,this.callback(n),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}]),t}(),S=function(t){var e=t[D];e&&e.stop&&e.stop(),delete t[D]},T=function(t,e){var n=e.value,r=e.modifiers,a={margin:"0px",once:!1,callback:n};Object(l["h"])(r).forEach((function(t){w["d"].test(t)?a.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(a.once=!0)})),S(t),t[D]=new C(t,a),t[D]._prevModifiers=Object(l["b"])(r)},V=function(t,e,n){var r=e.value,a=e.oldValue,c=e.modifiers;c=Object(l["b"])(c),!t||r===a&&t[D]&&Object(y["a"])(c,t[D]._prevModifiers)||T(t,{value:r,modifiers:c},n)},z=function(t){S(t)},R={bind:T,componentUpdated:V,unbind:z};function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=Object(b["d"])(Object(l["m"])(_(_(_(_(_(_({},m["b"]),d["b"]),p["b"]),h["b"]),O["b"]),{},{maxRows:Object(b["c"])(c["o"]),noAutoShrink:Object(b["c"])(c["g"],!1),noResize:Object(b["c"])(c["g"],!1),rows:Object(b["c"])(c["o"],2),wrap:Object(b["c"])(c["t"],"soft")})),a["K"]),E=Object(r["c"])({name:a["K"],directives:{"b-visible":R},mixins:[v["a"],m["a"],g["a"],d["a"],p["a"],h["a"],O["a"],f["a"],j["a"]],props:I,data:function(){return{heightInPx:null}},computed:{type:function(){return null},computedStyle:function(){var t={resize:!this.computedRows||this.noResize?"none":null};return this.computedRows||(t.height=this.heightInPx,t.overflowY="scroll"),t},computedMinRows:function(){return Object(s["c"])(Object(u["c"])(this.rows,2),2)},computedMaxRows:function(){return Object(s["c"])(this.computedMinRows,Object(u["c"])(this.maxRows,0))},computedRows:function(){return this.computedMinRows===this.computedMaxRows?this.computedMinRows:null},computedAttrs:function(){var t=this.disabled,e=this.required;return{id:this.safeId(),name:this.name||null,form:this.form||null,disabled:t,placeholder:this.placeholder||null,required:e,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.computedRows,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return _(_({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{localValue:function(){this.setHeight()}},mounted:function(){this.setHeight()},methods:{visibleCallback:function(t){t&&this.$nextTick(this.setHeight)},setHeight:function(){var t=this;this.$nextTick((function(){Object(o["B"])((function(){t.heightInPx=t.computeHeight()}))}))},computeHeight:function(){if(this.$isServer||!Object(i["f"])(this.computedRows))return null;var t=this.$el;if(!Object(o["u"])(t))return null;var e=Object(o["k"])(t),n=Object(u["b"])(e.lineHeight,1),r=Object(u["b"])(e.borderTopWidth,0)+Object(u["b"])(e.borderBottomWidth,0),a=Object(u["b"])(e.paddingTop,0)+Object(u["b"])(e.paddingBottom,0),c=r+a,l=n*this.computedMinRows+c,b=Object(o["m"])(t,"height")||e.height;Object(o["F"])(t,"height","auto");var d=t.scrollHeight;Object(o["F"])(t,"height",b);var f=Object(s["c"])((d-a)/n,2),p=Object(s["d"])(Object(s["c"])(f,this.computedMinRows),this.computedMaxRows),h=Object(s["c"])(Object(s["a"])(p*n+c),l);return this.noAutoShrink&&Object(u["b"])(b,0)>h?b:"".concat(h,"px")}},render:function(t){return t("textarea",{class:this.computedClass,style:this.computedStyle,directives:[{name:"b-visible",value:this.visibleCallback,modifiers:{640:!0}}],attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n("2f79"),a=n("a723"),c=n("cf75"),o=Object(c["d"])({size:Object(c["c"])(a["t"])},"formControls"),i=Object(r["c"])({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},b885:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("8690"),s=n("d82f"),u=n("cf75"),l=n("d580");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(u["d"])(Object(s["m"])(d(d({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(o["t"]),headerClass:Object(u["c"])(o["e"]),headerHtml:Object(u["c"])(o["t"])})),c["m"]),h=Object(r["c"])({name:c["m"],functional:!0,props:p,render:function(t,e){var n,r=e.props,c=e.data,o=e.children,s=r.headerBgVariant,u=r.headerBorderVariant,l=r.headerTextVariant;return t(r.headerTag,Object(a["a"])(c,{staticClass:"card-header",class:[r.headerClass,(n={},f(n,"bg-".concat(s),s),f(n,"border-".concat(u),u),f(n,"text-".concat(l),l),n)],domProps:o?{}:Object(i["a"])(r.headerHtml,r.header)}),o)}})},ba06:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("cf75"),s=n("fa73"),u=Object(i["d"])({subTitle:Object(i["c"])(o["t"]),subTitleTag:Object(i["c"])(o["t"],"h6"),subTitleTextVariant:Object(i["c"])(o["t"],"muted")},c["o"]),l=Object(r["c"])({name:c["o"],functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.subTitleTag,Object(a["a"])(r,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),c||Object(s["g"])(n.subTitle))}})},c26b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",[n("h6",{staticClass:"mb-1"},[t._v(" Click the 'Download Debug File' button to download the log. This may take a few minutes depending on file size. ")]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-download",variant:"outline-primary",size:"md"}},[t._v(" Download Debug File ")]),t.total&&t.downloaded?n("div",{staticClass:"d-flex",staticStyle:{width:"300px"}},[n("b-card-text",{staticClass:"mt-1 mb-0 mr-auto"},[t._v(" "+t._s((t.downloaded/1e6).toFixed(2)+" / "+(t.total/1e6).toFixed(2))+" MB - "+t._s((t.downloaded/t.total*100).toFixed(2)+"%")+" ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon cancel-button",attrs:{variant:"danger",size:"sm"},on:{click:t.cancelDownload}},[t._v(" x ")])],1):t._e(),n("b-popover",{ref:"popover",attrs:{target:"start-download",triggers:"click",show:t.downloadPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(e){t.downloadPopoverShow=e}},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Are You Sure?")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:t.onDownloadClose}},[n("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:t.onDownloadClose}},[t._v(" Cancel ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:t.onDownloadOk}},[t._v(" Download Debug ")])],1)])],1)]),n("b-card",[n("h6",{staticClass:"mb-1"},[t._v(" Click the 'Show Debug File' button to view the last 100 lines of the Daemon debug file. ")]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-tail",variant:"outline-primary",size:"md"}},[t._v(" Show Debug File ")]),t.callResponse.data.message?n("b-form-textarea",{staticClass:"mt-1",attrs:{plaintext:"","no-resize":"",rows:"30",value:t.callResponse.data.message}}):t._e(),n("b-popover",{ref:"popover",attrs:{target:"start-tail",triggers:"click",show:t.tailPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(e){t.tailPopoverShow=e}},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Are You Sure?")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:t.onTailClose}},[n("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:t.onTailClose}},[t._v(" Cancel ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:t.onTailOk}},[t._v(" Show Debug ")])],1)])],1)])],1)},a=[],c=n("c7eb"),o=n("1da1"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("5494"),n("205f")),s=n("1947"),u=n("3828"),l=n("9c7d"),b=n("d6e4"),d=n("b307"),f=n("e009"),p=n("6076"),h={components:{BCard:i["a"],BButton:s["a"],BPopover:u["a"],BFormTextarea:l["a"],BCardText:b["a"],ToastificationContent:d["a"]},directives:{Ripple:f["a"]},data:function(){return{downloadPopoverShow:!1,tailPopoverShow:!1,abortToken:{},downloaded:0,total:0,callResponse:{status:"",data:{}}}},methods:{cancelDownload:function(){this.abortToken.cancel("User download cancelled"),this.downloaded="",this.total=""},onDownloadClose:function(){this.downloadPopoverShow=!1},onDownloadOk:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function e(){var n,r,a,o,i,s;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,t.downloadPopoverShow=!1,t.abortToken=p["a"].cancelToken(),r=localStorage.getItem("zelidauth"),a={headers:{zelidauth:r},responseType:"blob",onDownloadProgress:function(t){n.downloaded=t.loaded,n.total=t.total},cancelToken:n.abortToken.token},e.next=7,p["a"].justAPI().get("/flux/daemondebug",a);case 7:o=e.sent,i=window.URL.createObjectURL(new Blob([o.data])),s=document.createElement("a"),s.href=i,s.setAttribute("download","debug.log"),document.body.appendChild(s),s.click();case 14:case"end":return e.stop()}}),e)})))()},onTailClose:function(){this.tailPopoverShow=!1},onTailOk:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function e(){var n;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tailPopoverShow=!1,n=localStorage.getItem("zelidauth"),p["a"].tailDaemonDebug(n).then((function(e){"error"===e.data.status?t.$toast({component:d["a"],props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=e.data.status,t.callResponse.data=e.data.data)})).catch((function(e){t.$toast({component:d["a"],props:{title:"Error while trying to get latest debug of Daemon",icon:"InfoIcon",variant:"danger"}}),console.log(e)}));case 3:case"end":return e.stop()}}),e)})))()}}},O=h,j=(n("c4c4"),n("2877")),m=Object(j["a"])(O,r,a,!1,null,null,null);e["default"]=m.exports},c4c4:function(t,e,n){"use strict";n("3321")},d520:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n("2f79"),a=n("a723"),c=n("7b1e"),o=n("cf75"),i=n("440b"),s=Object(o["d"])({state:Object(o["c"])(a["g"],null)},"formState"),u=Object(r["c"])({props:s,computed:{computedState:function(){return Object(c["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=Object(i["a"])(this).ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},d580:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("2f79"),a=n("c637"),c=n("a723"),o=n("cf75"),i=Object(o["d"])({bgVariant:Object(o["c"])(c["t"]),borderVariant:Object(o["c"])(c["t"]),tag:Object(o["c"])(c["t"],"div"),textVariant:Object(o["c"])(c["t"])},a["j"]);Object(r["c"])({props:i})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(o["t"],"p")},c["p"]),u=Object(r["c"])({name:c["p"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.textTag,Object(a["a"])(r,{staticClass:"card-text"}),c)}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n("2f79"),a=n("a723"),c=n("906c"),o=n("cf75"),i="input, textarea, select",s=Object(o["d"])({autofocus:Object(o["c"])(a["g"],!1),disabled:Object(o["c"])(a["g"],!1),form:Object(o["c"])(a["t"]),id:Object(o["c"])(a["t"]),name:Object(o["c"])(a["t"]),required:Object(o["c"])(a["g"],!1)},"formControls"),u=Object(r["c"])({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(c["B"])((function(){var e=t.$el;t.autofocus&&Object(c["u"])(e)&&(Object(c["v"])(e,i)||(e=Object(c["C"])(i,e)),Object(c["d"])(e))}))}))}}})}}]);