"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{115:function(t,e,r){r.d(e,{b:function(){return n}});var n="https://image.tmdb.org/t/p"},703:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(885),c=r(861),a=r(757),u=r.n(a),s=r(44),i=function(){var t=(0,c.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("/movie/".concat(e,"/credits?api_key=ae750ece0804f05464dc1609a148e97e"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),o=r(791),f=r(689),p=r(115),h=r(184),l=function(t){var e=t.actors;return(0,h.jsx)("ul",{children:e.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:"".concat(p.b,"/w300").concat(t.profile_path),alt:"",width:"150",height:"230"}),(0,h.jsx)("p",{children:t.name}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})},d=function(){var t=(0,o.useState)([]),e=(0,n.Z)(t,2),r=e[0],c=e[1],a=(0,f.UO)().movieId;return(0,o.useEffect)((function(){i(a).then((function(t){c(t.cast)}))}),[a]),(0,h.jsx)(l,{actors:r})}}}]);
//# sourceMappingURL=703.8a4855fc.chunk.js.map