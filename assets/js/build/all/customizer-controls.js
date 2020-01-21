!function(){"use strict";var t;t=jQuery,wp.tiCustomizeButton={init:function(){t("#customize-theme-controls").on("click",".menu-shortcut",function(e){wp.customize.section("menu_locations").focus(),e.preventDefault()}),t("#customize-theme-controls").on("click",".neve-control-focus",function(e){wp.customize.control(t(this).data("control-to-focus")).focus(),e.preventDefault()})}},t(document).ready(function(){wp.tiCustomizeButton.init()});var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}function r(e){return e&&e.Math==Math&&e}function f(e){try{return!!e()}catch(e){return!0}}function o(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function s(e){return b.call(e).slice(8,-1)}function i(e){if(null==e)throw TypeError("Can't call method on "+e);return e}function l(e){return x(i(e))}function c(e){return"object"==typeof e?null!==e:"function"==typeof e}function a(e,t){if(!c(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!c(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!c(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!c(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}function u(e,t){return C.call(e,t)}function p(e){return Q?O.createElement(e):{}}function d(e){if(!c(e))throw TypeError(String(e)+" is not an object");return e}function v(t,n){try{_(h,t,n)}catch(e){h[t]=n}return n}var h=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")(),y=!f(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),g={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,w={f:m&&!g.call({1:2},1)?function(e){var t=m(this,e);return!!t&&t.enumerable}:g},b={}.toString,j="".split,x=f(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==s(e)?j.call(e,""):Object(e)}:Object,C={}.hasOwnProperty,O=h.document,Q=c(O)&&c(O.createElement),z=!y&&!f(function(){return 7!=Object.defineProperty(p("div"),"a",{get:function(){return 7}}).a}),S=Object.getOwnPropertyDescriptor,E={f:y?S:function(e,t){if(e=l(e),t=a(t,!0),z)try{return S(e,t)}catch(e){}if(u(e,t))return o(!w.f.call(e,t),e[t])}},k=Object.defineProperty,I={f:y?k:function(e,t,n){if(d(e),t=a(t,!0),d(n),z)try{return k(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},_=y?function(e,t,n){return I.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e},T="__core-js_shared__",P=h[T]||v(T,{}),A=Function.toString;"function"!=typeof P.inspectSource&&(P.inspectSource=function(e){return A.call(e)});function R(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++V+W).toString(36)}function M(e){return H[e]||(H[e]=R(e))}var D,N,L,q=P.inspectSource,F=h.WeakMap,B="function"==typeof F&&/native code/.test(q(F)),U=n(function(e){(e.exports=function(e,t){return P[e]||(P[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),V=0,W=Math.random(),H=U("keys"),$={},J=h.WeakMap;if(B){var K=new J,Y=K.get,G=K.has,X=K.set;D=function(e,t){return X.call(K,e,t),t},N=function(e){return Y.call(K,e)||{}},L=function(e){return G.call(K,e)}}else{var Z=M("state");$[Z]=!0,D=function(e,t){return _(e,Z,t),t},N=function(e){return u(e,Z)?e[Z]:{}},L=function(e){return u(e,Z)}}function ee(e){return"function"==typeof e?e:void 0}function te(e,t){return arguments.length<2?ee(ge[e])||ee(h[e]):ge[e]&&ge[e][t]||h[e]&&h[e][t]}function ne(e){return isNaN(e=+e)?0:(0<e?we:me)(e)}function re(e){return 0<e?be(ne(e),9007199254740991):0}function oe(u){return function(e,t,n){var r,o,i,c=l(e),a=re(c.length),s=(r=a,(o=ne(n))<0?je(o+r,0):xe(o,r));if(u&&t!=t){for(;s<a;)if((i=c[s++])!=i)return!0}else for(;s<a;s++)if((u||s in c)&&c[s]===t)return u||s||0;return!u&&-1}}function ie(e,t){var n,r=l(e),o=0,i=[];for(n in r)!u($,n)&&u(r,n)&&i.push(n);for(;t.length>o;)u(r,n=t[o++])&&(~Oe(i,n)||i.push(n));return i}function ce(e,t){for(var n=ke(t),r=I.f,o=E.f,i=0;i<n.length;i++){var c=n[i];u(e,c)||r(e,c,o(t,c))}}function ae(e,t){var n=Te[_e(e)];return n==Ae||n!=Pe&&("function"==typeof t?f(t):!!t)}function se(e,t){var n,r,o,i,c,a=e.target,s=e.global,u=e.stat;if(n=s?h:u?h[a]||v(a,{}):(h[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=Me(n,r))&&c.value:n[r],!Re(s?r:a+(u?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;ce(i,o)}(e.sham||o&&o.sham)&&_(i,"sham",!0),ye(n,r,i,e)}}function ue(e){return Object(i(e))}function le(e,t,n){var r=a(t);r in e?I.f(e,r,o(0,n)):e[r]=n}function fe(e){return u(qe,e)||(Ne&&u(Fe,e)?qe[e]=Fe[e]:qe[e]=Be("Symbol."+e)),qe[e]}function pe(e,t){var n;return De(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!De(n.prototype)?c(n)&&null===(n=n[Ue])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}var de,ve,he={set:D,get:N,has:L,enforce:function(e){return L(e)?N(e):D(e,{})},getterFor:function(n){return function(e){var t;if(!c(e)||(t=N(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},ye=n(function(e){var t=he.get,a=he.enforce,s=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||u(n,"name")||_(n,"name",t),a(n).source=s.join("string"==typeof t?t:"")),e!==h?(o?!c&&e[t]&&(i=!0):delete e[t],i?e[t]=n:_(e,t,n)):i?e[t]=n:v(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||q(this)})}),ge=h,me=Math.ceil,we=Math.floor,be=Math.min,je=Math.max,xe=Math.min,Ce={includes:oe(!0),indexOf:oe(!1)},Oe=Ce.indexOf,Qe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ze=Qe.concat("length","prototype"),Se={f:Object.getOwnPropertyNames||function(e){return ie(e,ze)}},Ee={f:Object.getOwnPropertySymbols},ke=te("Reflect","ownKeys")||function(e){var t=Se.f(d(e)),n=Ee.f;return n?t.concat(n(e)):t},Ie=/#|\.prototype\./,_e=ae.normalize=function(e){return String(e).replace(Ie,".").toLowerCase()},Te=ae.data={},Pe=ae.NATIVE="N",Ae=ae.POLYFILL="P",Re=ae,Me=E.f,De=Array.isArray||function(e){return"Array"==s(e)},Ne=!!Object.getOwnPropertySymbols&&!f(function(){return!String(Symbol())}),Le=Ne&&!Symbol.sham&&"symbol"==typeof Symbol(),qe=U("wks"),Fe=h.Symbol,Be=Le?Fe:R,Ue=fe("species"),Ve=te("navigator","userAgent")||"",We=h.process,He=We&&We.versions,$e=He&&He.v8;$e?ve=(de=$e.split("."))[0]+de[1]:Ve&&(!(de=Ve.match(/Edge\/(\d+)/))||74<=de[1])&&(de=Ve.match(/Chrome\/(\d+)/))&&(ve=de[1]);function Je(t){return 51<=Ye||!f(function(){var e=[];return(e.constructor={})[Ge]=function(){return{foo:1}},1!==e[t](Boolean).foo})}function Ke(e){if(!c(e))return!1;var t=e[Xe];return void 0!==t?!!t:De(e)}var Ye=ve&&+ve,Ge=fe("species"),Xe=fe("isConcatSpreadable"),Ze=9007199254740991,et="Maximum allowed index exceeded",tt=51<=Ye||!f(function(){var e=[];return e[Xe]=!1,e.concat()[0]!==e}),nt=Je("concat");se({target:"Array",proto:!0,forced:!tt||!nt},{concat:function(e){var t,n,r,o,i,c=ue(this),a=pe(c,0),s=0;for(t=-1,r=arguments.length;t<r;t++)if(Ke(i=-1===t?c:arguments[t])){if(o=re(i.length),Ze<s+o)throw TypeError(et);for(n=0;n<o;n++,s++)n in i&&le(a,s,i[n])}else{if(Ze<=s)throw TypeError(et);le(a,s++,i)}return a.length=s,a}});function rt(r,o,e){if(!function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(r),void 0===o)return r;switch(e){case 0:return function(){return r.call(o)};case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}function ot(d){var v=1==d,h=2==d,y=3==d,g=4==d,m=6==d,w=5==d||m;return function(e,t,n,r){for(var o,i,c=ue(e),a=x(c),s=rt(t,n,3),u=re(a.length),l=0,f=r||pe,p=v?f(e,u):h?f(e,0):void 0;l<u;l++)if((w||l in a)&&(i=s(o=a[l],l,c),d))if(v)p[l]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return l;case 2:it.call(p,o)}else if(g)return!1;return m?-1:y||g?g:p}}var it=[].push,ct={forEach:ot(0),map:ot(1),filter:ot(2),some:ot(3),every:ot(4),find:ot(5),findIndex:ot(6)},at=ct.filter,st=Je("filter"),ut=st&&!f(function(){[].filter.call({length:-1,0:1},function(e){throw e})});se({target:"Array",proto:!0,forced:!st||!ut},{filter:function(e,t){return at(this,e,1<arguments.length?t:void 0)}});function lt(e,t){return RegExp(e,t)}var ft,pt,dt={UNSUPPORTED_Y:f(function(){var e=lt("a","y");return e.lastIndex=2,null!=e.exec("abcd")}),BROKEN_CARET:f(function(){var e=lt("^r","gy");return e.lastIndex=2,null!=e.exec("str")})},vt=RegExp.prototype.exec,ht=String.prototype.replace,yt=vt,gt=(ft=/a/,pt=/b*/g,vt.call(ft,"a"),vt.call(pt,"a"),0!==ft.lastIndex||0!==pt.lastIndex),mt=dt.UNSUPPORTED_Y||dt.BROKEN_CARET,wt=void 0!==/()??/.exec("")[1];(gt||wt||mt)&&(yt=function(e){var t,n,r,o,i=this,c=mt&&i.sticky,a=function(){var e=d(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}.call(i),s=i.source,u=0,l=e;return c&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),l=String(e).slice(i.lastIndex),0<i.lastIndex&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(s="(?: "+s+")",l=" "+l,u++),n=new RegExp("^(?:"+s+")",a)),wt&&(n=new RegExp("^"+s+"$(?!\\s)",a)),gt&&(t=i.lastIndex),r=vt.call(c?n:i,l),c?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:gt&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),wt&&r&&1<r.length&&ht.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var bt=yt;se({target:"RegExp",proto:!0,forced:/./.exec!==bt},{exec:bt});var jt,xt,Ct,Ot,Qt=fe("species"),zt=!f(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),St="$0"==="a".replace(/./,"$0"),Et=!f(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),kt=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};!function(n,e,t,r){var o=fe(n),i=!f(function(){var e={};return e[o]=function(){return 7},7!=""[n](e)}),c=i&&!f(function(){var e=!1,t=/a/;return"split"===n&&((t={constructor:{}}).constructor[Qt]=function(){return t},t.flags="",t[o]=/./[o]),t.exec=function(){return e=!0,null},t[o](""),!e});if(!i||!c||"replace"===n&&(!zt||!St)||"split"===n&&!Et){var a=/./[o],s=t(o,""[n],function(e,t,n,r,o){return t.exec===bt?i&&!o?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}},{REPLACE_KEEPS_$0:St}),u=s[0],l=s[1];ye(String.prototype,n,u),ye(RegExp.prototype,o,2==e?function(e,t){return l.call(e,this,t)}:function(e){return l.call(e,this)})}r&&_(RegExp.prototype[o],"sham",!0)}("search",1,function(r,c,a){return[function(e){var t=i(this),n=null==e?void 0:e[r];return void 0!==n?n.call(e,t):new RegExp(e)[r](String(t))},function(e){var t=a(c,e,this);if(t.done)return t.value;var n=d(e),r=String(this),o=n.lastIndex;kt(o,0)||(n.lastIndex=0);var i=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(e))throw TypeError("RegExp#exec called on incompatible receiver");return bt.call(e,t)}(n,r);return kt(n.lastIndex,o)||(n.lastIndex=o),null===i?-1:i.index}]}),jt=jQuery,wp.neveSelect={init:function(){var e=this;jt(".neve-fs-main-input, .neve-fs-input-addon").on("click",function(e){return jt(this).parent().toggleClass("active"),jt(".neve-ss-wrap.active .neve-fs-search input").focus(),e.stopPropagation(),!1}),jt(".neve-fs-option").on("click",function(){var e=jt(this).data("option"),t=jt(this).data("source"),n=jt(this).data("control");wp.customize.previewer.send("font-selection",{value:e,source:t,controlId:n});var r=jt(".neve-ss-wrap.active input.neve-fs-main-input"),o=jt(".neve-ss-wrap.active .neve-ss-collector");return jt(".neve-ss-wrap.active").removeClass("active"),r.val(e),"Default"===e&&(e=""),o.val(e),o.trigger("change"),!1}),jt(".neve-fs-search input").on("keyup",function(){return e.search(jt(this)),!1}),jt(document).mouseup(function(e){var t=jt(".neve-ss-wrap.active .neve-fs-dropdown");t.is(e.target)||0!==t.has(e.target).length||jt(".neve-ss-wrap.active").removeClass("active")})},search:function(e){var t=jQuery(".neve-ss-wrap.active .neve-fs-options-wrapper"),n=e.val().toLowerCase();0<n.length?t.children().children(".neve-fs-option").each(function(){0<jt(this).filter("[data-filter*=".concat(n).concat("]")).length||n.length<1?jt(this).show():jt(this).hide()}):t.children().children().show()}},jt(document).ready(function(){wp.neveSelect.init()}),xt=jQuery,wp.neveHeadingAccordion={init:function(){this.handleToggle()},handleToggle:function(){xt(".customize-control-customizer-heading.accordion .neve-customizer-heading").on("click",function(){var e=xt(this).closest(".accordion");return xt(e).toggleClass("expanded"),!1})}},xt(document).ready(function(){wp.neveHeadingAccordion.init()}),Ct=jQuery,(Ot=wp.customize).controlConstructor["select-multiple"]=Ot.Control.extend({ready:function(){var t=this;Ct("select",t.container).change(function(){var e=Ct(this).val();null===e?t.setting.set(""):t.setting.set(e)})}});function It(){}function _t(e){return"<script>"+e+"</"+Dt+">"}var Tt,Pt=Object.keys||function(e){return ie(e,Qe)},At=y?Object.defineProperties:function(e,t){d(e);for(var n,r=Pt(t),o=r.length,i=0;i<o;)I.f(e,n=r[i++],t[n]);return e},Rt=te("document","documentElement"),Mt="prototype",Dt="script",Nt=M("IE_PROTO"),Lt=function(){try{Tt=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;Lt=Tt?function(e){e.write(_t("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Tt):((t=p("iframe")).style.display="none",Rt.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(_t("document.F=Object")),e.close(),e.F);for(var n=Qe.length;n--;)delete Lt[Mt][Qe[n]];return Lt()};$[Nt]=!0;var qt=Object.create||function(e,t){var n;return null!==e?(It[Mt]=d(e),n=new It,It[Mt]=null,n[Nt]=e):n=Lt(),void 0===t?n:At(n,t)},Ft=fe("unscopables"),Bt=Array.prototype;null==Bt[Ft]&&I.f(Bt,Ft,{configurable:!0,value:qt(null)});var Ut,Vt,Wt=ct.find,Ht="find",$t=!0;Ht in[]&&Array(1)[Ht](function(){$t=!1}),se({target:"Array",proto:!0,forced:$t},{find:function(e,t){return Wt(this,e,1<arguments.length?t:void 0)}}),Ut=Ht,Bt[Ft][Ut]=!0,Vt=jQuery,wp.neveOrderControl={init:function(){this.setupSorting(),this.handleHide()},setupSorting:function(){var e=this;Vt(".ti-order-sortable").each(function(){Vt(this).sortable({revert:!0,axis:"y",containment:"parent",update:function(){e.updateOrder(this)}})})},updateOrder:function(e){var t=[],n=Vt(e).find("li.enabled");Vt(n).each(function(){t.push(Vt(this).data("id"))}),Vt(e).next().val(JSON.stringify(t)),Vt(e).next().trigger("change")},handleHide:function(){var e=this;Vt(".toggle-display").on("click touchstart",function(){Vt(this).parent().toggleClass("enabled"),e.updateOrder(Vt(this).closest(".ti-order-sortable"))})}},Vt(document).ready(function(){wp.neveOrderControl.init()}),se({target:"Object",stat:!0,forced:f(function(){Pt(1)})},{keys:function(e){return Pt(ue(e))}}),wp.customize.controlConstructor["range-value"]=wp.customize.Control.extend({ready:function(){jQuery.fn.exists=function(){return 0<this.length};var e,t=this,n=jQuery("#customize-theme-controls");function r(e,t,n){switch(n){case"slider":var r=e.val();"text"===jQuery(t).attr("type")&&0<=r&&(r="+"+r),t.val(r);break;case"input":e.val(t.val())}}function i(e){var t=e.find(".range-collector"),n=function(e){var t,n,r,o={},i=e.find('.range-slider__range[data-query="desktop"]'),c=e.find('.range-slider__range[data-query="tablet"]'),a=e.find('.range-slider__range[data-query="mobile"]');a.exists()&&"undefined"!==(r=a.val())&&""!==r&&(o.mobile=r);c.exists()&&"undefined"!==(n=c.val())&&""!==n&&(o.tablet=n);i.exists()&&"undefined"!==(t=i.val())&&""!==t&&(o.desktop=t);return o}(e);1<Object.keys(n).length?t.val(JSON.stringify(n)):t.val(n.desktop),t.trigger("change")}n.on("input",".range-slider__range",function(){var e=jQuery(this),t=jQuery(this).next(),n=jQuery(this).parent().parent();r(e,t,"slider"),i(n)}),n.on("keyup change input",".range-slider-value",function(){var e=jQuery(this).parent().parent();r(jQuery(this).prev(),jQuery(this),"input"),i(e)}),n.on("blur",".range-slider-value",function(){var e=jQuery(this).prev(),t=parseInt(e.attr("min")),n=parseInt(e.attr("max")),r=jQuery(this),o=parseInt(jQuery(this).val());return o<t?(r.val(t),!1):n<o?(r.val(n),!1):void 0}),n.on("click",".range-reset-slider",function(e){e.preventDefault();var t=jQuery(this).prev(),n=t.prev(),r=jQuery(this).parent().parent(),o=n.data("default");"text"===jQuery(t).attr("type")&&(o="+0"),t.val(o),n.val(o),i(r)}),e="postMessage"===t.setting.transport?"mousemove change":"change",this.container.on(e,".range-collector",function(){t.setting.set(jQuery(this).val())})}}),wp.customize.controlConstructor["responsive-number"]=wp.customize.Control.extend({ready:function(){var e=this;this.container.on("change keyup paste input","input.responsive-number--input, select.responsive-number--select",function(){e.updateValue()}),this.container.on("click touchstart",".reset-number-input",function(){e.resetValues()})},resetValues:function(){this.container.find(".responsive-number--input").each(function(){jQuery(this).val(jQuery(this).data("default"))}),this.container.find(".responsive-number--select").each(function(){jQuery(this).find("option").removeAttr("selected"),jQuery(this).find("option[value="+jQuery(this).data("default")+"]").attr("selected","selected")}),this.updateValue()},updateValue:function(){var r={suffix:{}};this.container.find(".control-wrap").each(function(){var e=jQuery(this).find("input").val(),t=jQuery(this).find("select").val(),n=jQuery(this).find("input").data("query");r[n]=e,void 0!==t&&(r.suffix[n]=t)}),jQuery(this).find(".responsive-number-collector").val(JSON.stringify(r)),this.setting.set(JSON.stringify(r))}}),jQuery(document).ready(function(a){a.responsiveSwitchers={init:function(){this.manageSwitchers(),this.manageWPDevices()},manageSwitchers:function(){jQuery(".customize-control .responsive-switchers button").on("click",function(e){var t=a(this),n=a(".responsive-switchers"),r=a(e.currentTarget).data("device"),o=a(".customize-control .has-media-queries"),i=a(".wp-full-overlay"),c=a(".wp-full-overlay-footer .devices");n.find("button").removeClass("active"),n.find("button.preview-"+r).addClass("active"),o.find(".control-wrap").removeClass("active"),o.find(".control-wrap."+r).addClass("active"),i.removeClass("preview-desktop preview-tablet preview-mobile").addClass("preview-"+r),c.find("button").removeClass("active").attr("aria-pressed","false"),c.find("button.preview-"+r).addClass("active").attr("aria-pressed","true"),t.hasClass("preview-desktop")&&n.toggleClass("responsive-switchers-open")})},manageWPDevices:function(){jQuery("#customize-footer-actions .devices button").on("click",function(e){e.preventDefault();var t=jQuery(this).data("device"),n=jQuery(".responsive-switchers");"desktop"!==t?n.addClass("responsive-switchers-open"):n.removeClass("responsive-switchers-open"),n.find("button").removeClass("active"),n.find("button.preview-"+t).addClass("active");var r=jQuery(".range-slider.has-media-queries");r.find(".desktop-range").removeClass("active"),r.find(".tablet-range").removeClass("active"),r.find(".mobile-range").removeClass("active"),r.find("."+t+"-range").addClass("active"),r.find(".control-wrap").removeClass("active"),r.find(".control-wrap."+t).addClass("active")})}},a.responsiveSwitchers.init()});function Jt(a){return function(e){for(var t,n=l(e),r=Pt(n),o=r.length,i=0,c=[];i<o;)t=r[i++],y&&!Gt.call(n,t)||c.push(a?[t,n[t]]:n[t]);return c}}var Kt,Yt,Gt=w.f,Xt={entries:Jt(!0),values:Jt(!1)}.values;function Zt(e){return(Zt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}se({target:"Object",stat:!0},{values:function(e){return Xt(e)}}),jQuery,Kt=wp.customize,Yt=Kt.Control.extend({ready:function(){var j=this;j.container.find(".buttonset").buttonset(),Kt.bind("ready",function(){Kt(j.id,function(e){function t(e){var t,n,r,o,i,c,a,s,u,l,f=j.params.subcontrols,p=j.section(),d=wp.customize.section(p).container,v=e,h=f[v];if(void 0!==j.params.parent){var y=j.params.parent,g=wp.customize.control(y);if(void 0!==g){var m=g.setting._value,w=g.params.subcontrols[m];void 0!==w&&0===w.length&&(h=[])}}var b=Object.values(f);for(t in b=[].concat.apply([],b))if("widgets"===(o=b[t]))jQuery(d).children('li[class*="widget"]').css("display","none");else{if(void 0!==(c=wp.customize.control(o)).params.subcontrols)for(n in c.params.subcontrols)for(r in c.params.subcontrols[n])i=Kt.control(c.params.subcontrols[n][r]).selector,jQuery(i).hide();"object"===Zt(c)&&c.hasOwnProperty(i)&&(i=c.selector,jQuery(i).hide())}for(t in h)if("widgets"===(o=h[t]))jQuery(d).children('li[class*="widget"]').css("display","list-item");else if(void 0!==(c=wp.customize.control(o))&&(i=c.selector,jQuery(i).show(),v=c.setting._value,void 0!==wp.customize.control(o).params.subcontrols))for(n in u=wp.customize.control(o).params.subcontrols[v])l=u[n],void 0!==(a=wp.customize.control(l))&&(s=a.selector,jQuery(s).show())}t(e.get()),e.bind(t)})})}}),Kt.controlConstructor["radio-image"]=Yt,Kt.controlConstructor["select-hiding"]=Yt;var en,tn,nn=Ce.indexOf,rn=[].indexOf,on=!!rn&&1/[1].indexOf(1,-0)<0,cn=!(tn=[]["indexOf"])||!f(function(){tn.call(null,en||function(){throw 1},1)});se({target:"Array",proto:!0,forced:on||cn},{indexOf:function(e,t){return on?rn.apply(this,arguments)||0:nn(this,e,1<arguments.length?t:void 0)}}),wp.customize.controlConstructor["interface-tabs"]=wp.customize.Control.extend({ready:function(){wp.customize.previewer.bind("tab-previewer-edit",function(e){jQuery(e.selector).trigger("click")}),wp.customize.previewer.bind("focus-control",function(e){setTimeout(function(){void 0!==wp.customize.control(e)&&wp.customize.control(e).focus()},100)}),wp.customize.previewer.bind("focus-section",function(e){setTimeout(function(){wp.customize.section(e).focus()},100)}),wp.customize.previewer.bind("ready",function(){for(var e=window.location.search.substr(1).split("&"),t={},n=0;n<e.length;n++){var r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}void 0!==t["autofocus[control]"]&&""!==t["autofocus[control]"]&&jQuery('li[id^="customize-control-sidebars_widgets"]').on("DOMNodeInserted",function(){jQuery(".neve-customizer-tab > label."+t["autofocus[control]"]).trigger("click")})});var e=this;jQuery(window).on("load",function(){e.init(),e.handleClick()})},init:function(){var e=this,t=e.section();e.hideAllControls(t);var n=e.params.controls.general?"general":e.params.controls.layout?"layout":e.params.controls.style?"style":Object.keys(e.params.controls)[0],r=e.params.controls[n],o=[];for(var i in r)if(r.hasOwnProperty(i)){if(!1===jQuery.isEmptyObject(r[i])&&void 0!==wp.customize.control(i)){var c=wp.customize.control(i).setting._value;o=o.concat(r[i][c])}o.push(i)}e.showControls(o,t)},hideAllControls:function(e){var t=wp.customize.section(e).controls(),n=this.id;for(var r in t){var o=t[r].id;if("widgets"===o){var i=wp.customize.section(e).container;jQuery(i).children('li[class*="widget"]').css("display","none")}else if(o!==n){var c=wp.customize.control(o).selector;jQuery(c).hide()}}},handleClick:function(){var i=this,c=i.section(),e=i.container;jQuery(e).find(".neve-customizer-tab").on("click",function(){jQuery(this).parent().find(".neve-customizer-tab").removeClass("active"),jQuery(this).addClass("active"),i.hideAllControls(c);var e=jQuery(this).data("tab"),t=i.params.controls[e],n=[];for(var r in t){if(!1===jQuery.isEmptyObject(t[r])&&void 0!==wp.customize.control(r)){var o=wp.customize.control(r).setting._value;n=n.concat(t[r][o])}n.push(r)}i.showControls(n,c)})},showControls:function(e,t){for(var n in e){var r=e[n];if("widgets"===r||-1!==r.indexOf("sidebars_widgets")){var o=wp.customize.section(t).container;jQuery(o).children('li[class*="widget"]').css("display","list-item")}else if(void 0!==wp.customize.control(r)){var i=wp.customize.control(r).selector;jQuery(i).show()}if(void 0!==wp.customize.control(r))!0===wp.customize.control(r).active()?jQuery(wp.customize.control(r).selector).show():jQuery(wp.customize.control(r).selector).hide()}}}),document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof upsellConfig){var t='<div class="nv-upsell"><div class="nv-upsell-content">'+upsellConfig.text+'</div><a target="_blank" href="'+upsellConfig.button_url+'" class="button button-primary">'+upsellConfig.button_text+"</a></div>",n=document.createElement("li");n.innerHTML=t,document.getElementById("sub-accordion-panel-hfg_header").appendChild(n)}})}();
