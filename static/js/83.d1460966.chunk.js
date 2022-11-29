"use strict";(self.webpackChunkhw_react_5_movies=self.webpackChunkhw_react_5_movies||[]).push([[83],{3820:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(2791),i=e(5586),o=e(168),c=e(6444).ZP.button(r||(r=(0,o.Z)(["\n  display: block;\n  padding: 8px 16px;\n  border: none;\n  background-color: #fd8b08ed;\n  outline: none;\n  color: white;\n  cursor: pointer;\n  font-weight: 500;\n  margin: 0px auto;\n  margin-bottom: 40px;\n"]))),u=e(184);function s(){var n=(0,a.useContext)(i.z).setPage;return(0,u.jsx)(c,{type:"button",onClick:function(){n((function(n){return n+1}))},children:"Load More"})}},116:function(n,t,e){e.d(t,{Z:function(){return k}});var r,a,i,o,c,u,s=e(8683),p=e(7689),d=e(168),l=e(6731),f=e(6444),h=f.ZP.li(r||(r=(0,d.Z)(["\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  width: 260px;\n  margin-bottom: 10px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-left: auto;\n  margin-right: auto;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);\n  }\n\n  @media screen and (min-width: 420px) {\n    width: calc((100% - 1 * 16px) / 2);\n    margin-bottom: 0;\n  }\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 2 * 16px) / 3);\n  }\n  @media screen and (min-width: 1200px) {\n    width: calc((100% - 4 * 16px) / 5);\n  }\n"]))),x=(0,f.ZP)(l.rU)(a||(a=(0,d.Z)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover,&:focus {\n    color: #fd8b08ed;\n  }\n"]))),m=f.ZP.h3(i||(i=(0,d.Z)(["\n  font-weight: 400;\n  margin: 0;\n  padding: 10px;\n  @media screen and (min-width: 768px) {\n    font-weight: 500;\n  }\n"]))),g=f.ZP.img(o||(o=(0,d.Z)(["\n  width: 100%;\n  height: 350px;\n  object-fit: cover;\n"]))),b=f.ZP.span(c||(c=(0,d.Z)(["\n  font-weight: 100;\n"]))),v=e(904),w=e(184);function Z(n){var t=n.id,e=n.original_title,r=n.poster_path,a=n.release_date,i=(0,p.TH)(),o=a?(0,w.jsxs)(b,{children:["(",a.slice(0,4),")"]}):"",c=r?"".concat("https://image.tmdb.org/t/p/w500","/").concat(r):v;return(0,w.jsx)(h,{children:(0,w.jsxs)(x,{to:"/movies/".concat(t),state:{from:i},children:[(0,w.jsx)(g,{src:c,alt:""}),(0,w.jsxs)(m,{children:[e," ",o]})]})})}var y=f.ZP.ul(u||(u=(0,d.Z)(["\n  display: block;\n  padding: 16px 0px;\n  margin-left: auto;\n  margin-right: auto;\n\n  list-style: none;\n  @media screen and (min-width: 420px) {\n    display: flex;\n    gap: 16px;\n    flex-wrap: wrap;\n    padding-left: 0;\n  }\n"])));function k(n){var t=n.movies;return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(y,{children:t.map((function(n){return(0,w.jsx)(Z,(0,s.Z)({},n),n.id)}))})})}},8334:function(n,t,e){e.d(t,{Ad:function(){return v},TP:function(){return x},_k:function(){return d},yr:function(){return g},z1:function(){return f}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1044),c="https://api.themoviedb.org/3",u="trending/movie/week",s="search/movie",p="cb5d99917b11063d4e60e6f353e2f3b8";function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(c,"/").concat(u,"?api_key=").concat(p,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(c,"/").concat(s,"?api_key=").concat(p,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(p));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(p));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(p));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},2083:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,i,o,c=e(2982),u=e(5861),s=e(885),p=e(7757),d=e.n(p),l=e(116),f=e(2791),h=e(8820),x=e(5562),m=e(168),g=e(6444),b=g.ZP.form(r||(r=(0,m.Z)(["\n  align-items: center;\n  text-align: center;\n"]))),v=g.ZP.div(a||(a=(0,m.Z)(["\n  display: block;\n  @media screen and (max-width: 420px) {\n    padding-right: 40px\n  }\n"]))),w=g.ZP.button(i||(i=(0,m.Z)(["\n  position: absolute;\n  align-items: center;\n  outline: none;\n  height: 34px;\n  width: 40px;\n  justify-content: center;\n  border: 1px solid black;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n  background-color: white;\n  border: 1px solid black;\n  cursor: pointer;\n  :hover {\n    background-color: #fd8b08ed;\n    color: white;\n  }\n"]))),Z=g.ZP.input(o||(o=(0,m.Z)(["\n  width: 200px;\n  height: 20px;\n  padding: 6px;\n  outline: none;\n  border: 1px solid black;\n  border-top-left-radius: 7px;\n  border-bottom-left-radius: 7px;\n  @media screen and (min-width: 420px) {\n    width: 300px;\n  }\n"]))),y=e(184);function k(n){var t=n.submit,e=(0,f.useState)(""),r=(0,s.Z)(e,2),a=r[0],i=r[1];return(0,y.jsx)(b,{onSubmit:function(n){if(n.preventDefault(),""===a.trim())return x.Notify.warning("Fill this field");t({movieName:a}),i("")},children:(0,y.jsxs)(v,{children:[(0,y.jsx)(Z,{name:"movieName",value:a,type:"text",autoComplete:"off",onChange:function(n){i(n.target.value.toLowerCase())},placeholder:"Search movie"}),(0,y.jsx)(w,{type:"submit",children:(0,y.jsx)(h.RB5,{size:"20"})})]})})}var j=e(6731),_=e(8334),P=e(7989),C=e(3820),N=e(5586);function z(){var n,t=(0,f.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],i=(0,f.useContext)(N.z).page,o=(0,f.useState)(null),p=(0,s.Z)(o,2),h=p[0],m=p[1],g=(0,f.useState)(!1),b=(0,s.Z)(g,2),v=b[0],w=b[1],Z=(0,j.lr)(),z=(0,s.Z)(Z,2),S=z[0],F=z[1],L=null!==(n=S.get("name_film"))&&void 0!==n?n:"";(0,f.useEffect)((function(){function n(){return(n=(0,u.Z)(d().mark((function n(){var t,e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,n.next=4,(0,_.z1)(L,i);case 4:if(0!==(t=n.sent).total_results){n.next=7;break}return n.abrupt("return",x.Notify.failure("No such films"));case 7:a((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(t.results))})),e=Math.ceil(t.total_results/20),m(e),i>=e&&x.Notify.warning("We're sorry, but you've reached the end of search results.");case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,,11,14]])})))).apply(this,arguments)}L&&function(){n.apply(this,arguments)}()}),[L,i]);var M=0!==(null===r||void 0===r?void 0:r.length),T=i<h;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{submit:function(n){var t=n.movieName;a([]),F({name_film:t})}}),r&&(0,y.jsx)(l.Z,{movies:r}),v?(0,y.jsx)(P.Z,{}):T&&M&&(0,y.jsx)(C.Z,{})]})}},904:function(n,t,e){n.exports=e.p+"static/media/default-poster.b98378e2328f30af55fe.jpg"}}]);
//# sourceMappingURL=83.d1460966.chunk.js.map