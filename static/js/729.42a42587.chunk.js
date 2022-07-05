"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[729],{7729:function(r,n,t){t.r(n),t.d(n,{default:function(){return A}});var e=t(6119),a=t(1413),s=t(5861),c=t(885),i=t(7757),o=t.n(i),u=t(2791),l=t(5048),d=t(5636),p={},f=t(184),h=function(r){var n=r.name,t=r.avatar,e=r.id,a=(0,l.I0)(),s=(0,l.v9)((function(r){return r.shops.activeId}),l.wU),c=(0,u.useCallback)((function(r){a((0,d.HZ)(r))}),[a]);return(0,f.jsxs)("div",{className:function(r){return s===r?p.active:p.shopItem}(e),onClick:function(){return c(e)},children:[(0,f.jsx)("img",{src:t,alt:"".concat(n," logo"),className:p.img}),(0,f.jsx)("h3",{className:p.title,children:n})]})},v=t(3760),m=t(4569),x=t.n(m)().create({baseURL:"https://62c004aad40d6ec55cc963d5.mockapi.io/api/v1/Shops"}),g=function(){var r=(0,s.Z)(o().mark((function r(){var n,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x.get("/");case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),j=function(){var r=(0,s.Z)(o().mark((function r(n){var t,e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x.get("/".concat(n));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),Z={},y=function(){var r=(0,u.useState)({shops:[],isLoading:!1,error:null}),n=(0,c.Z)(r,2),t=n[0],e=n[1];(0,u.useEffect)((function(){var r=function(){var r=(0,s.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!0,error:null})})),r.next=3,g();case 3:n=r.sent;try{e((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!1,shops:n})}))}catch(d){e((function(n){return(0,a.Z)((0,a.Z)({},n),{},{error:d.message,isLoading:!1})}))}case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]);var i=t.shops,l=t.isLoading,d=t.error,p=i.map((function(r){return(0,f.jsx)(h,{id:r.id,avatar:r.avatar,name:r.name},r.id)}));return(0,f.jsxs)(f.Fragment,{children:[i.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:Z.title,children:"Shops"}),p]}),l&&(0,f.jsx)(v.Z,{}),d&&(0,f.jsx)("div",{children:d})]})},b=t(907);var w=t(181);function N(r){return function(r){if(Array.isArray(r))return(0,b.Z)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||(0,w.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k={},L=function(r){var n=r.url,t=r.text,e=r.name,a=r.price,s=(0,l.I0)(),c=a>0?a:Math.floor(271*Math.random()+30);return(0,f.jsxs)("div",{className:k.productCard,children:[(0,f.jsx)("img",{src:n,alt:"Product ".concat(e),className:k.img}),(0,f.jsx)("h3",{className:k.title,children:e}),(0,f.jsx)("p",{className:k.text,children:t}),(0,f.jsx)("p",{className:k.price,children:c}),(0,f.jsx)("button",{type:"button",className:k.orderBtn,onClick:function(){return r={url:n,text:t,name:e,price:c},void s((0,d.yK)(r));var r},children:"Add to Cart"})]})};L.defaultProps={price:0};var S=L,_=t(7251),C=function(){var r=(0,l.v9)(_.a,l.wU),n=(0,u.useState)({products:[],isLoading:!1,error:null}),t=(0,c.Z)(n,2),e=t[0],i=t[1];(0,u.useEffect)((function(){var n=function(){var n=(0,s.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!0,error:null})})),n.prev=1,n.next=4,j(r);case 4:t=n.sent,i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!1,products:N(t.products)})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{error:n.t0.message,isLoading:!1})}));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();r&&n()}),[r]);var d=e.products,p=e.isLoading,h=e.error,m=d.map((function(r,n){return(0,f.jsx)(S,(0,a.Z)({},r),n)}));return(0,f.jsxs)(f.Fragment,{children:[d.length>0&&m,!(d.length>0)&&!h&&"There is no products to order, yet",p&&(0,f.jsx)(v.Z,{}),h&&(0,f.jsxs)("div",{children:[" ","Something went wrong: ".concat(h)]})]})},I={},A=function(){return(0,f.jsxs)(e.Z,{children:[(0,f.jsx)("div",{className:I.shopsWrapper,children:(0,f.jsx)(y,{})}),(0,f.jsx)("div",{className:I.productsWrapper,children:(0,f.jsx)(C,{})})]})}},7251:function(r,n,t){t.d(n,{X:function(){return a},a:function(){return e}});var e=function(r){return r.shops.activeId},a=function(r){return r.shops.products}},6119:function(r,n,t){t.d(n,{Z:function(){return i}});var e="container_container__7D7mb",a="container_title__qyPiS",s=t(184);function c(r){var n=r.title,t=r.children;return(0,s.jsxs)("div",{className:e,children:[(0,s.jsx)("h2",{className:a,children:n}),t]})}c.defaultProps={title:""};var i=c}}]);
//# sourceMappingURL=729.42a42587.chunk.js.map