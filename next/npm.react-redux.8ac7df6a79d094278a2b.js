(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{33:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return w}));var r=n(0),u=n.n(r),i=(n(1),u.a.createContext(null));var c=function(t){t()},s={notify:function(){}};function o(){var t=c,e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t((function(){for(var t=e;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],n=e;n;)t.push(n),n=n.next;return t},subscribe:function(t){var r=!0,u=n={callback:t,next:null,prev:n};return u.prev?u.prev.next=u:e=u,function(){r&&null!==e&&(r=!1,u.next?u.next.prev=u.prev:n=u.prev,u.prev?u.prev.next=u.next:e=u.next)}}}}var a=function(){function t(t,e){this.store=t,this.parentSub=e,this.unsubscribe=null,this.listeners=s,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var e=t.prototype;return e.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},e.notifyNestedSubs=function(){this.listeners.notify()},e.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},e.isSubscribed=function(){return Boolean(this.unsubscribe)},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=o())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},t}();var b=function(t){var e=t.store,n=t.context,c=t.children,s=Object(r.useMemo)((function(){var t=new a(e);return t.onStateChange=t.notifyNestedSubs,{store:e,subscription:t}}),[e]),o=Object(r.useMemo)((function(){return e.getState()}),[e]);Object(r.useEffect)((function(){var t=s.subscription;return t.trySubscribe(),o!==e.getState()&&t.notifyNestedSubs(),function(){t.tryUnsubscribe(),t.onStateChange=null}}),[s,o]);var b=n||i;return u.a.createElement(b.Provider,{value:s},c)},f=(n(2),n(12),n(32),n(51),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect);n(20);function h(){return Object(r.useContext)(i)}function l(t){void 0===t&&(t=i);var e=t===i?h:function(){return Object(r.useContext)(t)};return function(){return e().store}}var d=l();function v(t){void 0===t&&(t=i);var e=t===i?d:l(t);return function(){return e().dispatch}}var p=v(),S=function(t,e){return t===e};function y(t){void 0===t&&(t=i);var e=t===i?h:function(){return Object(r.useContext)(t)};return function(t,n){void 0===n&&(n=S);var u=e(),i=function(t,e,n,u){var i,c=Object(r.useReducer)((function(t){return t+1}),0)[1],s=Object(r.useMemo)((function(){return new a(n,u)}),[n,u]),o=Object(r.useRef)(),b=Object(r.useRef)(),h=Object(r.useRef)(),l=Object(r.useRef)(),d=n.getState();try{i=t!==b.current||d!==h.current||o.current?t(d):l.current}catch(t){throw o.current&&(t.message+="\nThe error may be correlated with this previous error:\n"+o.current.stack+"\n\n"),t}return f((function(){b.current=t,h.current=d,l.current=i,o.current=void 0})),f((function(){function t(){try{var t=b.current(n.getState());if(e(t,l.current))return;l.current=t}catch(t){o.current=t}c()}return s.onStateChange=t,s.trySubscribe(),t(),function(){return s.tryUnsubscribe()}}),[n,s]),i}(t,n,u.store,u.subscription);return Object(r.useDebugValue)(i),i}}var g,w=y(),x=n(48);g=x.unstable_batchedUpdates,c=g}}]);