(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-454fbe66"],{"01e3":function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("9b76"),i=r("365c"),u=r("cf75");function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=Object(u["d"])({label:Object(u["c"])(o["t"]),role:Object(u["c"])(o["t"],"status"),small:Object(u["c"])(o["g"],!1),tag:Object(u["c"])(o["t"],"span"),type:Object(u["c"])(o["t"],"border"),variant:Object(u["c"])(o["t"])},n["pb"]),p=Object(a["c"])({name:n["pb"],functional:!0,props:b,render:function(t,e){var r,a=e.props,n=e.data,o=e.slots,u=e.scopedSlots,b=o(),p=u||{},d=Object(i["b"])(s["s"],{},p,b)||a.label;return d&&(d=t("span",{staticClass:"sr-only"},d)),t(a.tag,Object(c["a"])(n,{attrs:{role:d?a.role||"status":null,"aria-hidden":d?null:"true"},class:(r={},l(r,"spinner-".concat(a.type),a.type),l(r,"spinner-".concat(a.type,"-sm"),a.small),l(r,"text-".concat(a.variant),a.variant),r)}),[d||t()])}})},"1d17":function(t,e,r){"use strict";var a=r("b4c0");e["a"]={listFluxNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},fluxnodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")},blockReward:function(){return Object(a["a"])().get("/daemon/getblocksubsidy")}}},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return B}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("9b76"),i=r("8690"),u=r("365c"),l=r("d82f"),b=r("cf75"),p=r("d580"),d=r("6197"),f=r("b885");function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=Object(b["d"])(Object(l["m"])(h(h({},Object(b["a"])(p["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(o["t"]),footerClass:Object(b["c"])(o["e"]),footerHtml:Object(b["c"])(o["t"])})),n["l"]),m=Object(a["c"])({name:n["l"],functional:!0,props:g,render:function(t,e){var r,a=e.props,n=e.data,o=e.children,s=a.footerBgVariant,u=a.footerBorderVariant,l=a.footerTextVariant;return t(a.footerTag,Object(c["a"])(n,{staticClass:"card-footer",class:[a.footerClass,(r={},j(r,"bg-".concat(s),s),j(r,"border-".concat(u),u),j(r,"text-".concat(l),l),r)],domProps:o?{}:Object(i["a"])(a.footerHtml,a.footer)}),o)}}),y=r("4918");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=Object(b["d"])(Object(l["m"])(w(w({},Object(l["k"])(y["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(o["g"],!1),end:Object(b["c"])(o["g"],!1),start:Object(b["c"])(o["g"],!1),top:Object(b["c"])(o["g"],!1)})),n["n"]),S=Object(a["c"])({name:n["n"],functional:!0,props:P,render:function(t,e){var r=e.props,a=e.data,n=r.src,o=r.alt,s=r.width,i=r.height,u="card-img";return r.top?u+="-top":r.right||r.end?u+="-right":r.bottom?u+="-bottom":(r.left||r.start)&&(u+="-left"),t("img",Object(c["a"])(a,{class:u,attrs:{src:n,alt:o,width:s,height:i}}))}});function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){V(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function V(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D=Object(b["a"])(P,b["f"].bind(null,"img"));D.imgSrc.required=!1;var T=Object(b["d"])(Object(l["m"])(k(k(k(k(k(k({},d["b"]),f["b"]),g),D),p["a"]),{},{align:Object(b["c"])(o["t"]),noBody:Object(b["c"])(o["g"],!1)})),n["j"]),B=Object(a["c"])({name:n["j"],functional:!0,props:T,render:function(t,e){var r,a=e.props,n=e.data,o=e.slots,l=e.scopedSlots,p=a.imgSrc,O=a.imgLeft,h=a.imgRight,j=a.imgStart,y=a.imgEnd,v=a.imgBottom,w=a.header,x=a.headerHtml,P=a.footer,C=a.footerHtml,k=a.align,T=a.textVariant,B=a.bgVariant,H=a.borderVariant,L=l||{},E=o(),F={},N=t(),z=t();if(p){var _=t(S,{props:Object(b["e"])(D,a,b["h"].bind(null,"img"))});v?z=_:N=_}var I=t(),$=Object(u["a"])(s["p"],L,E);($||w||x)&&(I=t(f["a"],{props:Object(b["e"])(f["b"],a),domProps:$?{}:Object(i["a"])(x,w)},Object(u["b"])(s["p"],F,L,E)));var R=Object(u["b"])(s["h"],F,L,E);a.noBody||(R=t(d["a"],{props:Object(b["e"])(d["b"],a)},R),a.overlay&&p&&(R=t("div",{staticClass:"position-relative"},[N,R,z]),N=t(),z=t()));var U=t(),X=Object(u["a"])(s["o"],L,E);return(X||P||C)&&(U=t(m,{props:Object(b["e"])(g,a),domProps:$?{}:Object(i["a"])(C,P)},Object(u["b"])(s["o"],F,L,E))),t(a.tag,Object(c["a"])(n,{staticClass:"card",class:(r={"flex-row":O||j,"flex-row-reverse":(h||y)&&!(O||j)},V(r,"text-".concat(k),k),V(r,"bg-".concat(B),B),V(r,"border-".concat(H),H),V(r,"text-".concat(T),T),r)}),[N,I,R,U,z])}})},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return j}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("2326"),i=r("6c06"),u=r("7b1e"),l=r("3a58"),b=r("cf75"),p=r("fa73");function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',O=function(t,e,r){var a=encodeURIComponent(f.replace("%{w}",Object(p["g"])(t)).replace("%{h}",Object(p["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(a)},h=Object(b["d"])({alt:Object(b["c"])(o["t"]),blank:Object(b["c"])(o["g"],!1),blankColor:Object(b["c"])(o["t"],"transparent"),block:Object(b["c"])(o["g"],!1),center:Object(b["c"])(o["g"],!1),fluid:Object(b["c"])(o["g"],!1),fluidGrow:Object(b["c"])(o["g"],!1),height:Object(b["c"])(o["o"]),left:Object(b["c"])(o["g"],!1),right:Object(b["c"])(o["g"],!1),rounded:Object(b["c"])(o["j"],!1),sizes:Object(b["c"])(o["f"]),src:Object(b["c"])(o["t"]),srcset:Object(b["c"])(o["f"]),thumbnail:Object(b["c"])(o["g"],!1),width:Object(b["c"])(o["o"])},n["O"]),j=Object(a["c"])({name:n["O"],functional:!0,props:h,render:function(t,e){var r,a=e.props,n=e.data,o=a.alt,b=a.src,f=a.block,h=a.fluidGrow,j=a.rounded,g=Object(l["c"])(a.width)||null,m=Object(l["c"])(a.height)||null,y=null,v=Object(s["b"])(a.srcset).filter(i["a"]).join(","),w=Object(s["b"])(a.sizes).filter(i["a"]).join(",");return a.blank&&(!m&&g?m=g:!g&&m&&(g=m),g||m||(g=1,m=1),b=O(g,m,a.blankColor||"transparent"),v=null,w=null),a.left?y="float-left":a.right?y="float-right":a.center&&(y="mx-auto",f=!0),t("img",Object(c["a"])(n,{attrs:{src:b,alt:o,width:g?Object(p["g"])(g):null,height:m?Object(p["g"])(m):null,srcset:v||null,sizes:w||null},class:(r={"img-thumbnail":a.thumbnail,"img-fluid":a.fluid||h,"w-100":h,rounded:""===j||!0===j},d(r,"rounded-".concat(j),Object(u["m"])(j)&&""!==j),d(r,y,y),d(r,"d-block",f),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("cf75"),i=r("fa73"),u=Object(s["d"])({title:Object(s["c"])(o["t"]),titleTag:Object(s["c"])(o["t"],"h4")},n["q"]),l=Object(a["c"])({name:n["q"],functional:!0,props:u,render:function(t,e){var r=e.props,a=e.data,n=e.children;return t(r.titleTag,Object(c["a"])(a,{staticClass:"card-title"}),n||Object(i["g"])(r.title))}})},"49f5":function(t,e,r){"use strict";r.d(e,"a",(function(){return O}));var a=r("2f79"),c=r("c637"),n=r("a723"),o=r("d82f"),s=r("cf75"),i=r("8c18"),u=r("cf07");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(o["j"])(u["b"],["label","labelHtml"]),f=Object(s["d"])(Object(o["m"])(b(b({},d),{},{animated:Object(s["c"])(n["g"],!1),height:Object(s["c"])(n["t"]),max:Object(s["c"])(n["o"],100),precision:Object(s["c"])(n["o"],0),showProgress:Object(s["c"])(n["g"],!1),showValue:Object(s["c"])(n["g"],!1),striped:Object(s["c"])(n["g"],!1)})),c["mb"]),O=Object(a["c"])({name:c["mb"],mixins:[i["a"]],provide:function(){var t=this;return{getBvProgress:function(){return t}}},props:f,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.normalizeSlot();return e||(e=t(u["a"],{props:Object(s["e"])(d,this.$props)})),t("div",{staticClass:"progress",style:this.progressHeight},[e])}})},5312:function(t,e,r){"use strict";var a={cumulus:"#36c9a5",nimbus:"#ff9f43",stratus:"#ea5455"};e["a"]=a},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return h}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("d82f"),i=r("cf75"),u=r("d580"),l=r("4968"),b=r("ba06");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(i["d"])(Object(s["m"])(d(d(d(d({},l["b"]),b["b"]),Object(i["a"])(u["a"],i["f"].bind(null,"body"))),{},{bodyClass:Object(i["c"])(o["e"]),overlay:Object(i["c"])(o["g"],!1)})),n["k"]),h=Object(a["c"])({name:n["k"],functional:!0,props:O,render:function(t,e){var r,a=e.props,n=e.data,o=e.children,s=a.bodyBgVariant,u=a.bodyBorderVariant,p=a.bodyTextVariant,d=t();a.title&&(d=t(l["a"],{props:Object(i["e"])(l["b"],a)}));var O=t();return a.subTitle&&(O=t(b["a"],{props:Object(i["e"])(b["b"],a),class:["mb-2"]})),t(a.bodyTag,Object(c["a"])(n,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},f(r,"bg-".concat(s),s),f(r,"border-".concat(u),u),f(r,"text-".concat(p),p),r),a.bodyClass]}),[d,O,o])}})},"9b03":function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var a=r("2f79"),c=r("c637"),n=r("0056"),o=r("a723"),s=r("9b76"),i=r("3a58"),u=r("8c18"),l=r("cf75"),b=r("01e3"),p=r("ce2a");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={top:0,left:0,bottom:0,right:0},j=Object(l["d"])({bgColor:Object(l["c"])(o["t"]),blur:Object(l["c"])(o["t"],"2px"),fixed:Object(l["c"])(o["g"],!1),noCenter:Object(l["c"])(o["g"],!1),noFade:Object(l["c"])(o["g"],!1),noWrap:Object(l["c"])(o["g"],!1),opacity:Object(l["c"])(o["o"],.85,(function(t){var e=Object(i["b"])(t,0);return e>=0&&e<=1})),overlayTag:Object(l["c"])(o["t"],"div"),rounded:Object(l["c"])(o["j"],!1),show:Object(l["c"])(o["g"],!1),spinnerSmall:Object(l["c"])(o["g"],!1),spinnerType:Object(l["c"])(o["t"],"border"),spinnerVariant:Object(l["c"])(o["t"]),variant:Object(l["c"])(o["t"],"light"),wrapTag:Object(l["c"])(o["t"],"div"),zIndex:Object(l["c"])(o["o"],10)},c["gb"]),g=Object(a["c"])({name:c["gb"],mixins:[u["a"]],props:j,computed:{computedRounded:function(){var t=this.rounded;return!0===t||""===t?"rounded":t?"rounded-".concat(t):""},computedVariant:function(){var t=this.variant;return t&&!this.bgColor?"bg-".concat(t):""},slotScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(t){var e=t.spinnerType,r=t.spinnerVariant,a=t.spinnerSmall;return this.$createElement(b["a"],{props:{type:e,variant:r,small:a}})}},render:function(t){var e=this,r=this.show,a=this.fixed,c=this.noFade,o=this.noWrap,i=this.slotScope,u=t();if(r){var l=t("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:f(f({},h),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),b=t("div",{staticClass:"position-absolute",style:this.noCenter?f({},h):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot(s["C"],i)||this.defaultOverlayFn(i)]);u=t(this.overlayTag,{staticClass:"b-overlay",class:{"position-absolute":!o||o&&!a,"position-fixed":o&&a},style:f(f({},h),{},{zIndex:this.zIndex||10}),on:{click:function(t){return e.$emit(n["f"],t)}},key:"overlay"},[l,b])}return u=t(p["a"],{props:{noFade:c,appear:!0},on:{"after-enter":function(){return e.$emit(n["O"])},"after-leave":function(){return e.$emit(n["s"])}}},[u]),o?u:t(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":r?"true":null}},o?[u]:[this.normalizeSlot(),u])}})},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return O}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("8690"),i=r("d82f"),u=r("cf75"),l=r("d580");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=Object(u["d"])(Object(i["m"])(p(p({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(o["t"]),headerClass:Object(u["c"])(o["e"]),headerHtml:Object(u["c"])(o["t"])})),n["m"]),O=Object(a["c"])({name:n["m"],functional:!0,props:f,render:function(t,e){var r,a=e.props,n=e.data,o=e.children,i=a.headerBgVariant,u=a.headerBorderVariant,l=a.headerTextVariant;return t(a.headerTag,Object(c["a"])(n,{staticClass:"card-header",class:[a.headerClass,(r={},d(r,"bg-".concat(i),i),d(r,"border-".concat(u),u),d(r,"text-".concat(l),l),r)],domProps:o?{}:Object(s["a"])(a.headerHtml,a.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("cf75"),i=r("fa73"),u=Object(s["d"])({subTitle:Object(s["c"])(o["t"]),subTitleTag:Object(s["c"])(o["t"],"h6"),subTitleTextVariant:Object(s["c"])(o["t"],"muted")},n["o"]),l=Object(a["c"])({name:n["o"],functional:!0,props:u,render:function(t,e){var r=e.props,a=e.data,n=e.children;return t(r.subTitleTag,Object(c["a"])(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),n||Object(i["g"])(r.subTitle))}})},cf07:function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return f}));var a=r("2f79"),c=r("c637"),n=r("a723"),o=r("8690"),s=r("7b1e"),i=r("a8c8"),u=r("3a58"),l=r("cf75"),b=r("fa73"),p=r("8c18"),d=Object(l["d"])({animated:Object(l["c"])(n["g"],null),label:Object(l["c"])(n["t"]),labelHtml:Object(l["c"])(n["t"]),max:Object(l["c"])(n["o"],null),precision:Object(l["c"])(n["o"],null),showProgress:Object(l["c"])(n["g"],null),showValue:Object(l["c"])(n["g"],null),striped:Object(l["c"])(n["g"],null),value:Object(l["c"])(n["o"],0),variant:Object(l["c"])(n["t"])},c["nb"]),f=Object(a["c"])({name:c["nb"],mixins:[p["a"]],inject:{getBvProgress:{default:function(){return function(){return{}}}}},props:d,computed:{bvProgress:function(){return this.getBvProgress()},progressBarClasses:function(){var t=this.computedAnimated,e=this.computedVariant;return[e?"bg-".concat(e):"",this.computedStriped||t?"progress-bar-striped":"",t?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(u["b"])(this.value,0)},computedMax:function(){var t=Object(u["b"])(this.max)||Object(u["b"])(this.bvProgress.max,0);return t>0?t:100},computedPrecision:function(){return Object(i["c"])(Object(u["c"])(this.precision,Object(u["c"])(this.bvProgress.precision,0)),0)},computedProgress:function(){var t=this.computedPrecision,e=Object(i["e"])(10,t);return Object(u["a"])(100*e*this.computedValue/this.computedMax/e,t)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(s["b"])(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(s["b"])(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(s["b"])(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(s["b"])(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(t){var e,r=this.label,a=this.labelHtml,c=this.computedValue,n=this.computedPrecision,s={};return this.hasNormalizedSlot()?e=this.normalizeSlot():r||a?s=Object(o["a"])(a,r):this.computedShowProgress?e=this.computedProgress:this.computedShowValue&&(e=Object(u["a"])(c,n)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(b["g"])(this.computedMax),"aria-valuenow":Object(u["a"])(c,n)},domProps:s},e)}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("2f79"),c=r("c637"),n=r("a723"),o=r("cf75"),s=Object(o["d"])({bgVariant:Object(o["c"])(n["t"]),borderVariant:Object(o["c"])(n["t"]),tag:Object(o["c"])(n["t"],"div"),textVariant:Object(o["c"])(n["t"])},c["j"]);Object(a["c"])({props:s})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var a=r("2f79"),c=r("b42e"),n=r("c637"),o=r("a723"),s=r("cf75"),i=Object(s["d"])({textTag:Object(s["c"])(o["t"],"p")},n["p"]),u=Object(a["c"])({name:n["p"],functional:!0,props:i,render:function(t,e){var r=e.props,a=e.data,n=e.children;return t(r.textTag,Object(c["a"])(a,{staticClass:"card-text"}),n)}})},e2b7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-overlay",{attrs:{show:t.historyStatsLoading,variant:"transparent",blur:"5px"}},[r("b-row",{staticClass:"match-height"},[r("b-col",{attrs:{md:"12",lg:"6",xxl:"4"}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[r("div",[r("h2",{staticClass:"mt-0 truncate"},[t._v(" Total Nodes: "+t._s(t.totalNodes)+" ")])]),r("b-avatar",{attrs:{size:"48",variant:"light-success"}},[r("feather-icon",{attrs:{size:"24",icon:"ServerIcon"}})],1)],1),r("vue-apex-charts",{attrs:{type:"donut",height:"400",width:"100%",options:t.nodeData.chartOptions,series:t.nodeData.series}})],1)],1),r("b-col",{attrs:{md:"12",lg:"6",xxl:"8"}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[r("div",[r("h2",{staticClass:"mt-0 truncate"},[t._v(" Node History ")])])]),r("div",{staticClass:"mt-auto"},[r("vue-apex-charts",{attrs:{type:"area",height:"400",width:"100%",options:t.nodeHistoryData.chartOptions,series:t.nodeHistoryData.series}})],1)],1)],1)],1)],1),r("b-overlay",{attrs:{show:t.supplyLoading,variant:"transparent",blur:"5px"}},[r("b-row",{staticClass:"match-height"},[r("b-col",{attrs:{md:"12",lg:"6",xxl:"4"}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[r("div",[r("h2",{staticClass:"mt-0 truncate"},[t._v(" Locked Supply: "+t._s(t.beautifyValue(t.lockedSupply,0))+" ")])]),r("b-avatar",{attrs:{size:"48",variant:"light-success"}},[r("feather-icon",{attrs:{size:"24",icon:"LockIcon"}})],1)],1),r("vue-apex-charts",{attrs:{type:"donut",height:"300",options:t.lockedSupplyData.chartOptions,series:t.lockedSupplyData.series}})],1)],1),r("b-col",{attrs:{md:"12",lg:"6",xxl:"8"}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-body",[r("div",[r("h2",{staticClass:"mt-0 truncate"},[t._v(" FLUX Supply ")])]),r("div",[r("b-card-text",{staticClass:"mt-2"},[t._v(" Max Supply ")]),r("h3",[t._v(" "+t._s(t.beautifyValue(t.maxSupply,0))+" FLUX ")])],1),r("hr"),r("div",[r("b-card-text",[t._v("Circulating Supply")]),r("b-row",[r("b-col",{attrs:{xl:"4",md:"6",sm:"12"}},[r("h3",[t._v(" "+t._s(t.beautifyValue(t.circulatingSupply,0))+" FLUX ")])]),r("b-col",{attrs:{xl:"8",md:"6",sm:"12"}},[r("b-progress",{staticClass:"mt-25",attrs:{value:t.circulatingSupply,max:t.maxSupply,variant:"success",height:"10px"}})],1)],1)],1),r("hr"),r("div",[r("b-card-text",[t._v("Locked Supply")]),r("b-row",[r("b-col",{attrs:{xl:"4",md:"6",sm:"12"}},[r("h3",[t._v(" "+t._s(t.beautifyValue(t.lockedSupply,0))+" FLUX ")])]),r("b-col",{attrs:{xl:"8",md:"6",sm:"12"}},[r("b-progress",{staticClass:"mt-25",attrs:{value:t.lockedSupply,max:t.circulatingSupply,variant:"success",height:"10px"}})],1)],1)],1)])],1)],1)],1)],1)],1)},c=[],n=r("c7eb"),o=r("1da1"),s=(r("a9e3"),r("b680"),r("b64b"),r("d3b7"),r("159b"),r("14d9"),r("ac1f"),r("5319"),r("9b03")),i=r("205f"),u=r("6197"),l=r("d6e4"),b=r("a15b"),p=r("b28b"),d=r("e8a3"),f=r("49f5"),O=r("1321"),h=r.n(O),j=r("b307"),g=r("5312"),m=r("1d17"),y=r("bc3a"),v={components:{BOverlay:s["a"],BCard:i["a"],BCardBody:u["a"],BCardText:l["a"],BRow:b["a"],BCol:p["a"],BAvatar:d["a"],BProgress:f["a"],VueApexCharts:h.a,ToastificationContent:j["a"]},data:function(){var t=this;return{historyStatsLoading:!0,supplyLoading:!0,totalNodes:0,nodeData:{chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!0},labels:["Cumulus","Nimbus","Stratus"],legend:{show:!1},stroke:{width:0},colors:[g["a"].cumulus,g["a"].nimbus,g["a"].stratus],tooltip:{y:{formatter:function(e){return t.beautifyValue(e,0)}}}},series:[]},nodeHistoryData:{chartOptions:{colors:[g["a"].cumulus,g["a"].nimbus,g["a"].stratus],labels:["Cumulus","Nimbus","Stratus"],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0},stacked:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(e){return new Date(e).toLocaleString("en-GB",t.timeoptions)}}}},series:[]},lockedSupplyData:{chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!0},labels:["Cumulus","Nimbus","Stratus"],legend:{show:!1},stroke:{width:0},colors:[g["a"].cumulus,g["a"].nimbus,g["a"].stratus],tooltip:{y:{formatter:function(e){return t.beautifyValue(e,0)}}}},series:[]},maxSupply:44e7,lockedSupply:0,lockedSupplyPerc:0,circulatingSupply:0,circulatingSupplyPerc:0}},mounted:function(){this.getHistoryStats(),this.getCircSupply()},methods:{getCircSupply:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.supplyLoading=!0,e.next=3,y.get("https://explorer.runonflux.io/api/statistics/circulating-supply");case 3:return r=e.sent,t.circulatingSupply=r.data,t.circulatingSupplyPerc=Number((t.circulatingSupply/44e7*100).toFixed(2)),e.next=8,t.getFluxNodeCount();case 8:t.supplyLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},getHistoryStats:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var r,a,c,o,s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.historyStatsLoading=!0,e.next=4,y.get("https://stats.runonflux.io/fluxhistorystats");case 4:r=e.sent,t.fluxHistoryStats=r.data.data,t.historyStatsLoading=!1,a=Object.keys(t.fluxHistoryStats),c=[],o=[],s=[],a.forEach((function(e){c.push([Number(e),t.fluxHistoryStats[e].cumulus]),o.push([Number(e),t.fluxHistoryStats[e].nimbus]),s.push([Number(e),t.fluxHistoryStats[e].stratus])})),t.nodeHistoryData.series=[{name:"Cumulus",data:c},{name:"Nimbus",data:o},{name:"Stratus",data:s}],e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](0),console.log(e.t0),t.$toast({component:j["a"],props:{title:"Unable to fetch history stats",icon:"InfoIcon",variant:"danger"}});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()},getFluxNodeCount:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var r,a,c,o,s,i;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m["a"].fluxnodeCount();case 3:r=e.sent,a=r.data.data,c=a["stratus-enabled"],o=a["nimbus-enabled"],s=a["cumulus-enabled"],a["cumulus-enabled"]<a["nimbus-enabled"]&&(o=a["cumulus-enabled"],s=a["nimbus-enabled"]),i=4e4*c+12500*o+1e3*s,t.lockedSupplyData.series=[1e3*s,12500*o,4e4*c],t.lockedSupply=i,t.lockedSupplyPerc=Number((i/t.circulatingSupply*100).toFixed(2)),t.totalNodes=s+o+c,t.nodeData.series=[s,o,c],e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))()},beautifyValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=t.toFixed(e);return r.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},w=v,x=r("2877"),P=Object(x["a"])(w,a,c,!1,null,null,null);e["default"]=P.exports}}]);