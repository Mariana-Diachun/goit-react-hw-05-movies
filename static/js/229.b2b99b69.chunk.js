"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[229],{229:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r,c,a=t(885),u=t(791),s=t(689),o=t(682),i=t(168),p=t(444),l=p.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n"]))),f=p.ZP.h4(c||(c=(0,i.Z)(["\n  margin-right: 10px;\n"]))),v=t(184),h=function(e){var n=e.reviews;return(0,v.jsx)("ul",{children:n.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsxs)(l,{children:[(0,v.jsx)(f,{children:"Author name:"}),(0,v.jsx)("p",{children:e.author})]}),(0,v.jsx)("p",{children:e.content})]},e.id)}))})},d=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,s.UO)().movieId;return(0,u.useEffect)((function(){(0,o.tx)(c).then((function(e){r(e.results)}))}),[c]),t.length>0?(0,v.jsx)(h,{reviews:t}):(0,v.jsx)("p",{children:"No reviews yet"})}},682:function(e,n,t){t.d(n,{Zn:function(){return i},zv:function(){return f},TP:function(){return l},tx:function(){return v},zi:function(){return p}});var r=t(861),c=t(757),a=t.n(c),u="ae750ece0804f05464dc1609a148e97e",s="https://api.themoviedb.org/3/",o=t(44),i=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat(s,"trending/movie/day?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat(s,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat(s,"movie/").concat(n,"?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=229.b2b99b69.chunk.js.map