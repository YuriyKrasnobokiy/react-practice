"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[949],{949:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var o,c=n(433),r=n(413),s=n(439),i="Product_product__hQeO1",a="Product_productTitle__6HXej",l="Product_productImg__+a4qi",u="Product_discount__jixC9",d="Product_apology__pj8OQ",h="Product_poductBtn__TxHFh",p=n(184),m=function(t){var e=t.title,n=t.price,o=t.discount,c=t.id,r=t.handleDeleteProduct,s=t.openModal,m={backgroundColor:o?"#f37703":"#a4dbe2"};return(0,p.jsxs)("div",{className:i,style:m,children:[(0,p.jsx)("img",{className:l,src:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",alt:"Tacos With Lime"}),(0,p.jsx)("h1",{className:a,children:e}),o?(0,p.jsxs)("h2",{className:u,children:["Discount: ",o,"$"]}):(0,p.jsx)("p",{className:d,children:"Sorry, but discount on this product has expired \u2639"}),(0,p.jsxs)("h2",{children:["Price: ",n]}),(0,p.jsx)("button",{className:h,type:"button",children:"Add product to cart"}),(0,p.jsx)("button",{onClick:function(){return s({title:e,price:n,discount:o})},className:h,type:"button",children:"See the details"}),(0,p.jsx)("button",{onClick:function(){return r(c)},className:h,type:"button",children:"\xd7"})]})},x="App_productList__ZcthI",f="Section_section__Z2PLw",j=function(t){var e=t.children,n=t.title,o=void 0!==n&&n;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("section",{className:f,children:[o&&(0,p.jsx)("h2",{children:o}),e]})})},b=n(791),_="ProductForm_form__g-Bdi",g="ProductForm_formLabel__MpNhX",v="ProductForm_formInput__OBcIO",y="ProductForm_labelText__TbfmW",N=function(t){var e=t.handleAddProduct,n=(0,b.useState)(""),o=(0,s.Z)(n,2),c=o[0],r=o[1],i=(0,b.useState)(""),a=(0,s.Z)(i,2),l=a[0],u=a[1],d=(0,b.useState)(!1),h=(0,s.Z)(d,2),m=h[0],x=h[1],f=(0,b.useState)(""),j=(0,s.Z)(f,2),N=j[0],k=j[1],P=function(t){var e="checkbox"===t.target.type?t.target.checked:t.target.value;switch(t.target.name){case"title":r(e);break;case"price":u(e);break;case"hasDiscount":x(e);break;case"discount":k(e)}};return(0,p.jsxs)("form",{className:_,onSubmit:function(t){t.preventDefault();var n={title:c,price:Number.parseFloat(l),discount:m?Number.parseFloat(N):null};e(n),r(""),u(""),x(!1),k("")},children:["Spaghetti"===c&&(0,p.jsx)("h3",{children:"\ud83e\udd73 Congrats! You won the discount promocode 20% OFF - #W4SD89R1 \ud83e\udd20"}),(0,p.jsxs)("label",{className:g,children:[(0,p.jsx)("p",{className:y,children:"Title:"}),(0,p.jsx)("input",{className:v,type:"text",name:"title",onChange:P,value:c})]}),(0,p.jsxs)("label",{className:g,children:[(0,p.jsx)("p",{className:y,children:"Price:"}),(0,p.jsx)("input",{className:v,type:"text",name:"price",onChange:P,value:l})]}),(0,p.jsxs)("label",{className:g,children:[(0,p.jsx)("input",{type:"checkbox",name:"hasDiscount",onChange:P,checked:m}),"","Has discount?"]}),m?(0,p.jsxs)("label",{className:g,children:[(0,p.jsx)("p",{className:y,children:"Discount:"}),(0,p.jsx)("input",{className:v,type:"text",name:"discount",onChange:P,value:N})]}):null,(0,p.jsx)("button",{type:"submit",children:"Add"})]})},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},P=n(168),w=n(924).ZP.div(o||(o=(0,P.Z)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  ///OR///\n  /* width: 100vw;\n  height: 100vh; */\n  background-color: rgba(0, 0, 0, 0.5);\n  &:hover {\n    cursor: pointer;\n  }\n\n  .modal {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px;\n    max-width: 450px;\n    width: 100%;\n    min-height: 450px;\n\n    background: white;\n    border-radius: 10px;\n    cursor: auto;\n  }\n\n  .closeBtn {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n  }\n"]))),C=function(t){var e=t.modalData,n=t.closeModal,o=(0,b.useState)(1),c=(0,s.Z)(o,2),r=c[0],i=c[1];(0,b.useEffect)((function(){var t=function(t){"Escape"===t.code&&n()};return window.addEventListener("keydown",t),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",t),document.body.style.overflow="auto"}}),[n]),(0,b.useEffect)((function(){console.log("counter:"+r)}),[r]);return(0,p.jsx)(w,{onClick:function(t){t.target===t.currentTarget&&n()},children:(0,p.jsxs)("div",{className:"modal",children:[(0,p.jsx)("button",{onClick:n,type:"button",className:"closeBtn",children:"\xd7"}),(0,p.jsx)("h2",{children:"Product details"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h3",{children:["Title: ",e.title]}),(0,p.jsxs)("p",{children:["Price: ",e.price,"$"]}),(0,p.jsxs)("p",{children:["Discount: ",e.discount,"$"]}),(0,p.jsxs)("button",{onClick:function(){i((function(t){return t+1}))},children:["Add product: ",r]})]})]})})},S=n(420),Z=function(){var t=(0,S.I0)(),e=(0,b.useState)(0),n=(0,s.Z)(e,2),o=n[0],i=n[1],a=(0,b.useState)(!1),l=(0,s.Z)(a,2),u=l[0],d=l[1],h=(0,b.useState)(null),f=(0,s.Z)(h,2),_=f[0],g=f[1],v=(0,S.v9)((function(t){return t.productsStore.products}));(0,b.useEffect)((function(){var t=JSON.stringify(v);localStorage.setItem("products",t)}),[v]);var y=function(e){t({type:"products/deleteProduct",payload:e})},P=function(t){d(!0),g(t)},w=(0,c.Z)(v).sort((function(t,e){return e.discount-t.discount}));return(0,p.jsxs)("div",{children:[(0,p.jsxs)(j,{title:"Hello and counter",children:[(0,p.jsx)("h1",{children:"Hello"}),o>=5&&(0,p.jsx)("h3",{children:"\ud83c\udf89 Congrats! You won the discount promocode 30% OFF #DW13S4RE7 \ud83c\udf8a"}),(0,p.jsx)("button",{onClick:function(){0!==o?i((function(t){return t-1})):alert("Counter value is already decremented!")},children:"Decrement"}),(0,p.jsxs)("b",{children:["Counter Value: ",o]}),(0,p.jsx)("button",{onClick:function(){i((function(t){return t+1}))},children:"Increment"})]}),(0,p.jsx)(j,{title:"Product Form",children:(0,p.jsx)(N,{handleAddProduct:function(e){if(v.some((function(t){return t.title===e.title})))alert("Oops! Product with title '".concat(e.title,"' already exists"));else{var n=(0,r.Z)((0,r.Z)({},e),{},{id:k()});t({type:"products/addProduct",payload:n})}}})}),(0,p.jsx)(j,{title:"Product List",children:(0,p.jsx)("div",{className:x,children:w.map((function(t){return(0,p.jsx)(m,{title:t.title,id:t.id,price:t.price,discount:t.discount,handleDeleteProduct:y,openModal:P},t.id)}))})}),u&&(0,p.jsx)(C,{closeModal:function(){d(!1),g(null)},modalData:_})]})}}}]);
//# sourceMappingURL=949.5cc2e1bf.chunk.js.map