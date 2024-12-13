/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={839:t=>{function e(t,e,r,o,n,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(o,n)}t.exports=function(t){return function(){var r=this,o=arguments;return new Promise((function(n,a){var c=t.apply(r,o);function i(t){e(c,n,a,i,u,"next",t)}function u(t){e(c,n,a,i,u,"throw",t)}i(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},129:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},441:(t,e,r)=>{var o=r(942);function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},111:(t,e,r)=>{var o=r(280).default;function n(){"use strict";t.exports=n=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,c=a.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function p(t,e,r,o){var n=e&&e.prototype instanceof b?e:b,a=Object.create(n.prototype),c=new N(o||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var d="suspendedStart",g="suspendedYield",m="executing",v="completed",_={};function b(){}function k(){}function x(){}var w={};h(w,s,(function(){return this}));var A=Object.getPrototypeOf,E=A&&A(A(M([])));E&&E!==a&&c.call(E,s)&&(w=E);var L=x.prototype=b.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(n,a,i,u){var s=y(t[n],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&c.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}var n;i(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}})}function j(t,r,o){var n=d;return function(a,c){if(n===m)throw Error("Generator is already running");if(n===v){if("throw"===a)throw c;return{value:e,done:!0}}for(o.method=a,o.arg=c;;){var i=o.delegate;if(i){var u=O(i,o);if(u){if(u===_)continue;return u}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===d)throw n=v,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=m;var s=y(t,r,o);if("normal"===s.type){if(n=o.done?v:g,s.arg===_)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(n=v,o.method="throw",o.arg=s.arg)}}}function O(t,r){var o=r.method,n=t.iterator[o];if(n===e)return r.delegate=null,"throw"===o&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),_;var a=y(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,_;var c=a.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,_):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(c.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(o(t)+" is not iterable")}return k.prototype=x,i(L,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:k,configurable:!0}),k.displayName=h(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,f,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},S(T.prototype),h(T.prototype,l,(function(){return this})),r.AsyncIterator=T,r.async=function(t,e,o,n,a){void 0===a&&(a=Promise);var c=new T(p(t,e,o,n),a);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(L),h(L,f,"Generator"),h(L,s,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},r.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&c.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(o,n){return i.type="throw",i.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=c.call(a,"catchLoc"),s=c.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&c.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=t,a.arg=e,n?(this.method="next",this.next=n.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;C(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:M(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),_}},r}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},523:(t,e,r)=>{var o=r(280).default;t.exports=function(t,e){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},942:(t,e,r)=>{var o=r(280).default,n=r(523);t.exports=function(t){var e=n(t,"string");return"symbol"==o(e)?e:e+""},t.exports.__esModule=!0,t.exports.default=t.exports},280:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},666:(t,e,r)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var n=r(111)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}(()=>{"use strict";var t=r(839),e=r(129),o=r(441),n=r(666);const a=JSON.parse('{"id":"sebastianjnuwu.theme.tokyo"}');var c=acode.require("settings"),i=editorManager.editor,u="tokyo-night";ace.define("ace/theme/".concat(u,".css"),["require","exports","module"],(function(t,e,r){r.exports=".ace-tokyo-night{background-color:#1a1b26;color:#abb2bf}.ace-tokyo-night .ace_gutter{background:#1a1b26;color:#5c6370}.ace-tokyo-night .ace_print-margin{width:1px;background:#0a192f}.ace-tokyo-night .ace_cursor{color:#528bff}.ace-tokyo-night .ace_marker-layer .ace_selection{background:#3d4350}.ace-tokyo-night.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #0a192f;border-radius:2px}.ace-tokyo-night .ace_marker-layer .ace_step{background:#82aaff}.ace-tokyo-night .ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px;border:1px solid #5d5d5d}.ace-tokyo-night .ace_marker-layer .ace_active-line{background:rgba(98,114,164,.19)}.ace-tokyo-night .ace_gutter-active-line{color:#528bff;text-shadow:0 0 5px #528bff}.ace-tokyo-night .ace_marker-layer .ace_selected-word{border:1px solid #3d4350}.ace-tokyo-night .ace_fold{background-color:#82aaff;border-color:#abb2bf}.ace-tokyo-night .ace_keyword,.ace-tokyo-night .ace_operator{color:#c792ea}.ace-tokyo-night .ace_keyword.ace_other.ace_unit,.ace-tokyo-night .ace_constant.ace_language,.ace-tokyo-night .ace_constant.ace_numeric{color:#d19a66}.ace-tokyo-night .ace_constant.ace_character,.ace-tokyo-night .ace_constant.ace_other{color:#ff5874}.ace-tokyo-night .ace_function,.ace-tokyo-night .ace_support.ace_function{color:#82aaff}.ace-tokyo-night .ace_support.ace_constant,.ace-tokyo-night .ace_support.ace_class,.ace-tokyo-night .ace_support.ace_type{color:#ffcb8b}.ace-tokyo-night .ace_storage,.ace-tokyo-night .ace_storage.ace_type{color:#c792ea}.ace-tokyo-night .ace_invisible{color:#404f7d}.ace-tokyo-night .ace_invalid{color:#fff;background-color:#ff5370}.ace-tokyo-night .ace_invalid.ace_deprecated{color:#f07178;background-color:#5c6370}.ace-tokyo-night .ace_string,.ace-tokyo-night .ace_string.ace_regexp{color:#c3e88d}.ace-tokyo-night .ace_comment{font-style:italic;color:#637777}.ace-tokyo-night .ace_variable{color:#f78c6c}.ace-tokyo-night .ace_variable.ace_parameter{color:#ffcb8b}.ace-tokyo-night .ace_meta.ace_tag,.ace-tokyo-night .ace_entity.ace_other.ace_attribute-name,.ace-tokyo-night .ace_entity.ace_name.ace_function,.ace-tokyo-night .ace_entity.ace_name.ace_tag{color:#f07178}.ace-tokyo-night .ace_markup.ace_heading{color:#c3e88d}.ace-tokyo-night .ace_indent-guide{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y}.ace-tokyo-night .ace_indent-guide-active{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y}"})),ace.define("ace/theme/".concat(u),["require","exports","module","ace/theme/".concat(u,".css"),"ace/lib/dom"],(function(t,e,r){e.isDark=!0,e.cssClass="ace-".concat(u),e.cssText=t("./".concat(u,".css")),t("../lib/dom").importCssString(e.cssText,e.cssClass,!1)}));var s=function(){return o((function t(){e(this,t)}),[{key:"init",value:(a=t(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ace.require("ace/ext/themelist").themes.push({caption:u.split("-").map((function(t){return t[0].toUpperCase()+t.slice(1)})).join(" "),theme:"ace/theme/".concat(u),isDark:!0}),c.get("editorTheme")===u&&i.setTheme("ace/theme/".concat(u)),c.on("update",this.check);case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"destroy",value:(r=t(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.off("update",this.check),c.get("editorTheme")===u&&(i.setTheme("ace/theme/nord_dark"),c.update({editorTheme:"ace/theme/nord_dark"}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"check",value:function(t){t==="ace/theme/".concat(u)&&(i.setTheme("ace/theme/".concat(u)),c.update({editorTheme:u}))}}]);var r,a}();window.acode&&(acode.setPluginInit(a.id,(function(){return(new s).init()})),acode.setPluginUnmount(a.id,(function(){return(new s).destroy()})))})()})();