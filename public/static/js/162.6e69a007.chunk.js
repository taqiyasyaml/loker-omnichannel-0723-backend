"use strict";(self.webpackChunkloker_omnichannel=self.webpackChunkloker_omnichannel||[]).push([[162],{6162:function(n,e,t){t.r(e);var r=t(3433),i=t(4165),s=t(5861),c=t(9439),l=t(1614),a=t(1889),o=t(890),d=t(6151),u=t(9281),x=t(9836),h=t(6890),Z=t(5855),j=t(3994),p=t(3382),v=t(7047),f=t(4554),m=t(7246),k=t(2791),b=t(184),w=(0,k.lazy)((function(){return Promise.all([t.e(437),t.e(969)]).then(t.bind(t,7969))}));e.default=function(){var n,e,t,y=(0,k.useState)(!1),g=(0,c.Z)(y,2),S=g[0],C=g[1],M=(0,k.useState)(!1),P=(0,c.Z)(M,2),A=P[0],I=P[1],_=(0,k.useState)(),L=(0,c.Z)(_,2),R=L[0],U=L[1],B=(0,k.useState)(1),T=(0,c.Z)(B,2),E=T[0],F=T[1],W=(0,k.useState)(30),z=(0,c.Z)(W,2),H=z[0],O=(z[1],(0,k.useState)()),V=(0,c.Z)(O,2),$=V[0],q=V[1],D=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e){var t,r,s,c,l,a,o,d,u=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=u.length>1&&void 0!==u[1]?u[1]:E,!0!==S){n.next=3;break}return n.abrupt("return");case 3:return I(!1),C(!0),n.prev=5,l=null!==(r=null===R||void 0===R?void 0:R.total)&&void 0!==r?r:0,a=Math.min((t-1)*H,l),n.next=10,fetch((null!==(s=null===(c=window)||void 0===c?void 0:c.REACT_APP_API_URL)&&void 0!==s?s:"")+"/api/soal1?limit="+encodeURIComponent(H)+"&skip="+encodeURIComponent(a));case 10:if(o=n.sent,C(!1),200!==o.status){n.next=20;break}return n.next=15,o.json();case 15:d=n.sent,U(d),F(Math.max(1,Math.floor(d.skip/H)+1)),n.next=21;break;case 20:I(!0);case 21:n.next=28;break;case 23:n.prev=23,n.t0=n.catch(5),console.log(n.t0),C(!1),I(!0);case 28:case"end":return n.stop()}}),n,null,[[5,23]])})));return function(e){return n.apply(this,arguments)}}(),G=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e,t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!0!==S){n.next=2;break}return n.abrupt("return");case 2:return F(Math.max(1,t)),n.next=5,D(e,Math.max(1,t));case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z,{children:(0,b.jsxs)(a.ZP,{container:!0,mt:2,mx:2,spacing:1,children:[(0,b.jsxs)(a.ZP,{item:!0,xs:12,display:"flex",justifyContent:"space-between",children:[(0,b.jsx)(o.Z,{variant:"h5",children:"Product List"}),(0,b.jsx)(d.Z,{variant:"contained",onClick:D,color:!0===A?"error":"primary",children:"Show Products"})]}),(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(u.Z,{children:(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(h.Z,{children:(0,b.jsxs)(Z.Z,{children:[(0,b.jsx)(j.Z,{children:"Image"}),(0,b.jsx)(j.Z,{children:"Title"}),(0,b.jsx)(j.Z,{children:"Category"}),(0,b.jsx)(j.Z,{children:"Brand"}),(0,b.jsx)(j.Z,{children:"Stock"}),(0,b.jsx)(j.Z,{children:"Price"}),(0,b.jsx)(j.Z,{children:"Action"})]})}),(0,b.jsx)(p.Z,{children:!0===S?(0,r.Z)(Array(Math.max(1,(null!==(n=null===R||void 0===R?void 0:R.products)&&void 0!==n?n:[]).length))).map((function(n,e){return(0,b.jsxs)(Z.Z,{children:[(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{})})]},e)})):(null!==(e=null===R||void 0===R?void 0:R.products)&&void 0!==e?e:[]).map((function(n){return(0,b.jsxs)(Z.Z,{children:[(0,b.jsx)(j.Z,{children:(0,b.jsx)(f.Z,{maxWidth:function(n){return"".concat(4/12*n.breakpoints.values.sm,"px")},children:(0,b.jsx)("img",{src:n.thumbnail,alt:n.title,style:{width:"100%"}})})}),(0,b.jsx)(j.Z,{children:n.title}),(0,b.jsx)(j.Z,{children:n.category}),(0,b.jsx)(j.Z,{children:n.brand}),(0,b.jsx)(j.Z,{children:n.stock}),(0,b.jsxs)(j.Z,{children:["$",n.price.toLocaleString("en-US")]}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(d.Z,{onClick:function(){return q(n.id)},variant:"contained",children:"View"})})]},n.id)}))})]})})}),(0,b.jsxs)(a.ZP,{item:!0,xs:12,display:"flex",justifyContent:"space-between",children:[(0,b.jsxs)(o.Z,{children:["SHOW: ",Array.isArray(null===R||void 0===R?void 0:R.products)?null===R||void 0===R?void 0:R.products.length:0," ITEMS"]}),(0,b.jsx)(m.Z,{count:Math.max(1,Math.ceil((null!==(t=null===R||void 0===R?void 0:R.total)&&void 0!==t?t:0)/Math.max(1,H))),page:Math.max(1,E),onChange:G,showFirstButton:!0,showLastButton:!0})]})]})}),(0,b.jsx)(k.Suspense,{children:(0,b.jsx)(w,{id:$,onClose:function(){return q(void 0)}})})]})}}}]);
//# sourceMappingURL=162.6e69a007.chunk.js.map