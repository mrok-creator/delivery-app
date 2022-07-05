"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[338],{6338:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(885),a=t(5048),s=t(2791),c=t(4164),l="modal_overlay__pPsai",u="modal_modal__Kap2h",i=t(184),o=document.getElementById("modal-root");var d=function(e){var n=e.close,t=e.children;(0,s.useEffect)((function(){return document.addEventListener("keydown",r),function(){return document.removeEventListener("keydown",r)}}));var r=function(e){"Escape"!==e.code?e.target===e.currentTarget&&n():n()};return(0,c.createPortal)((0,i.jsx)("div",{className:l,onClick:r,children:(0,i.jsx)("div",{className:u,children:t})}),o)},p=t(4942),m=t(1413),h=t(5861),f=t(7757),v=t.n(f),x=t(5562),b=t(7251),j=t(4569),N=t.n(j)().create({baseURL:"https://62c004aad40d6ec55cc963d5.mockapi.io/api/v1/customers"}),y=function(){var e=(0,h.Z)(v().mark((function e(n){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("/",n);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k={},C=function(){var e=(0,a.v9)(b.X,a.wU),n=(0,s.useState)({name:"",phone:"",email:"",address:""}),t=(0,r.Z)(n,2),c=t[0],l=t[1],u=(0,s.useState)(!1),o=(0,r.Z)(u,2),d=o[0],f=o[1],j=(0,s.useState)(null),N=(0,r.Z)(j,2),C=N[0],g=N[1],w=(0,s.useCallback)(function(){var e=(0,h.Z)(v().mark((function e(n){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f((function(e){return!0})),g((function(e){return null})),e.prev=2,e.next=5,y(n);case 5:t=e.sent,f((function(e){return!1})),x.Notify.success("".concat(t.name,", your order was successfully accepted, our manager will contact you ASAP")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),g((function(n){return e.t0})),x.Notify.error(" order was not accepted, please try again later");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}(),[]),Z=(0,s.useCallback)((function(e){var n=e.target,t=n.name,r=n.value;l((function(e){return(0,m.Z)((0,m.Z)({},e),{},(0,p.Z)({},t,r))}))}),[l]),_=(0,s.useCallback)(function(){var n=(0,h.Z)(v().mark((function n(t){var r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,w((0,m.Z)((0,m.Z)({},c),{},{products:e}));case 3:return r=n.sent,l({name:"",phone:"",email:"",address:""}),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[w,c,e]),P=c.name,E=c.phone,F=c.email,S=c.address;return(0,i.jsxs)("form",{className:k.form,onSubmit:_,children:[(0,i.jsx)("label",{htmlFor:"name",className:k.label,children:"Name"}),(0,i.jsx)("input",{onChange:Z,required:!0,className:k.input,value:P,name:"name",type:"text",id:"name",placeholder:"Name"}),(0,i.jsx)("label",{htmlFor:"email",className:k.label,children:"Email"}),(0,i.jsx)("input",{onChange:Z,required:!0,className:k.input,value:F,name:"email",type:"email",id:"email",placeholder:"Email"}),(0,i.jsx)("label",{htmlFor:"phone",className:k.label,children:"Phone"}),(0,i.jsx)("input",{onChange:Z,required:!0,className:k.input,value:E,name:"phone",type:"phone",id:"phone",placeholder:"Phone"}),(0,i.jsx)("label",{htmlFor:"address",className:k.label,children:"Address"}),(0,i.jsx)("input",{onChange:Z,required:!0,className:k.input,value:S,name:"address",type:"text",id:"address",placeholder:"Address"}),(0,i.jsx)("button",{className:k.button,type:"submit",children:d?"Loading...":"Order"}),C&&(0,i.jsx)("p",{className:k.error,children:C.message})]})},g=t(5636),w={},Z=function(){var e=(0,a.I0)(),n=(0,a.v9)(b.X,a.wU),t=(0,s.useState)({isOpen:!1}),c=(0,r.Z)(t,2),l=c[0],u=c[1],o=(0,s.useCallback)((function(n){return e(g.F2(n))}),[e]),p=(0,s.useCallback)((function(){return e(g.LL())}),[e]),m=(0,s.useCallback)((function(){u({isOpen:!0})}),[u]),h=(0,s.useCallback)((function(){u({isOpen:!1})}),[u]),f=n.map((function(e){var n=e.name,t=e.url,r=e.price,a=(e.text,e.id);return(0,i.jsxs)("li",{className:w.cartCard,children:[(0,i.jsx)("img",{src:t,alt:"Product ".concat(n),className:w.cartImg}),(0,i.jsx)("p",{className:w.title,children:n}),(0,i.jsxs)("p",{className:w.price,children:["Price: ",r," $"]}),(0,i.jsx)("button",{type:"button",className:w.deleteBtn,onClick:function(){return o(n)},children:"Delete"})]},a)})),v=n.reduce((function(e,n){return e+n.price}),0).toFixed(2),x=l.isOpen;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{className:w.cart,children:f}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:w.total,children:["Total price ",v," $"]}),(0,i.jsx)("button",{type:"button",className:w.btn,onClick:m,children:"Create Order"}),(0,i.jsx)("button",{type:"button",className:w.btn,onClick:p,children:"Clear cart"})]}),x&&(0,i.jsx)(d,{close:h,children:(0,i.jsx)(C,{})})]})},_=t(6119),P=function(){return(0,i.jsx)(_.Z,{children:(0,i.jsx)(Z,{})})}},7251:function(e,n,t){t.d(n,{X:function(){return a},a:function(){return r}});var r=function(e){return e.shops.activeId},a=function(e){return e.shops.products}},6119:function(e,n,t){t.d(n,{Z:function(){return l}});var r="container_container__7D7mb",a="container_title__qyPiS",s=t(184);function c(e){var n=e.title,t=e.children;return(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("h2",{className:a,children:n}),t]})}c.defaultProps={title:""};var l=c}}]);
//# sourceMappingURL=338.5e7e450a.chunk.js.map