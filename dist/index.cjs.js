"use strict";const jsonParse=t=>new Promise((e,n)=>{try{e(JSON.parse(t))}catch(t){n(t)}}),jsonParseSync=t=>{let e;try{e=JSON.parse(t)}catch(t){e=t}return e},clampValue=(t,e,n)=>Math.min(Math.max(e,t),n),debounce=(t,e,n)=>{if("function"!=typeof t)throw new TypeError("Expected a function");let o;return function(...a){const r=n&&!o;clearTimeout(o),o=setTimeout(()=>{o=null,n||t.apply(this,a)},e),r&&t.apply(this,a)}},mapValueFromInputToOutputRange=(t,e,n,o,a)=>(a-o)*(t-e)/(n-e)+o,throttle=(t,e,n)=>{if("function"!=typeof t)throw new TypeError("Expected a function");let o;return function(...a){const r=()=>{o=null,n||t.apply(this,a)},u=n&&!o;o||(o=setTimeout(r,e)),u&&t.apply(this,a)}};var index={clampValue:clampValue,debounce:debounce,jsonParse:jsonParse,jsonParseSync:jsonParseSync,mapValueFromInputToOutputRange:mapValueFromInputToOutputRange,throttle:throttle};module.exports=index;
//# sourceMappingURL=index.cjs.js.map