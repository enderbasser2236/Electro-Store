(this["webpackJsonpdesafio-1"]=this["webpackJsonpdesafio-1"]||[]).push([[0],{32:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var r=c(5),a=c.n(r),i=c(38),n=c.n(i),o=(c(45),c(40)),s=(c(46),c(18)),d=c(12),l=c(3),j=Object(r.createContext)(),m=function(e){var t=e.children,c=Object(r.useState)([]),a=Object(d.a)(c,2),i=a[0],n=a[1],o=function(e){var t=i.map((function(e){return e.idProd})).indexOf(e);return i[t].priceProd*i[t].qtyProd};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j.Provider,{value:{carlist:i,addToCart:function(e,t){var c=i.find((function(t){return t.idProd===e.id}));void 0===c?n([].concat(Object(s.a)(i),[{idProd:e.id,imgProd:e.img,nameProd:e.descripcion,brandProd:e.marca,modelProd:e.modelo,priceProd:e.precio,qtyProd:t}])):(alert("el producto se encuentra en el carrito se sumara a la cantidad actual"),c.qtyProd+=t,n(Object(s.a)(i)))},clearCart:function(){n([])},deleteItem:function(e){var t=i.filter((function(t){return e!==t.idProd}));n(t)},totalItemsCart:function(){return i.map((function(e){return e.qtyProd})).reduce((function(e,t){return e+t}),0)},calcTotalPerItem:o,calcTotal:function(){return i.map((function(e){return o(e.idProd)})).reduce((function(e,t){return e+t}))}},children:t})})},b=function(){var e=Object(r.useContext)(j);return Object(l.jsxs)("div",{className:"shoppingCart",children:[Object(l.jsx)(o.a,{}),Object(l.jsx)("span",{children:e.totalItemsCart()})]})},u=(c(48),c(15));var h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-theme",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(u.b,{to:"/",className:"logo",children:Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:"Electro-Store"})})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse test",id:"navbarNavDropdown",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#home",children:"Registrate"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#home",children:"Inicia Sesion"})}),Object(l.jsxs)("li",{className:"nav-item dropdown",children:[Object(l.jsx)("a",{className:"nav-link dropdown-toggle",href:"#home",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categorias"}),Object(l.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:"/category/1",className:"links",children:Object(l.jsx)("p",{className:"dropdown-item",href:"#home",children:"Procesadores"})})}),Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:"/category/2",className:"links",children:Object(l.jsx)("p",{className:"dropdown-item",href:"#home",children:"Tarjetas Madre"})})}),Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:"/category/3",className:"links",children:Object(l.jsx)("p",{className:"dropdown-item",href:"#home",children:"Memorias"})})}),Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:"/category/4",className:"links",children:Object(l.jsx)("p",{className:"dropdown-item",href:"#home",children:"Discos Duros"})})})]})]})]}),Object(l.jsx)(u.b,{to:"/cart",children:Object(l.jsx)(b,{})})]})]})})})},p=(c(33),c(49),c(71),c(72),function(e){var t=e.prod;return Object(l.jsx)("div",{className:"col-sm-4",style:{padding:"20px"},children:Object(l.jsxs)("div",{className:"card container",style:{width:"20rem"},children:[Object(l.jsx)("img",{src:t.img,className:"card-img-top image",alt:t.descripcion}),Object(l.jsx)(u.b,{to:"/item/".concat(t.id),children:Object(l.jsx)("div",{className:"overlay",children:"Detalles."})}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("h5",{className:"card-title",children:t.descripcion})})]})})}),g=function(e){var t=e.itemRender,c=t.map((function(e){return Object(l.jsx)(p,{id:t.id,prod:e},e.id)}));return c.length>0?Object(l.jsx)("ol",{className:"row item",children:c}):Object(l.jsx)("h1",{children:"Cargando..."})},O=c(9),x=function(e,t){return new Promise((function(c,r){setTimeout((function(){c(e)}),t)}))},f=[{id:1,categoria:"procesadores",idCategoria:"1",marca:"AMD",modelo:"Ryzen 7",descripcion:"procesador AMD ryzen 7",precio:384,img:"https://www.tranza.com/content/images/thumbs/0011949_amd-ryzen-7-5700g-video-radeon-am4.png"},{id:2,categoria:"procesadores",idCategoria:"1",marca:"AMD",modelo:"Ryzen 9",descripcion:"procesador AMD ryzen 9",precio:524,img:"https://www.tranza.com/content/images/thumbs/0008015_amd-ryzen-9-5900x-am4.jpeg"},{id:3,categoria:"procesadores",idCategoria:"1",marca:"Intel",modelo:"i3",descripcion:"procesador intel i3",precio:175,img:"https://thotcomputacion.com.uy/wp-content/uploads/2020/07/procesador-intel-core-i3-10ma-generacion-diginet-D_NQ_NP_843853-MLU42770096830_072020-F.jpg"},{id:4,categoria:"procesadores",idCategoria:"1",marca:"Intel",modelo:"i5",descripcion:"procesador intel i5",precio:259,img:"https://m.media-amazon.com/images/I/61xAzEoCuhL._AC_SX466_.jpg"},{id:5,categoria:"procesadores",idCategoria:"1",marca:"Intel",modelo:"i7",descripcion:"procesador intel i7",precio:466,img:"https://media.ldlc.com/r1600/ld/products/00/05/66/86/LD0005668676_2.jpg"},{id:6,categoria:"motherboards",idCategoria:"2",marca:"GygaByte",modelo:"Z390",descripcion:"Tarjeta Madre AsRock Z390",precio:250,img:"https://m.media-amazon.com/images/I/71hmU4YEp+L._AC_SL1500_.jpg"},{id:7,categoria:"motherboards",idCategoria:"2",marca:"asrock",modelo:"Z590",descripcion:"Tarjeta Madre AsRock Z590",precio:640,img:"https://m.media-amazon.com/images/I/81YrnNaeB2L._AC_SL1500_.jpg"},{id:8,categoria:"memorias",idCategoria:"3",marca:"Corsair",modelo:"Vengeance RGB PRO 32GB",descripcion:"Memoria Ram Vengeance RGB Pro 32GB",precio:150,img:"https://m.media-amazon.com/images/I/61zOvMQfqkS._AC_SL1303_.jpg"},{id:9,categoria:"memorias",idCategoria:"3",marca:"KingStone",modelo:"Fury Beast 32gb",descripcion:"Memoria Ram Kingstone Fury Beast 32GB",precio:145,img:"https://m.media-amazon.com/images/I/61oEJKUZd+L._AC_SL1200_.jpg"},{id:10,categoria:"ssd",idCategoria:"4",marca:"SanDisk",modelo:"1 TB Extreme Portable",descripcion:"External Solid State Drive SanDisk 1TB Extreme Portable",precio:135,img:"https://m.media-amazon.com/images/I/81gHMgXQybL._AC_SL1500_.jpg"},{id:11,categoria:"ssd",idCategoria:"4",marca:"KingStone",modelo:"Digital SA1000M M.2 240GB",descripcion:"Solid State Drive KingStone M2 Digital SA1000M 240GB",precio:100,img:"https://m.media-amazon.com/images/I/71LCFo1QB7L._AC_SL1500_.jpg"},{id:12,categoria:"ssd",idCategoria:"4",marca:"KingStone",modelo:"KC600 512GB",descripcion:"Solid State Drive KingStone KC600 2.5 512GB",precio:110,img:"https://m.media-amazon.com/images/I/71yn899Q1JL._AC_SL1500_.jpg"}],v=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(O.g)().idCategory;return Object(r.useEffect)((function(){x(f.filter((function(e){return void 0===i?e:e.idCategoria===i}))).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[i]),Object(l.jsx)(g,{itemRender:c})},N=(c(73),c(74),function(e){var t=e.stock,c=e.initial,a=e.onAdd,i=Object(r.useState)(c),n=Object(d.a)(i,2),o=n[0],s=n[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"ItemCounter",children:[Object(l.jsx)("h4",{children:o}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){o>0&&s(o-1)},children:"-1"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){s(c)},children:"Reset"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){o<t&&s(o+1)},children:"+1"}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return a(o)},children:"Agregar al Carrito"})})]})})}),C=function(e){var t=e.item,c=Object(r.useState)(0),a=Object(d.a)(c,2),i=a[0],n=a[1],o=Object(r.useContext)(j);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"itemDetailSizeLeft",children:Object(l.jsx)("img",{src:t.img,alt:t.descripcion})}),Object(l.jsxs)("div",{className:"itemDetailSizeRight",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h5",{children:t.descripcion})}),Object(l.jsxs)("ul",{className:"list-group-flush",children:[Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsxs)("strong",{children:["Marca: ",t.marca]})}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsxs)("strong",{children:["Modelo: ",t.modelo]})}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsxs)("strong",{children:["Precio: ",t.precio]})}),0===i?Object(l.jsx)(N,{onAdd:function(e){alert("agregando "+e+" items al carrito"),n(e),o.addToCart(t,e)},initial:0,stock:10}):Object(l.jsx)(u.b,{to:"/cart",children:Object(l.jsx)("button",{className:"btn btn-danger checkout",children:"Finalizar Compra"})})]})]})]})},y=function(e){var t=e.itemRender;return Object(l.jsx)(C,{item:t})},P=function(){var e=Object(r.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(O.g)().idItem;return Object(r.useEffect)((function(){x(f.find((function(e){return e.id===parseInt(i)}))).then((function(e){a(e)})).catch((function(e){return console.log(e)}))})),Object(l.jsx)(y,{itemRender:c})},S=(c(32),function(e){var t=e.items,c=Object(r.useContext)(j);return Object(l.jsx)("div",{className:"cartList",children:Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{className:"cartImg",src:t.imgProd,alt:t.nameProd}),Object(l.jsx)("div",{className:"prodName",children:Object(l.jsx)("p",{children:t.nameProd})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"cantidad: "}),t.qtyProd]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Precio Unitario : "}),t.priceProd]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Total: "}),c.calcTotalPerItem(t.idProd)]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){c.deleteItem(t.idProd)},children:"X"})})]})})}),k=c(0),w=c.n(k),_=c(4),I=c(24),D=c(39),A=Object(D.a)({apiKey:"AIzaSyBpcftAVBQNfRWw7yvMa960thw2gW6TDgc",authDomain:"electro-store-57747.firebaseapp.com",projectId:"electro-store-57747",storageBucket:"electro-store-57747.appspot.com",messagingSenderId:"398142137589",appId:"1:398142137589:web:37000d974703244c4d51bc"}),M=Object(I.c)(A),z=function(){var e=Object(r.useContext)(j),t=e.calcTotal();return Object(l.jsxs)("div",{className:"cartOrder",children:[Object(l.jsx)("h3",{children:"Resumen de su Orden"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Subtotal:"}),Object(l.jsx)("br",{}),e.calcTotal()]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Shipping: "}),"FREE!!"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"TOTAL: "}),Object(l.jsx)("br",{}),e.calcTotal()]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn btn-warning checkOut",onClick:function(){var c={buyer:{name:"peter parker",email:"yourfriendlyneighbordhood@gmail.com",telefono:"123456789"},items:e.carlist.map((function(e){return{id:e.idProd,title:e.nameProd,price:e.priceProd,qty:e.qtyProd}})),total:t},r=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(I.b)(Object(I.a)(M,"orders")),e.next=3,Object(I.d)(t,c);case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r().then((function(e){return alert("su orden de compra es: "+e.id)})).catch((function(e){return console.log(e)})),e.clearCart()},children:"CheckOut"})})]})},L=function(){var e=Object(r.useContext)(j),t=e.carlist,c=t.map((function(e){return Object(l.jsx)(S,{items:e},e.idProd)}));return t.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"cartDiv",children:Object(l.jsx)("ol",{children:c})}),Object(l.jsx)(z,{}),Object(l.jsx)("div",{className:"cartClear",children:Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){e.clearCart()},children:"Vaciar Carrito"})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"emptyCart",children:"Su carrito esta vacio"}),Object(l.jsx)("div",{className:"emptyCartButton",children:Object(l.jsx)(u.b,{to:"/",children:Object(l.jsx)("button",{className:" btn btn-outline-primary",children:"Regresar al inicio"})})})]})};var B=function(){return Object(l.jsx)(m,{children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{path:"/",element:Object(l.jsx)(v,{})}),Object(l.jsx)(O.a,{path:"/category/:idCategory",element:Object(l.jsx)(v,{})}),Object(l.jsx)(O.a,{path:"/item/:idItem",element:Object(l.jsx)(P,{})}),Object(l.jsx)(O.a,{path:"/cart",element:Object(l.jsx)(L,{})})]})]})})},R=document.getElementById("root");n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),R)}},[[77,1,2]]]);
//# sourceMappingURL=main.e784db1f.chunk.js.map