"use strict";(self.webpackChunkgiffy=self.webpackChunkgiffy||[]).push([[362],{362:function(n,e,r){r.r(e),r.d(e,{default:function(){return s}});var i=r(152),t=r(791),a=r(625);var c=r(184);var s=function(){var n=(0,t.useState)([]),e=(0,i.Z)(n,2),r=e[0],s=e[1];(0,t.useEffect)((function(){(function(){var n="".concat("https://api.giphy.com/v1/gifs","/trending?api_key=").concat("rQTX6ScmQjCQOMr1xm1FBbMSTHRKO1MC","&limit=20&rating=g");return fetch(n).then((function(n){return n.json()})).then((function(n){var e=n.data;if(Array.isArray(n.data))return e.map((function(n){var e=n.images;return{title:n.title,id:n.id,url:e.downsized_medium.url}}))}))})().then((function(n){s(n)}))}),[]);var u=r.slice(0,20);function d(n){return n%3===0?"#8EC5FC":n%3===1?"#D9AFD9":n%3===2?"#8BC6EC":void 0}var l=function(n){return n%3===0?"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)":n%3===1?"linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)":n%3===2?"linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)":void 0},f=u.map((function(n,e){return(0,c.jsx)(a.rU,{to:"/search/".concat(n.title),children:(0,c.jsx)("li",{style:{"--bgTrending":"".concat(d(e)),"--bgImageTrending":"".concat(l(e))},children:(0,c.jsxs)("small",{children:[" ",n.title," "]})})},e)}));return(0,c.jsxs)("div",{className:"Trending",children:[(0,c.jsxs)("h1",{className:"trendingTitle",children:[" Trending ",(0,c.jsx)("span",{children:"Searches"})]}),(0,c.jsxs)("ul",{children:[" ",f," "]})]})}}}]);
//# sourceMappingURL=362.27160257.chunk.js.map