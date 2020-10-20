!function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)n.d(e,o,function(t){return r[t]}.bind(null,o));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=0)}([function(r,t,n){"use strict";n.r(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n])})(r,t)};function o(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(r){return"function"==typeof r}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack;s=r},get useDeprecatedSynchronousErrorHandling(){return s}};function c(r){setTimeout((function(){throw r}),0)}var a={closed:!0,next:function(r){},error:function(r){if(u.useDeprecatedSynchronousErrorHandling)throw r;c(r)},complete:function(){}},f=function(){return Array.isArray||function(r){return r&&"number"==typeof r.length}}();var p=function(){function r(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}return r.prototype=Object.create(Error.prototype),r}(),h=function(){function r(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}return r.prototype.unsubscribe=function(){var t;if(!this.closed){var n,e=this._parentOrParents,o=this._ctorUnsubscribe,s=this._unsubscribe,u=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof r)e.remove(this);else if(null!==e)for(var c=0;c<e.length;++c){e[c].remove(this)}if(i(s)){o&&(this._unsubscribe=void 0);try{s.call(this)}catch(r){t=r instanceof p?l(r.errors):[r]}}if(f(u)){c=-1;for(var a=u.length;++c<a;){var h=u[c];if(null!==(n=h)&&"object"==typeof n)try{h.unsubscribe()}catch(r){t=t||[],r instanceof p?t=t.concat(l(r.errors)):t.push(r)}}}if(t)throw new p(t)}},r.prototype.add=function(t){var n=t;if(!t)return r.EMPTY;switch(typeof t){case"function":n=new r(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof r)){var e=n;(n=new r)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof r){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},r.prototype.remove=function(r){var t=this._subscriptions;if(t){var n=t.indexOf(r);-1!==n&&t.splice(n,1)}},r.EMPTY=function(r){return r.closed=!0,r}(new r),r}();function l(r){return r.reduce((function(r,t){return r.concat(t instanceof p?t.errors:t)}),[])}var b=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),y=function(r){function t(n,e,o){var i=r.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=a;break;case 1:if(!n){i.destination=a;break}if("object"==typeof n){n instanceof t?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new d(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new d(i,n,e,o)}return i}return o(t,r),t.prototype[b]=function(){return this},t.create=function(r,n,e){var o=new t(r,n,e);return o.syncErrorThrowable=!1,o},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},t}(h),d=function(r){function t(t,n,e,o){var s,u=r.call(this)||this;u._parentSubscriber=t;var c=u;return i(n)?s=n:n&&(s=n.next,e=n.error,o=n.complete,n!==a&&(i((c=Object.create(n)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=e,u._complete=o,u}return o(t,r),t.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},t.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,n=u.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=r,t.syncErrorThrown=!0):c(r),this.unsubscribe();else{if(this.unsubscribe(),n)throw r;c(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return r._complete.call(r._context)};u.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(r){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw r;c(r)}},t.prototype.__tryOrSetError=function(r,t,n){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return u.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=t,r.syncErrorThrown=!0,!0):(c(t),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(y);var _=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function v(r){return r}function w(r){return 0===r.length?v:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}var E=function(){function r(r){this._isScalar=!1,r&&(this._subscribe=r)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e=this.operator,o=function(r,t,n){if(r){if(r instanceof y)return r;if(r[b])return r[b]()}return r||t||n?new y(r,t,n):new y(a)}(r,t,n);if(e?o.add(e.call(o,this.source)):o.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),u.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){u.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=t),!function(r){for(;r;){var t=r,n=t.closed,e=t.destination,o=t.isStopped;if(n||o)return!1;r=e&&e instanceof y?e:null}return!0}(r)?console.warn(t):r.error(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=g(t))((function(t,e){var o;o=n.subscribe((function(t){try{r(t)}catch(r){e(r),o&&o.unsubscribe()}}),e,t)}))},r.prototype._subscribe=function(r){var t=this.source;return t&&t.subscribe(r)},r.prototype[_]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return 0===r.length?this:w(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=g(r))((function(r,n){var e;t.subscribe((function(r){return e=r}),(function(r){return n(r)}),(function(){return r(e)}))}))},r.create=function(t){return new r(t)},r}();function g(r){if(r||(r=u.Promise||Promise),!r)throw new Error("no Promise impl found");return r}var S=function(){function r(r,t){this.project=r,this.thisArg=t}return r.prototype.call=function(r,t){return t.subscribe(new m(r,this.project,this.thisArg))},r}(),m=function(r){function t(t,n,e){var o=r.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=e||o,o}return o(t,r),t.prototype._next=function(r){var t;try{t=this.project.call(this.thisArg,r,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(y);const O=document.getElementById("game-board"),x=O.getContext("2d"),T=(r,t,n,e,o)=>(r.moveTo(t,n),r.lineTo(e,o),r);var P;(function r(t,n,e,o){return i(e)&&(o=e,e=void 0),o?r(t,n,e).pipe((s=function(r){return f(r)?o.apply(void 0,r):o(r)},function(r){if("function"!=typeof s)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new S(s,u))})):new E((function(r){!function r(t,n,e,o,i){var s;if(function(r){return r&&"function"==typeof r.addEventListener&&"function"==typeof r.removeEventListener}(t)){var u=t;t.addEventListener(n,e,i),s=function(){return u.removeEventListener(n,e,i)}}else if(function(r){return r&&"function"==typeof r.on&&"function"==typeof r.off}(t)){var c=t;t.on(n,e),s=function(){return c.off(n,e)}}else if(function(r){return r&&"function"==typeof r.addListener&&"function"==typeof r.removeListener}(t)){var a=t;t.addListener(n,e),s=function(){return a.removeListener(n,e)}}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(var f=0,p=t.length;f<p;f++)r(t[f],n,e,o,i)}o.add(s)}(t,n,(function(t){arguments.length>1?r.next(Array.prototype.slice.call(arguments)):r.next(t)}),r,e)}));var s,u})(O,"click").subscribe(r=>console.log("click event",JSON.stringify(r.clientX))),(P=x)&&((r,t=600)=>{const n=t/3,e=2*n;r=T(r,n,0,n,t),r=T(r,e,0,e,t),r=T(r,0,n,t,n),(r=T(r,0,e,t,e)).stroke()})(P,550),console.log("Let us do it... again!"),console.log("really this is working?")}]);