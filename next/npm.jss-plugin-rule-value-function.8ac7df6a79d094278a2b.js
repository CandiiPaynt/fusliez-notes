(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{66:function(n,e,r){"use strict";var t=r(4),o=Date.now(),f="fnValues"+o,i="fnStyle"+ ++o;e.a=function(){return{onCreateRule:function(n,e,r){if("function"!=typeof e)return null;var o=Object(t.f)(n,{},r);return o[i]=e,o},onProcessStyle:function(n,e){if(f in e||i in e)return n;var r={};for(var t in n){var o=n[t];"function"==typeof o&&(delete n[t],r[t]=o)}return e[f]=r,n},onUpdate:function(n,e,r,t){var o=e,u=o[i];u&&(o.style=u(n)||{});var a=o[f];if(a)for(var c in a)o.prop(c,a[c](n),t)}}}}}]);