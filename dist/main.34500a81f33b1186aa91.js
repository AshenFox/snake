!function(e){function t(t){for(var n,c,i=t[0],u=t[1],s=t[2],m=0,f=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={0:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([145,1]),r()}({145:function(e,t,r){r(146),e.exports=r(373)},332:function(e,t,r){},373:function(e,t,r){"use strict";r.r(t);r.p,r(332);var n=r(0),a=r.n(n),o=r(72),c=r(31),i=r(13),u=r.n(i),s=function(e){var t=e.main,r=t.food,n=r.x,o=r.y,c=t.segment,i={left:n+"px",bottom:o+"px",height:c.height+"px",width:c.width+"px"};return a.a.createElement("div",{className:"food puls",style:i})};s.propTypes={main:u.a.object.isRequired};var l=Object(c.b)((function(e){return{main:e.main}}))(s),m=function(e){var t=e.position,r=t.x,n=t.y,o=e.segment,c=o.height,i=o.width,u=e.delay,s=e.animated,l={bottom:n+"px",left:r+"px",height:c+"px",width:i+"px",animationDelay:"".concat(u,"s")};return a.a.createElement("div",{className:"snake__body-segment snake__body-segment--1 ".concat(s?"puls":""),style:l})};m.propTypes={position:u.a.object.isRequired,segment:u.a.object.isRequired};var f=m,p=function(e){var t=e.main,r=t.positions,o=t.segment,c=Object(n.useRef)(r.length),i=Object(n.useRef)(!0);return c.current!==r.length&&(c.current=r.length,i.current=!1),Object(n.useEffect)((function(){i.current||setTimeout((function(){i.current=!0}))})),a.a.createElement(n.Fragment,null,r.map((function(e,t){return a.a.createElement(f,{key:t,position:e,segment:o,delay:.1*t,animated:i.current})})))};p.propTypes={main:u.a.object.isRequired};var d=Object(c.b)((function(e){return{main:e.main}}))(p),y={currentScore:0,isPaused:!0,step:20,ratio:.1,direction:[0,-1],positions:[{x:400,y:360},{x:400,y:380},{x:400,y:400},{x:400,y:420},{x:400,y:440}],food:{x:100,y:100},area:{height:500,width:500},border_width:3,segment:{height:20,width:20}};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function e(t,r){var n,a=r.area,o=r.segment,c=Math.random()*(a.width-o.width),i=Math.random()*(a.height-o.height),u=c-c%o.width,s=i-i%o.height,l=g(t);try{for(l.s();!(n=l.n()).done;){var m=n.value;if(m.x===u&&m.y===s)return e(t,r)}}catch(e){l.e(e)}finally{l.f()}return{type:"SPAWN_FOOD",payload:{x:u,y:s}}},j=function(){return{type:"PAUSE"}},_=function(e){return{type:"CHANGE_SCORE",payload:{currentScore:e+=20}}},w=function(){return{type:"RESET_SCORE"}},S=function(e,t){var r=e[e.length-1];t.push(r)},N=function(e,t,r){var n,a,o=r.step;return e.map((function(e,r){if(0===r){n=h({},e);var c=e.x,i=e.y;return{x:c+t[0]*o,y:i+t[1]*o}}return a=h({},n),n=h({},e),a}))},x=function(e,t){var r=t.area,n=t.segment,a=r.width-n.width,o=r.height-n.height,c=e[0];if(!c)return!1;if(c.x>a||c.x<0||c.y>o||c.y<0)return!0;for(var i=1;i<e.length;i++)if(c.x===e[i].x&&c.y===e[i].y)return!0;return!1},P=function(e,t){var r=t.food,n=e[0];return!!n&&(r.x===n.x&&r.y===n.y)},R=function(e){if(!(e<=0)){var t={date:new Date,score:e},r=JSON.parse(localStorage.getItem("score"));r||(r=[]),console.log(r);for(var n=!1,a=0;a<r.length;a++){if(r[a].score<e){r.splice(a,0,t),n=!0;break}}n||r.push(t),console.log(r),r.length>5&&(r=r.slice(0,5)),console.log(r),localStorage.setItem("score",JSON.stringify(r))}},A=function(e){var t=e.main,r=e.moveSnake,o=e.pauseGame,c=e.resetGame,i=t.direction,u=t.positions,s=t.ratio,m=t.area,f=t.border_width,p=t.isPaused,y=Object(n.useRef)(),b=Object(n.useRef)(!1),h=Object(n.useRef)(0),E=Object(n.useRef)(i),g=Object(n.useRef)(i),O=Object(n.useRef)(!1);Object(n.useEffect)((function(){return document.body.addEventListener("keydown",_),function(){c(),document.body.removeEventListener("keydown",_)}}),[]),Object(n.useEffect)((function(){E.current=i,O.current?(g.current=O.current,O.current=!1):g.current=i,p||(y.current=requestAnimationFrame(v))}),[u,p]);var v=function e(t){if(b.current||(b.current=t),h.current=t-b.current,h.current/1e3>s)return r(g.current),void(b.current=t);p||(y.current=requestAnimationFrame(e))},j=function(e,t){return e[0]===t[0]&&e[1]===t[1]},_=function(e){var t,r,n,a=e.keyCode;32!==a?(j(g.current,E.current)?(t=E.current,r=1):(t=g.current,r=2),37===a?n=[-1,0]:38===a?n=[0,1]:39===a?n=[1,0]:40===a&&(n=[0,-1]),n&&!j(n,t)&&(n[0]===t[0]&&n[1]!==t[1]||n[0]!==t[0]&&n[1]===t[1]||(1===r?g.current=n:2===r&&(O.current=n)))):o()},w={height:m.height+2*f,width:m.width+2*f,borderWidth:f};return a.a.createElement("div",{className:"game-area",style:w,onKeyDown:_},a.a.createElement(l,null),a.a.createElement(d,null),p?a.a.createElement("p",null,"Pause"):"")};A.propTypes={main:u.a.object.isRequired};var T=Object(c.b)((function(e){return{main:e.main}}),{moveSnake:function(e){return function(t,r){var n=r().main,a=n.positions,o=n.currentScore,c=N(a,e,n);if(x(c,n)){var i=y.positions,u=y.direction;R(o),t(j()),t(w()),t(v(i,n)),t({type:"MOVE_SNAKE",payload:{positions:i,direction:u}})}else P(c,n)&&(S(a,c),t(_(o)),t(v(c,n))),t({type:"MOVE_SNAKE",payload:{positions:c,direction:e}})}},pauseGame:j,resetGame:function(){return{type:"RESET_GAME",payload:{direction:y.direction,positions:y.positions,food:y.food,currentScore:y.currentScore}}}})(A),k=r(35),D=r(9),M=r(38),q=r(142),C=r(143);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=Object(M.combineReducers)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=t.payload;switch(t.type){case"SPAWN_FOOD":return G(G({},e),{},{food:r});case"MOVE_SNAKE":return G(G({},e),{},{direction:r.direction,positions:r.positions});case"PAUSE":return G(G({},e),{},{isPaused:!e.isPaused});case"CHANGE_SCORE":return G(G({},e),{},{currentScore:r.currentScore});case"RESET_SCORE":return G(G({},e),{},{currentScore:0});case"RESET_GAME":var n=r.direction,a=r.positions,o=r.food,c=r.currentScore;return G(G({},e),{},{direction:n,positions:a,food:o,currentScore:c});default:return e}}}),K=[C.a],W=Object(M.createStore)(J,{},Object(q.composeWithDevTools)(M.applyMiddleware.apply(void 0,K))),U=function(){return a.a.createElement("ul",{className:"main-menu"},a.a.createElement("li",{className:"main-menu__item"},a.a.createElement(k.b,{to:"/game"},a.a.createElement("h3",null,"Play"))),a.a.createElement("li",{className:"main-menu__item"},a.a.createElement(k.b,{to:"/score"},a.a.createElement("h3",null,"Top score"))))},V=function(e){var t=e.main.currentScore;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"score"},a.a.createElement("p",{className:"score__top"},"Top score: ",a.a.createElement("span",null,"650")),a.a.createElement("p",{className:"score__current"},"Score: ",a.a.createElement("span",null,t))),a.a.createElement(T,null),a.a.createElement(k.b,{to:"/",className:"btn"},"Return"))};V.propTypes={main:u.a.object.isRequired};var H=Object(c.b)((function(e){return{main:e.main}}))(V),L=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"score-menu"},a.a.createElement("li",{className:"score-menu__item"},a.a.createElement("p",{className:"score-menu__data"},a.a.createElement("span",{className:"score-menu__number"},"1. - "),a.a.createElement("span",{className:"score-menu__date"},"16:27 - 26.08.2020")),a.a.createElement("span",{className:"score-menu__score"}," --- 650 points")),a.a.createElement("li",{className:"score-menu__item"},a.a.createElement("p",{className:"score-menu__data"},a.a.createElement("span",{className:"score-menu__number"},"2. - "),a.a.createElement("span",{className:"score-menu__date"},"16:27 - 26.08.2020")),a.a.createElement("span",{className:"score-menu__score"}," --- 625 points")),a.a.createElement("li",{className:"score-menu__item"},a.a.createElement("p",{className:"score-menu__data"},a.a.createElement("span",{className:"score-menu__number"},"3. - "),a.a.createElement("span",{className:"score-menu__date"},"16:27 - 26.08.2020")),a.a.createElement("span",{className:"score-menu__score"}," --- 500 points"))),a.a.createElement(k.b,{to:"/",className:"btn"},"Return"))},B=r(144),$=r.n(B),z=function(){return Object(n.useEffect)((function(){new $.a({element:"#gradient",name:"granim",opacity:[1,1],states:{"default-state":{gradients:[["#ff9966","#ff5e62"],["#00F260","#0575E6"],["#f05053","#f0e937"]]}}})}),[]),a.a.createElement(k.a,null,a.a.createElement(c.a,{store:W},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"logo"},"Snake"),a.a.createElement(D.c,null,a.a.createElement(D.a,{exact:!0,path:"/"},a.a.createElement(U,null)),a.a.createElement(D.a,{exact:!0,path:"/game"},a.a.createElement(H,null)),a.a.createElement(D.a,{exact:!0,path:"/score"},a.a.createElement(L,null))),a.a.createElement("canvas",{id:"gradient"}))))};Object(o.render)(a.a.createElement(z,null),document.getElementById("app"))}});