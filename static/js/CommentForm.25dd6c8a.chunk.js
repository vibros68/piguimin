/*! For license information please see CommentForm.25dd6c8a.chunk.js.LICENSE.txt */
(this.webpackJsonppoliteiagui=this.webpackJsonppoliteiagui||[]).push([[2],{1261:function(t,e,r){t.exports={updateTitleTooltip:"CommentForm_updateTitleTooltip__3mJM3",titleTooltipWrapper:"CommentForm_titleTooltipWrapper__2xI64"}},1265:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(4),a=r(0),i=r.n(a),c=r(32),u=r(686),l=r.n(u)()((function(t,e){window.sessionStorage.setItem(t,JSON.stringify(e))}),300),s=function(t){var e=t.name,r=t.values,n=t.setValues;return Object(a.useEffect)((function(){var t=function(t){var e=window.sessionStorage.getItem(t);return e&&JSON.parse(e)}(e);t&&n(t)}),[e,n]),Object(a.useEffect)((function(){l(e,r)})),null},h=function(t){var e=t.name;return i.a.createElement(c.d,null,(function(t){return i.a.createElement(s,Object.assign({name:e},t))}))},p=r(1),m=r(55),f=r(1237),d=r(11),v=r(15),g=r(39),y=function(t){var e,r=t.namesupportedchars,n=t.namelengthmax,o=t.namelengthmin,a=t.isAuthorUpdate;return v.f().shape({comment:v.h().trim().required("required"),title:a?(e=v.h().nullable().required("required").min(o).max(n)).matches.apply(e,Object(d.a)(Object(g.l)("Title",r))):void 0})},b=r(25),w=r(205),x=r(23),E=r(57),L=r(1261),O=r.n(L);function j(){j=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var h={};function p(){}function m(){}function f(){}var d={};u(d,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==e&&r.call(g,a)&&(d=g);var y=f.prototype=p.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=f,n(y,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:m,configurable:!0}),m.displayName=u(f,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),u(y,c,"Generator"),u(y,a,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var S=["h1","h2","h3","h4","h5","h6"];e.default=i.a.memo((function(t){var e=t.onSubmit,r=t.onCancel,u=t.onCommentSubmitted,l=t.disableSubmit,s=t.persistKey,d=t.className,v=t.isAuthorUpdate,g=t.hasAuthorUpdates,L=t.values,T=!!L,k=Object(b.a)(),_=Object(o.a)(k,2),N=_[0],C=_[1],F=Object(a.useCallback)((function(){N(w.a,{onLoggedIn:C,onClose:C,title:"Your session has expired. Please log in again"})}),[N,C]),I=Object(x.j)().policyPi,P=I.namesupportedchars,A=I.namelengthmax,G=I.namelengthmin,U=Object(p.useMediaQuery)("(max-width: 685px)");function M(){return(M=Object(n.a)(j().mark((function t(r,o){var a,c,l,s,h;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.comment,c=r.title,l=o.resetForm,s=o.setSubmitting,h=o.setFieldError,t.prev=2,!c||!g){t.next=7;break}N(E.a,{title:"New author update",message:"Submitting a new update will lock the previous update thread. Are you sure you want to continue?",successTitle:"Author Update posted",successMessage:i.a.createElement(p.Text,null,"The update has been successfully posted!"),onClose:function(){s(!1),C()},onSubmit:function(){var t=Object(n.a)(j().mark((function t(){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({comment:a.trim(),title:c});case 2:s(!1),l(),u&&u();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}),t.next=12;break;case 7:return t.next=9,e({comment:a.trim(),title:c});case 9:s(!1),l(),u&&u();case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),s(!1),403===t.t0.statusCode?F():h("global",t.t0);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})))).apply(this,arguments)}var B={title:""!==(null===L||void 0===L?void 0:L.title)?null===L||void 0===L?void 0:L.title:v?"":null,comment:(null===L||void 0===L?void 0:L.comment)||""};return i.a.createElement(c.c,{initialValues:B,loading:!y,validationSchema:y({namesupportedchars:P,namelengthmax:A,namelengthmin:G,isAuthorUpdate:v}),onSubmit:function(t,e){return M.apply(this,arguments)}},(function(t){var e=t.values,n=t.handleBlur,o=t.handleSubmit,a=t.handleChange,c=t.isSubmitting,u=t.setFieldTouched,g=t.setFieldValue,y=t.errors,b=t.isValid,w=t.touched;return i.a.createElement("form",{onSubmit:o,className:d},y&&y.global&&i.a.createElement(p.Message,{className:"margin-bottom-m",kind:"error"},y.global.toString()),v&&i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{noMargin:!0,align:"center",wrap:U},i.a.createElement(p.H4,{className:"margin-bottom-s"},"Proposal Update"),i.a.createElement(p.Tooltip,{contentClassName:O.a.updateTitleTooltip,className:O.a.titleTooltipWrapper,placement:"right",content:"The proposal author is allowed to give periodic updates on the status of their proposal.  You can start an update thread by submitting a new comment.  Users\nwill only be able to reply to your most recent update thread."},i.a.createElement("div",null,i.a.createElement(p.Icon,{type:"info",size:U?"md":"lg"})))),i.a.createElement(p.BoxTextInput,{placeholder:"Update title",name:"title","data-testid":"update-title",tabIndex:1,value:e.title,onChange:function(t){u("title",!0),a(t)},error:w.title&&y.title})),i.a.createElement(f.a,{allowImgs:!1,allowHeaders:!1,name:"comment",className:"margin-top-s",value:e.comment,onChange:function(t){return g("comment",t)},onBlur:n,disallowedElements:S,placeholder:"Write a comment"}),i.a.createElement(m.a,{justify:"right",topMarginSize:"s"},!!r&&i.a.createElement(p.Button,{type:"button",kind:"secondary",onClick:r},"Cancel"),i.a.createElement(p.Button,{type:"submit","data-testid":"comment-submit-button",kind:!b||l?"disabled":"primary",loading:c},T?"Edit ":"Add "," comment")),!!s&&i.a.createElement(h,{name:s}))}))}))}}]);
//# sourceMappingURL=CommentForm.25dd6c8a.chunk.js.map