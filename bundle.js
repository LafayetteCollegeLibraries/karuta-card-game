!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function e(){}function n(t,n){var r,i,o,a,u=A;for(a=arguments.length;a-- >2;)W.push(arguments[a]);for(n&&null!=n.children&&(W.length||W.push(n.children),delete n.children);W.length;)if((i=W.pop())&&void 0!==i.pop)for(a=i.length;a--;)W.push(i[a]);else!0!==i&&!1!==i||(i=null),(o="function"!=typeof t)&&(null==i?i="":"number"==typeof i?i=String(i):"string"!=typeof i&&(o=!1)),o&&r?u[u.length-1]+=i:u===A?u=[i]:u.push(i),r=o;var f=new e;return f.nodeName=t,f.children=u,f.attributes=null==n?void 0:n,f.key=null==n?void 0:n.key,void 0!==T.vnode&&T.vnode(f),f}function i(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,i(i({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function a(t){!t.__d&&(t.__d=!0)&&1==$.push(t)&&(T.debounceRendering||setTimeout)(u)}function u(){var t,e=$;for($=[];t=e.pop();)t.__d&&N(t)}function f(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=i({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function s(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,e,n,i,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),i&&i(t);else if("class"!==e||o)if("style"===e){if(i&&"string"!=typeof i&&"string"!=typeof n||(t.style.cssText=i||""),i&&"object"==(void 0===i?"undefined":r(i))){if("string"!=typeof n)for(var a in n)a in i||(t.style[a]="");for(var a in i)t.style[a]="number"==typeof i[a]&&!1===U.test(a)?i[a]+"px":i[a]}}else if("dangerouslySetInnerHTML"===e)i&&(t.innerHTML=i.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),i?n||t.addEventListener(e,b,u):t.removeEventListener(e,b,u),(t.__l||(t.__l={}))[e]=i}else if("list"!==e&&"type"!==e&&!o&&e in t)h(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e);else{var f=o&&e!==(e=e.replace(/^xlink\:?/,""));null==i||!1===i?f?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof i&&(f?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):t.setAttribute(e,i))}else t.className=i||""}function h(t,e,n){try{t[e]=n}catch(t){}}function b(t){return this.__l[t.type](T.event&&T.event(t)||t)}function y(){for(var t;t=I.pop();)T.afterMount&&T.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(t,e,n,r,i,o){L++||(D=null!=i&&void 0!==i.ownerSVGElement,R=null!=t&&!("__preactattr_"in t));var a=m(t,e,n,r,o);return i&&a.parentNode!==i&&i.appendChild(a),--L||(R=!1,o||y()),a}function m(t,e,n,r,i){var o=t,a=D;if(null==e&&(e=""),"string"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=e&&(t.nodeValue=e):(o=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(o,t),v(t,!0))),o.__preactattr_=!0,o;if("function"==typeof e.nodeName)return O(t,e,n,r);if(D="svg"===e.nodeName||"foreignObject"!==e.nodeName&&D,(!t||!c(t,String(e.nodeName)))&&(o=s(String(e.nodeName),D),t)){for(;t.firstChild;)o.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(o,t),v(t,!0)}var u=o.firstChild,f=o.__preactattr_||(o.__preactattr_={}),l=e.children;return!R&&l&&1===l.length&&"string"==typeof l[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=l[0]&&(u.nodeValue=l[0]):(l&&l.length||null!=u)&&g(o,l,n,r,R||null!=f.dangerouslySetInnerHTML),k(o,e.attributes,f),D=a,o}function g(t,e,n,r,i){var o,a,u,c,l=t.childNodes,s=[],p={},h=0,b=0,y=l.length,_=0,g=e?e.length:0;if(0!==y)for(var x=0;x<y;x++){var k=l[x],w=k.__preactattr_,C=g&&w?k._component?k._component.__k:w.key:null;null!=C?(h++,p[C]=k):(w||(void 0!==k.splitText?!i||k.nodeValue.trim():i))&&(s[_++]=k)}if(0!==g)for(var x=0;x<g;x++){u=e[x],c=null;var C=u.key;if(null!=C)h&&void 0!==p[C]&&(c=p[C],p[C]=void 0,h--);else if(!c&&b<_)for(o=b;o<_;o++)if(void 0!==s[o]&&f(a=s[o],u,i)){c=a,s[o]=void 0,o===_-1&&_--,o===b&&b++;break}c=m(c,u,n,r),c&&c!==t&&(x>=y?t.appendChild(c):c!==l[x]&&(c===l[x+1]?d(l[x]):t.insertBefore(c,l[x]||null)))}if(h)for(var x in p)void 0!==p[x]&&v(p[x],!1);for(;b<=_;)void 0!==(c=s[_--])&&v(c,!1)}function v(t,e){var n=t._component;n?M(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||d(t),x(t))}function x(t){for(t=t.lastChild;t;){var e=t.previousSibling;v(t,!0),t=e}}function k(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||p(t,r,n[r],n[r]=void 0,D);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||p(t,r,n[r],n[r]=e[r],D)}function w(t){var e=t.constructor.name;(V[e]||(V[e]=[])).push(t)}function C(t,e,n){var r,i=V[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),E.call(r,e,n)):(r=new E(e,n),r.constructor=t,r.render=j),i)for(var o=i.length;o--;)if(i[o].constructor===t){r.__b=i[o].__b,i.splice(o,1);break}return r}function j(t,e,n){return this.constructor(t,n)}function S(t,e,n,r,i){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===T.syncComponentUpdates&&t.base?a(t):N(t,1,i)),t.__r&&t.__r(t))}function N(t,e,n,r){if(!t.__x){var o,a,u,f=t.props,c=t.state,s=t.context,d=t.__p||f,p=t.__s||c,h=t.__c||s,b=t.base,m=t.__b,g=b||m,x=t._component,k=!1;if(b&&(t.props=d,t.state=p,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(f,c,s)?k=!0:t.componentWillUpdate&&t.componentWillUpdate(f,c,s),t.props=f,t.state=c,t.context=s),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!k){o=t.render(f,c,s),t.getChildContext&&(s=i(i({},s),t.getChildContext()));var w,j,O=o&&o.nodeName;if("function"==typeof O){var E=l(o);a=x,a&&a.constructor===O&&E.key==a.__k?S(a,E,1,s,!1):(w=a,t._component=a=C(O,E,s),a.__b=a.__b||m,a.__u=t,S(a,E,0,s,!1),N(a,1,n,!0)),j=a.base}else u=g,w=x,w&&(u=t._component=null),(g||1===e)&&(u&&(u._component=null),j=_(u,o,s,n||!b,g&&g.parentNode,!0));if(g&&j!==g&&a!==x){var P=g.parentNode;P&&j!==P&&(P.replaceChild(j,g),w||(g._component=null,v(g,!1)))}if(w&&M(w),t.base=j,j&&!r){for(var W=t,A=t;A=A.__u;)(W=A).base=j;j._component=W,j._componentConstructor=W.constructor}}if(!b||n?I.unshift(t):k||(y(),t.componentDidUpdate&&t.componentDidUpdate(d,p,h),T.afterUpdate&&T.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);L||r||y()}}function O(t,e,n,r){for(var i=t&&t._component,o=i,a=t,u=i&&t._componentConstructor===e.nodeName,f=u,c=l(e);i&&!f&&(i=i.__u);)f=i.constructor===e.nodeName;return i&&f&&(!r||i._component)?(S(i,c,3,n,r),t=i.base):(o&&!u&&(M(o),t=a=null),i=C(e.nodeName,c,n),t&&!i.__b&&(i.__b=t,a=null),S(i,c,1,n,r),t=i.base,a&&t!==a&&(a._component=null,v(a,!1))),t}function M(t){T.beforeUnmount&&T.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?M(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,d(e),w(t),x(e)),t.__r&&t.__r(null)}function E(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function P(t,e,n){return _(n,t,{},!1,e,!1)}var T={},W=[],A=[],U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,$=[],I=[],L=0,D=!1,R=!1,V={};i(E.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=i({},n)),i(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),a(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),N(this,2)},render:function(){}});var G={h:n,createElement:n,cloneElement:o,Component:E,render:P,rerender:u,options:T};t.exports=G}()},function(t,e,n){"use strict";var r=n(0),i=r.h;t.exports=function(t){var e=t.data,n=t.type,r=t.width||250,o={container:Object.assign({alignItems:"center",backgroundColor:"papayawhip",backgroundImage:'url("'+e[n]+'")',backgroundSize:"contain",border:.04*r+"px solid #65001c",borderRadius:"5px",boxShadow:"0 2px 4px 0 #999",display:"inline-flex",height:1.4*r+"px",justifyContent:"center",margin:"10px",position:"relative",width:r+"px"},t.style),data:{color:"#65001c",fontSize:"2.25rem"}};return i("div",{className:"card",onClick:t.onClick,style:o.container})}},function(t,e){t.exports={numberOfCards:10,cards:[{id:"a",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/411",grab:"http://exhibits.lafayette.edu/karuta/files/original/71d4c2d6f5fe38851f66adfd204263d7.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/f8333bf35215a70ddb45a6c8bb7a3ce9.png"},{id:"e",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/413",grab:"http://exhibits.lafayette.edu/karuta/files/original/1e085f571ce93d30938c85cf689b9352.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/106dcf73c51a20f9d7b27deefd64a0f7.png"},{id:"hi",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/415",grab:"http://exhibits.lafayette.edu/karuta/files/original/1e2e40f69aa4ffb723dfedced26379a3.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/12b66a658ad89a8f137d9faedb4b4610.png"},{id:"i",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/417",grab:"http://exhibits.lafayette.edu/karuta/files/original/b6e0a16be2ff69177d43165a422b6a26.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/1f54ef361e23e81cfdda62bddbfdaab6.png"},{id:"mu",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/419",grab:"http://exhibits.lafayette.edu/karuta/files/original/99254383a52977d74fa1e9d98a819bea.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/ff43a00063a633209523b7d34c9e14f4.png"},{id:"re",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/421",grab:"http://exhibits.lafayette.edu/karuta/files/original/8241b1f69e908b78ee10fa2c26318bc6.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/c9017deea0de2cd009f40eaa3fb7093d.png"},{id:"ri",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/423",grab:"http://exhibits.lafayette.edu/karuta/files/original/8f2cd745b39c5693e1245c9044844f28.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/0ec2c7639645555d16a0aafd9bc5bec2.png"},{id:"sa",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/424",grab:"http://exhibits.lafayette.edu/karuta/files/original/743de4b3abead8c773c39765fda4987c.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/6c84f2afe31a4a83c1283350dafa257e.png"},{id:"shi",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/427",grab:"http://exhibits.lafayette.edu/karuta/files/original/1526146cd8a4aa11ad66092e67c7c772.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/a86acd2a7c25306f18724bb3bccbd771.png"},{id:"ta",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/429",grab:"http://exhibits.lafayette.edu/karuta/files/original/cb8698e6f85cb2d5f8b59afc3b4ad01a.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/8e24ea4e406998eda40e522faeefcb92.png"},{id:"wi",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/433",grab:"http://exhibits.lafayette.edu/karuta/files/original/69e84bbd8c19660eed393488be802c05.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/eaf13ba6ba8a74760e1315c3cd09c82b.png"},{id:"wo",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/435",grab:"http://exhibits.lafayette.edu/karuta/files/original/7ca8ec1bb2c6f5a271c014187c837822.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/344677e333e3c126e176bf7cbdce431a.png"},{id:"yo",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/437",grab:"http://exhibits.lafayette.edu/karuta/files/original/e1fcfe904985527320a12633a9a32428.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/77f2b18d79a3d18b2d4da64a39c137af.png"},{id:"yu",url:"http://exhibits.lafayette.edu/karuta/admin/files/show/439",grab:"http://exhibits.lafayette.edu/karuta/files/original/fc556388104c20444d1c297b10af9b96.png",recitation:"http://exhibits.lafayette.edu/karuta/files/original/ab0fcabe957a5be8f4dacf73b9f996d1.png"}]}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),f=u.h,c=u.Component,l=n(4),s=n(1),d=n(6);t.exports=function(t){function e(t){r(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleCardClick=n.handleCardClick.bind(n),n.restartGame=n.restartGame.bind(n),n.state={},n}return o(e,t),a(e,[{key:"componentDidMount",value:function(){this.restartGame()}},{key:"handleCardClick",value:function(t){t===this.state.answerIdx?(alert("You matched! Great job!"),this.restartGame()):alert("Try again!")}},{key:"restartGame",value:function(){var t=this.shuffle(this.props.cards).slice(0,this.props.numberOfCards||6);this.setState({cards:t,answerIdx:Math.floor(Math.random()*t.length)})}},{key:"shuffle",value:function(t){var e=void 0;do{e=l(t)}while(function(t,e){for(var n=0;n<t.length;n++)return t[n]===e[n]}(t,e));return e}},{key:"render",value:function(){if(void 0===this.state.cards)return null;var t=this.props.cardWidth||150,e={container:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},recitation:{display:"block",marginBottom:"50px"}},n=this.state,r=n.cards,i=n.answerIdx;return f("div",{style:e.container},f(s,{data:r[i],width:t,style:e.recitation,type:"recitation"}),f(d,{cardWidth:t,data:r,onCardClick:this.handleCardClick}))}}]),e}(c)},function(t,e,n){"use strict";(function(e){function n(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function r(t){return t.split("")}function i(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function o(t,e){return n(e,function(e){return t[e]})}function a(t,e){return null==t?void 0:t[e]}function u(t){return vt.test(t)}function f(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function c(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function l(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function s(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function d(t){return u(t)?p(t):r(t)}function p(t){return t.match(gt)||[]}function h(t,e){var n=Kt(t)||E(t)?i(t.length,String):[],r=n.length,o=!!r;for(var a in t)!e&&!Et.call(t,a)||o&&("length"==a||k(a,r))||n.push(a);return n}function b(t,e,n){return t===t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}function y(t){return Pt.call(t)}function _(t){return!(!U(t)||C(t))&&(W(t)||f(t)?Tt:ft).test(S(t))}function m(t){if(!j(t))return It(t);var e=[];for(var n in Object(t))Et.call(t,n)&&"constructor"!=n&&e.push(n);return e}function g(t,e){return t+$t(Lt()*(e-t+1))}function v(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function x(t,e){var n=a(t,e);return _(n)?n:void 0}function k(t,e){return!!(e=null==e?q:e)&&("number"==typeof t||lt.test(t))&&t>-1&&t%1==0&&t<e}function w(t,e,n){if(!U(n))return!1;var r=void 0===e?"undefined":H(e);return!!("number"==r?P(n)&&k(e,n.length):"string"==r&&e in n)&&M(n[e],t)}function C(t){return!!Ot&&Ot in t}function j(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||St)}function S(t){if(null!=t){try{return Mt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function N(t,e,n){var r=-1,i=D(t),o=i.length,a=o-1;for(e=(n?w(t,e,n):void 0===e)?1:b(V(e),0,o);++r<e;){var u=g(r,a),f=i[u];i[u]=i[r],i[r]=f}return i.length=e,i}function O(t){return N(t,K)}function M(t,e){return t===e||t!==t&&e!==e}function E(t){return T(t)&&Et.call(t,"callee")&&(!Ut.call(t,"callee")||Pt.call(t)==Q)}function P(t){return null!=t&&A(t.length)&&!W(t)}function T(t){return $(t)&&P(t)}function W(t){var e=U(t)?Pt.call(t):"";return e==X||e==Z}function A(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=q}function U(t){var e=void 0===t?"undefined":H(t);return!!t&&("object"==e||"function"==e)}function $(t){return!!t&&"object"==(void 0===t?"undefined":H(t))}function I(t){return"string"==typeof t||!Kt(t)&&$(t)&&Pt.call(t)==nt}function L(t){return"symbol"==(void 0===t?"undefined":H(t))||$(t)&&Pt.call(t)==rt}function D(t){if(!t)return[];if(P(t))return I(t)?d(t):v(t);if(At&&t[At])return c(t[At]());var e=Jt(t);return(e==tt?l:e==et?s:F)(t)}function R(t){if(!t)return 0===t?t:0;if((t=G(t))===B||t===-B){return(t<0?-1:1)*Y}return t===t?t:0}function V(t){var e=R(t),n=e%1;return e===e?n?e-n:e:0}function G(t){if("number"==typeof t)return t;if(L(t))return J;if(U(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=U(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ot,"");var n=ut.test(t);return n||ct.test(t)?xt(t.slice(2),n?2:8):at.test(t)?J:+t}function z(t){return P(t)?h(t):m(t)}function F(t){return t?o(t,z(t)):[]}var H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=1/0,q=9007199254740991,Y=1.7976931348623157e308,J=NaN,K=4294967295,Q="[object Arguments]",X="[object Function]",Z="[object GeneratorFunction]",tt="[object Map]",et="[object Set]",nt="[object String]",rt="[object Symbol]",it=/[\\^$.*+?()[\]{}|]/g,ot=/^\s+|\s+$/g,at=/^[-+]0x[0-9a-f]+$/i,ut=/^0b[01]+$/i,ft=/^\[object .+?Constructor\]$/,ct=/^0o[0-7]+$/i,lt=/^(?:0|[1-9]\d*)$/,st="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",dt="\\ud83c[\\udffb-\\udfff]",pt="(?:\\ud83c[\\udde6-\\uddff]){2}",ht="[\\ud800-\\udbff][\\udc00-\\udfff]",bt="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",yt="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",pt,ht].join("|")+")[\\ufe0e\\ufe0f]?"+bt+")*",_t="[\\ufe0e\\ufe0f]?"+bt+yt,mt="(?:"+["[^\\ud800-\\udfff]"+st+"?",st,pt,ht,"[\\ud800-\\udfff]"].join("|")+")",gt=RegExp(dt+"(?="+dt+")|"+mt+_t,"g"),vt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),xt=parseInt,kt="object"==(void 0===e?"undefined":H(e))&&e&&e.Object===Object&&e,wt="object"==("undefined"==typeof self?"undefined":H(self))&&self&&self.Object===Object&&self,Ct=kt||wt||Function("return this")(),jt=Function.prototype,St=Object.prototype,Nt=Ct["__core-js_shared__"],Ot=function(){var t=/[^.]+$/.exec(Nt&&Nt.keys&&Nt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Mt=jt.toString,Et=St.hasOwnProperty,Pt=St.toString,Tt=RegExp("^"+Mt.call(Et).replace(it,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wt=Ct.Symbol,At=Wt?Wt.iterator:void 0,Ut=St.propertyIsEnumerable,$t=Math.floor,It=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),Lt=Math.random,Dt=x(Ct,"DataView"),Rt=x(Ct,"Map"),Vt=x(Ct,"Promise"),Gt=x(Ct,"Set"),zt=x(Ct,"WeakMap"),Ft=S(Dt),Ht=S(Rt),Bt=S(Vt),qt=S(Gt),Yt=S(zt),Jt=y;(Dt&&"[object DataView]"!=Jt(new Dt(new ArrayBuffer(1)))||Rt&&Jt(new Rt)!=tt||Vt&&"[object Promise]"!=Jt(Vt.resolve())||Gt&&Jt(new Gt)!=et||zt&&"[object WeakMap]"!=Jt(new zt))&&(Jt=function(t){var e=Pt.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?S(n):void 0;if(r)switch(r){case Ft:return"[object DataView]";case Ht:return tt;case Bt:return"[object Promise]";case qt:return et;case Yt:return"[object WeakMap]"}return e});var Kt=Array.isArray;t.exports=O}).call(e,n(5))},function(t,e,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";var r=n(0),i=r.h,o=n(1);t.exports=function(t){return i("div",{style:{container:{display:"flex",flexWrap:"wrap",justifyContent:"center"}}.container},t.data.map(function(e,n){return i(o,{data:e,key:"card-"+n,onClick:function(){return t.onCardClick(n,e)},type:"grab",width:t.cardWidth})}))}},function(t,e,n){"use strict";var r=n(0),i=r.h,o=r.render,a=n(3),u=n(2);o(i(function(t){return i(a,u)},null),document.querySelector("#karuta-game-app"))}]);