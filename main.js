(()=>{var t={9670:(t,n,e)=>{var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,n,e)=>{var r=e(5656),o=e(7466),i=e(1400),c=function(t){return function(n,e,c){var a,u=r(n),s=o(u.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},1194:(t,n,e)=>{var r=e(7293),o=e(5112),i=e(7392),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},7475:(t,n,e)=>{var r=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),void 0===n?Array:n}},5417:(t,n,e)=>{var r=e(7475);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},4326:t=>{var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},9920:(t,n,e)=>{var r=e(6656),o=e(3887),i=e(1236),c=e(3070);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||a(t,f,u(n,f))}}},8880:(t,n,e)=>{var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:t=>{t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:(t,n,e)=>{"use strict";var r=e(4948),o=e(3070),i=e(9114);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},9781:(t,n,e)=>{var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,n,e)=>{var r=e(7854),o=e(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:(t,n,e)=>{var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:(t,n,e)=>{var r,o,i=e(7854),c=e(8113),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,f=s&&s.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,n,e)=>{var r=e(7854),o=e(1236).f,i=e(8880),c=e(1320),a=e(3505),u=e(9920),s=e(4705);t.exports=function(t,n){var e,f,l,p,v,h=t.target,y=t.global,d=t.stat;if(e=y?r:d?r[h]||a(h,{}):(r[h]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(y?f:h+(d?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:(t,n,e)=>{var r=e(7854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(r[t]):r[t]&&r[t][n]}},7854:(t,n,e)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:(t,n,e)=>{var r=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},3501:t=>{t.exports={}},4664:(t,n,e)=>{var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,n,e)=>{var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,n,e)=>{var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:(t,n,e)=>{var r,o,i,c=e(8536),a=e(7854),u=e(111),s=e(8880),f=e(6656),l=e(5465),p=e(6200),v=e(3501),h="Object already initialized",y=a.WeakMap;if(c||l.state){var d=l.state||(l.state=new y),m=d.get,b=d.has,g=d.set;r=function(t,n){if(b.call(d,t))throw new TypeError(h);return n.facade=t,g.call(d,t,n),n},o=function(t){return m.call(d,t)||{}},i=function(t){return b.call(d,t)}}else{var w=p("state");v[w]=!0,r=function(t,n){if(f(t,w))throw new TypeError(h);return n.facade=t,s(t,w,n),n},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},3157:(t,n,e)=>{var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:(t,n,e)=>{var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==s||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},2190:(t,n,e)=>{var r=e(5005),o=e(3307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return"function"==typeof n&&Object(t)instanceof n}},133:(t,n,e)=>{var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:(t,n,e)=>{var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:(t,n,e)=>{var r=e(9781),o=e(4664),i=e(9670),c=e(4948),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:(t,n,e)=>{var r=e(9781),o=e(5296),i=e(9114),c=e(5656),a=e(4948),u=e(6656),s=e(4664),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=a(n),s)try{return f(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},8006:(t,n,e)=>{var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:(t,n)=>{n.f=Object.getOwnPropertySymbols},6324:(t,n,e)=>{var r=e(6656),o=e(5656),i=e(1318).indexOf,c=e(3501);t.exports=function(t,n){var e,a=o(t),u=0,s=[];for(e in a)!r(c,e)&&r(a,e)&&s.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(s,e)||s.push(e));return s}},5296:(t,n)=>{"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:(t,n,e)=>{var r=e(111);t.exports=function(t,n){var e,o;if("string"===n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if("string"!==n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3887:(t,n,e)=>{var r=e(5005),o=e(8006),i=e(5181),c=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},1320:(t,n,e)=>{var r=e(7854),o=e(8880),i=e(6656),c=e(3505),a=e(2788),u=e(9909),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,n,e,a){var u,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,v=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(u=f(e)).source||(u.source=l.join("string"==typeof n?n:""))),t!==r?(s?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,n,e)=>{var r=e(7854);t.exports=function(t,n){try{Object.defineProperty(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:(t,n,e)=>{var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,n,e)=>{var r=e(7854),o=e(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:(t,n,e)=>{var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.17.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(t,n,e)=>{var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:(t,n,e)=>{var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:t=>{var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:(t,n,e)=>{var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:(t,n,e)=>{var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:(t,n,e)=>{var r=e(111),o=e(2190),i=e(2140),c=e(5112)("toPrimitive");t.exports=function(t,n){if(!r(t)||o(t))return t;var e,a=t[c];if(void 0!==a){if(void 0===n&&(n="default"),e=a.call(t,n),!r(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),i(t,n)}},4948:(t,n,e)=>{var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:String(n)}},9711:t=>{var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:(t,n,e)=>{var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,n,e)=>{var r=e(7854),o=e(2309),i=e(6656),c=e(9711),a=e(133),u=e(3307),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},2222:(t,n,e)=>{"use strict";var r=e(2109),o=e(7293),i=e(3157),c=e(111),a=e(7908),u=e(7466),s=e(6135),f=e(5417),l=e(1194),p=e(5112),v=e(7392),h=p("isConcatSpreadable"),y=9007199254740991,d="Maximum allowed index exceeded",m=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=l("concat"),g=function(t){if(!c(t))return!1;var n=t[h];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!m||!b},{concat:function(t){var n,e,r,o,i,c=a(this),l=f(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(g(i=-1===n?c:arguments[n])){if(p+(o=u(i.length))>y)throw TypeError(d);for(e=0;e<o;e++,p++)e in i&&s(l,p,i[e])}else{if(p>=y)throw TypeError(d);s(l,p++,i)}return l.length=p,l}})}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function n(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=null,this.component=null,this.textContent=t}var e,r,o;return e=n,o=[{key:"markup",value:function(t){return'<button class="button">'.concat(t,"</button>")}}],(r=[{key:"bindToDOM",value:function(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}},{key:"creatButton",value:function(){this.checkBinding(),this.component=document.createElement("div"),this.component.className="component__button",this.component.innerHTML=n.markup(this.textContent),this.container.appendChild(this.component)}},{key:"checkBinding",value:function(){if(null===this.container)throw new Error("container is not bind to DOM")}}])&&t(e.prototype,r),o&&t(e,o),n}();e(2222);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=null,this.component=null,this.title=n,this.message=e}var n,e,o;return n=t,o=[{key:"markup",value:function(t,n){return'<div class="tooltip__content">\n              <h3 class="tooltip__title">'.concat(t,'</h3>\n              <div class="tooltip__text">').concat(n,'</div>\n            </div>\n            <div class="tooltip__arrow"></div>')}}],(e=[{key:"bindToDOM",value:function(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}},{key:"creatTooltip",value:function(){this.checkBinding(),this.component=document.createElement("div"),this.component.className="component__tooltip tooltip d_none",this.component.innerHTML=t.markup(this.title,this.message),this.container.appendChild(this.component)}},{key:"checkBinding",value:function(){if(null===this.container)throw new Error("container is not bind to DOM")}}])&&r(n.prototype,e),o&&r(n,o),t}();function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=new(function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=null,this.button=n,this.tooltip=e}var n,e,r;return n=t,(e=[{key:"bindToDOM",value:function(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}},{key:"init",value:function(){var t=this;this.drawUI();var n=this.button.component.children[0];n.addEventListener("click",(function(){return t.showTooltip(n)}))}},{key:"drawUI",value:function(){this.checkBinding(),this.button.bindToDOM(this.container),this.tooltip.bindToDOM(document.body),this.button.creatButton(),this.tooltip.creatTooltip()}},{key:"showTooltip",value:function(t){var n=this;this.tooltip.component.classList.toggle("d_none");var e=t.getBoundingClientRect(),r=this.tooltip.component.getBoundingClientRect();this.tooltip.component.style.bottom="".concat(e.top+e.height+7,"px"),this.tooltip.component.style.left="".concat(e.left-(r.width/2-e.width/2),"px"),setTimeout((function(){n.tooltip.component.classList.add("d_none")}),2e3)}},{key:"checkBinding",value:function(){if(null===this.container)throw new Error("container is not bind to DOM")}}])&&i(n.prototype,e),r&&i(n,r),t}())(new n("Click to toggle popover"),new o("Tooltip title","And here's some amazing content. It's very engaging. Right?"));c.bindToDOM(document.querySelector(".component")),c.init()})()})();