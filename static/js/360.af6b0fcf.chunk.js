"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[360],{360:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,c,o,u=t(861),s=t(885),i=t(757),p=t.n(i),f=t(791),l=t(168),v=t(444),d=v.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n"]))),h=v.ZP.form(a||(a=(0,l.Z)([""]))),x=v.ZP.input(c||(c=(0,l.Z)(["\n  box-sizing: border-box;\n  width: 220px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  outline: none;\n  &:hover,\n  &:focus {\n    border-color: red;\n  }\n  padding: 5px;\n"]))),m=v.ZP.button(o||(o=(0,l.Z)(["\n  border: none;\n  margin-top: 30px;\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  &:hover,\n  &:focus {\n    border-color: red;\n  }\n  cursor: pointer;\n  width: 100px;\n"]))),g=t(184);var b=function(e){var n=e.onSubmit,t=(0,f.useState)(""),r=(0,s.Z)(t,2),a=r[0],c=r[1];return(0,g.jsx)(d,{children:(0,g.jsxs)(h,{onSubmit:function(e){e.preventDefault(),""!==a?(n(a),c("")):alert("Please enter a word")},children:[(0,g.jsx)(x,{type:"text",name:"query",query:a,onChange:function(e){c(e.currentTarget.value.toLowerCase())},autoComplete:"off"}),(0,g.jsx)(m,{type:"submit",children:"Search film"})]})})},w=t(731),Z=t(682),y=t(689),k=function(e){var n=e.films,t=(0,y.TH)();return(0,g.jsx)("div",{children:(0,g.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.title;return(0,g.jsx)("li",{children:(0,g.jsx)(w.rU,{state:{from:t},to:"/movies/".concat(n),children:r})},n)}))})})},j=function(){var e=(0,f.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,w.lr)(),c=(0,s.Z)(a,2),o=c[0],i=c[1],l=o.get("query");(0,f.useEffect)((function(){if(l){var e=function(){var e=(0,u.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.zi)(l);case 3:n=e.sent,r(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(b,{onSubmit:function(e){i({query:e})}}),(0,g.jsx)(k,{films:t})]})}},682:function(e,n,t){t.d(n,{Zn:function(){return i},zv:function(){return l},TP:function(){return f},tx:function(){return v},zi:function(){return p}});var r=t(861),a=t(757),c=t.n(a),o="ae750ece0804f05464dc1609a148e97e",u="https://api.themoviedb.org/3/",s=t(44),i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"movie/").concat(n,"?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=360.af6b0fcf.chunk.js.map