(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{2:function(t,e,a){t.exports={navbar:"style_navbar__30HKv",details:"style_details__3j5ir",detail:"style_detail__27Fj0",logo:"style_logo__pya7Q",item:"style_item__JJ8dw",item_detail:"style_item_detail__j-XzL",poster:"style_poster__1daK6",description:"style_description__2pn3y",title:"style_title__1FMVr",price:"style_price__3PJkG",rating:"style_rating__z6F4b",item_description:"style_item_description__afJaL",desc:"style_desc__32r-U",btn:"style_btn__1Dqb2",btn_option:"style_btn_option__KsmC7",delete_btn:"style_delete_btn__1Xvtz",edit_btn:"style_edit_btn__Xa9Ll",product_outer_container:"style_product_outer_container__1LBs0",product_container:"style_product_container__1Nn_8",product_header:"style_product_header__1UAPr",product_form:"style_product_form__Dbdp_",sort:"style_sort__1Uztk",sort_h2:"style_sort_h2__P-53x",bg_red:"style_bg_red__r3Oo5",bg_blue:"style_bg_blue__2-RSV",show:"style_show__28SD3",dontshow:"style_dontshow__P8DUM",create_assignment:"style_create_assignment__X1t1M",header:"style_header__2OJoj",form_outer:"style_form_outer__kaLAd",form_container:"style_form_container__1uxwq",label_field:"style_label_field__XHIXY",input_field:"style_input_field__2Q29w",textarea_field:"style_textarea_field__2Zl7y",submit_container:"style_submit_container__1PqtE",container_height:"style_container_height__1wjHz",container_scroll:"style_container_scroll__13uoz",area:"style_area__3a_xy",cancel:"style_cancel__20vXj",save:"style_save__5k9nn"}},33:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),i=(a(33),a(13)),o=a(9),l=a(10),d=a(12),h=a(11),u=a(5),p=a.n(u),_=a(19),j=(a(52),a(2)),b=a.n(j),f=a(1),m=function(t){var e=t.count,a=t.handleDisplay,n=t.handleCart;return Object(f.jsxs)("div",{className:b.a.navbar,children:[Object(f.jsxs)("div",{className:b.a.details,children:[Object(f.jsx)("div",{className:b.a.detail,children:Object(f.jsx)("p",{onClick:function(){return a(!1)},style:{cursor:"pointer"},children:"eCommerce"})}),Object(f.jsx)("div",{className:b.a.detail,children:Object(f.jsxs)("p",{onClick:function(){return n()},style:{cursor:"pointer"},children:["Cart ",e]})}),Object(f.jsx)("div",{className:b.a.detail,children:Object(f.jsx)("p",{onClick:function(){return a(!0)},style:{cursor:"pointer"},children:"Add A Product"})})]}),Object(f.jsx)("div",{className:b.a.logo})]})},O="PRODUCTS",x="CARTPRODUCTS",y="DELETE",g="ADD",v="EDIT",C="ADDTOCART",N="DELETEFROMCART";var P=a(15),D=a(14),S=a(7),T=a.n(S),k=function(t){var e=t.Poster,a=t.Title,n=t.Price,c=t.Rating,s=t.Description,r=t.handleDetail;return Object(f.jsxs)("div",{className:T.a.detail_container,children:[Object(f.jsx)("h2",{className:T.a.detail_container_h2,onClick:function(){return r(!1)},children:"Cancel"}),Object(f.jsxs)("div",{className:T.a.poster,children:[Object(f.jsx)("div",{className:T.a.posterImage,children:Object(f.jsx)("img",{src:e,alt:"Poster"})}),Object(f.jsxs)("div",{className:T.a.posterTitle,children:[Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:a})}),Object(f.jsx)("div",{children:Object(f.jsxs)("h3",{children:["Price : ",n]})}),Object(f.jsx)("div",{children:Object(f.jsxs)("h4",{children:["Rating : ",c]})})]})]}),Object(f.jsx)("div",{className:T.a.description,children:Object(f.jsx)("h4",{children:s})})]})},A=a(6),I=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this)).handleEdit=function(){n.setState({edit:!0}),console.log("editting")},n.handleChange=function(t){var e=t.target.name;n.setState(Object(D.a)({},e,t.target.value))},n.handleCancel=function(){n.setState({edit:!1})},n.handleSave=function(t,e){n.setState({edit:!1}),n.props.handleSave(t,e)},n.handleCartProduct=function(t,e){e?n.props.handleAddToCart(t):n.props.handleDeleteCartProduct(n.props.id),n.setState({cart:e})},n.handleDetail=function(t){n.setState({detail:t})},n.state={edit:!1,description:t.Description,title:t.Title,rating:t.Rating,price:t.Price,poster:t.Poster,Id:t.Id,detail:!1,cart:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.Id,n=e.poster,c=e.price,s=e.rating,r=e.description,i={Id:a,Title:e.title,Price:c,Rating:s,Description:r,Poster:n},o=this.props,l=o.Poster,d=o.Title,h=o.Price,u=o.Rating,p=o.Description,_=o.handleDelete,j=o.handleDeleteCartProduct,m={Id:this.props.Id,id:this.props.id,Title:d,Price:h,Rating:u,Poster:l,Description:p};return Object(f.jsxs)("div",{className:b.a.item,children:[Object(f.jsxs)("div",{className:b.a.item_detail,children:[Object(f.jsxs)("div",{className:b.a.poster,children:[Object(f.jsx)("img",{src:l,alt:"poster",onClick:function(){return t.handleDetail(!0)}}),this.state.detail&&Object(f.jsx)(k,{Poster:l,Title:d,Rating:u,Price:h,Description:p,handleDetail:this.handleDetail})]}),Object(f.jsxs)("div",{className:b.a.description,children:[Object(f.jsxs)("div",{className:b.a.title,children:[this.state.edit&&Object(f.jsx)("input",{className:b.a.area,type:"text",name:"title",defaultValue:d,onChange:function(e){return t.handleChange(e)}}),!this.state.edit&&Object(f.jsx)("h2",{children:d})]}),Object(f.jsxs)("div",{className:b.a.price,children:[this.state.edit&&Object(f.jsx)("input",{className:b.a.area,type:"number",name:"price",defaultValue:h,onChange:function(e){return t.handleChange(e)}}),!this.state.edit&&Object(f.jsx)("h3",{children:h})]}),Object(f.jsxs)("div",{className:b.a.rating,children:[this.state.edit&&Object(f.jsx)("input",{className:b.a.area,type:"text",name:"rating",defaultValue:u,onChange:function(e){return t.handleChange(e)}}),!this.state.edit&&Object(f.jsxs)("h4",{children:["Rating : ",u,"/10"]})]})]})]}),Object(f.jsxs)("div",{className:b.a.item_description,children:[Object(f.jsxs)("div",{className:b.a.desc,children:[this.state.edit&&Object(f.jsx)("textarea",{className:b.a.area,name:"description",defaultValue:p,onChange:function(e){return t.handleChange(e)}}),!this.state.edit&&Object(f.jsx)("p",{children:p})]}),Object(f.jsxs)("div",{className:b.a.btn,children:[!this.state.edit&&this.props.cart&&Object(f.jsx)("div",{className:b.a.delete_btn,onClick:function(){return j(t.props.id)},children:Object(f.jsx)(A.d,{color:"red",fontSize:"30px"})}),Object(f.jsxs)("div",{className:b.a.btn_option,children:[!this.state.edit&&!this.props.cart&&Object(f.jsx)("div",{className:b.a.delete_btn,onClick:function(){return _(t.props.Id,t.props.id)},children:Object(f.jsx)(A.d,{color:"red",fontSize:"30px"})}),!this.state.edit&&!this.props.cart&&Object(f.jsx)("div",{className:b.a.edit_btn,onClick:function(){return t.handleEdit(t.props.Id)},children:Object(f.jsx)(A.b,{color:"green",fontSize:"30px"})})]}),Object(f.jsx)("div",{children:!this.state.edit&&!this.props.cart&&Object(f.jsx)("div",{className:b.a.edit_btn,onClick:function(){return t.handleCartProduct(m,!t.state.cart)},children:Object(f.jsx)(A.a,{color:this.state.cart?"red":"blue",fontSize:"30px"})})}),this.state.edit&&Object(f.jsx)("div",{className:b.a.cancel,onClick:function(){return t.handleCancel()},children:"Cancel"}),this.state.edit&&Object(f.jsx)("div",{className:b.a.save,onClick:function(){return t.handleSave(t.props.id,i)},children:"Save"})]})]})]})}}]),a}(n.Component),R=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).handleItem=function(e,a){"title"===e&&t.setState({title:a.target.value},console.log(t.state.title)),"price"===e&&t.setState({price:a.target.value}),"rating"===e&&t.setState({rating:a.target.value}),"description"===e&&t.setState({description:a.target.value})},t.handleSubmit=function(){var e=t.state,a=e.title,n=e.price,c=e.rating,s=e.description;t.props.handleAddProduct(a,n,c,s)},t.state={title:"",price:0,rating:"",description:""},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{className:b.a.create_assignment,children:[Object(f.jsx)("div",{className:b.a.header,children:Object(f.jsx)("h1",{children:"Add A Product"})}),Object(f.jsx)("div",{className:b.a.form_outer,children:Object(f.jsxs)("form",{className:b.a.form_container,action:"../../db.json",method:"POST",children:[Object(f.jsx)("label",{htmlFor:"title",className:b.a.label_field,children:"Name"}),Object(f.jsx)("input",{type:"text",name:"title",className:b.a.input_field,onChange:function(e){return t.handleItem("title",e)}}),Object(f.jsx)("label",{htmlFor:"description",className:b.a.label_field,children:"Description"}),Object(f.jsx)("textarea",{rows:"3",name:"description",className:b.a.textarea_field,onChange:function(e){return t.handleItem("description",e)}}),Object(f.jsx)("label",{htmlFor:"price",className:b.a.label_field,children:"Price"}),Object(f.jsx)("input",{type:"number",name:"price",className:b.a.input_field,onChange:function(e){return t.handleItem("price",e)}}),Object(f.jsx)("label",{htmlFor:"rating",className:b.a.label_field,children:"Rating"}),Object(f.jsx)("input",{type:"number",name:"rating",className:b.a.input_field,onChange:function(e){return t.handleItem("rating",e)}}),Object(f.jsx)("div",{className:b.a.submit_container,children:Object(f.jsx)("input",{type:"submit",value:"Add",className:b.a.input_field,onClick:function(){return t.handleSubmit()}})})]})})]})}}]),a}(n.Component),w=function(t){var e=t.sort,a=t.display,n=t.handleSort;return Object(f.jsxs)("div",{className:"".concat(b.a.sort," ").concat(a?b.a.dontshow:b.a.show),children:[Object(f.jsx)("h2",{onClick:function(){return n(!0)},className:"".concat(b.a.sort_h2," ").concat(e?b.a.bg_red:b.a.bg_blue," "),children:"Sort"}),Object(f.jsx)("h2",{onClick:function(){return n(!1)},className:"".concat(e?b.a.show:b.a.dontshow),style:{cursor:"pointer"},children:Object(f.jsx)(A.c,{color:"red",fontSize:"30px"})})]})};_.a.configure();var z=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).handleDelete=function(e,a){console.log("delete",a),t.props.dispatch(function(t,e){return p.a.delete("http://localhost:3500/data/".concat(e)).then((function(t){console.log("delete",t)})).catch((function(t){console.log("error",t)})),{type:y,payload:e}}(0,a)),t.notify("Product Deleted Successfully!")},t.handleProductsCount=function(){return t.props.cart.length},t.handleAddProduct=function(e,a,n,c){var s=t.props.products.length+1;t.props.dispatch(function(t,e,a,n,c){console.log("idddd",t);var s={Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CKO5wcka_a9kK3CF_jzcTkpdPOSNq8MZ9g&usqp=CAU",Id:t,Title:e,Price:a,Rating:n,Description:c};return p.a.post("http://localhost:3500/data",s).then((function(t){console.log("Post",t)})).catch((function(t){console.log("error",t)})),{type:g,payload:s}}(s,e,a,n,c)),t.handleDisplay(!1),t.notify("Product Added Successfully!")},t.handleDisplay=function(e){t.setState({display:e,cart:!1})},t.notify=function(t){_.a.info(t,{autoClose:3e3})},t.handleSort=function(e){var a=t.props.products,n=Object(i.a)(a).sort((function(t,e){return t.Price-e.Price}));t.setState({sort:e,items:n}),t.state.sort||t.notify("Sorted Products")},t.handleSave=function(e,a){t.props.dispatch(function(t,e){return p.a.put("http://localhost:3500/data/".concat(t),e).then((function(t){console.log("put",t)})).catch((function(t){console.log("error",t)})),{type:v,payload:e,id:t}}(e,a))},t.handleAddToCart=function(e){t.setState({count:t.state.count+1}),t.props.dispatch(function(t){return p.a.post("http://localhost:3500/cart",t).then((function(t){console.log("Post",t)})).catch((function(t){console.log("error",t)})),{type:C,payload:t}}(e))},t.handleCart=function(){t.setState({cart:!0})},t.handleDeleteCartProduct=function(e){t.setState({count:t.state.count-1}),t.props.dispatch(function(t){return p.a.delete("http://localhost:3500/cart/".concat(t)).then((function(t){console.log("delete",t)})).catch((function(t){console.log("error",t)})),{type:N,payload:t}}(e))},t.state={display:!1,sort:!1,cart:!1,items:[],count:0},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.notify("Welcome To eCommerce!"),p.a.get("http://localhost:3500/data").then((function(e){var a;t.props.dispatch((a=e.data,{type:O,payload:a}))})).catch((function(t){console.log("error",t)})),p.a.get("http://localhost:3500/cart").then((function(e){var a;console.log("cart response",e),t.props.dispatch((a=e.data,{type:x,payload:a}))})).catch((function(t){console.log("error from cart",t)}))}},{key:"render",value:function(){var t=this,e=this.props,a=e.products,n=e.cart,c=this.state,s=c.sort,r=c.display;console.log("cart number",this.handleProductsCount());var i=this.state.sort?this.state.items:this.state.cart?n:a;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(m,{count:this.handleProductsCount(),handleDisplay:this.handleDisplay,handleCart:this.handleCart}),Object(f.jsx)(w,{sort:s,display:r,handleSort:this.handleSort}),0===i.length?Object(f.jsx)("h2",{style:{marginLeft:"100px",marginTop:"30px"},children:"No Product is Available!"}):!this.state.display&&i.map((function(e,a){return Object(f.jsx)(I,{Id:e.Id,id:e.id,Poster:e.Poster,Title:e.Title,Price:e.Price,Rating:e.Rating,Description:e.Description,handleDelete:t.handleDelete,handleSave:t.handleSave,handleAddToCart:t.handleAddToCart,handleCart:t.handleCart,cart:t.state.cart,handleDeleteCartProduct:t.handleDeleteCartProduct},a)})),this.state.display&&Object(f.jsx)(R,{handleAddProduct:this.handleAddProduct})]})}}]),a}(c.a.Component);var E=Object(P.b)((function(t){return{products:t.products,cart:t.cart}}))(z),F=a(28),L=a(3),J={products:[],cart:[]};var M=Object(F.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(L.a)(Object(L.a)({},t),{},{products:e.payload});case x:return Object(L.a)(Object(L.a)({},t),{},{cart:e.payload});case y:var a=t.products.filter((function(t){return t.Id!==e.payload}));return console.log("items",a),Object(L.a)(Object(L.a)({},t),{},{products:a});case g:return Object(L.a)(Object(L.a)({},t),{},{products:[e.payload].concat(Object(i.a)(t.products))});case v:var n=t.products.findIndex((function(t){return t.id===e.id}));t.products[n]=e.payload;var c=Object(i.a)(t.products);return Object(L.a)(Object(L.a)({},t),{},{products:c});case C:return Object(L.a)(Object(L.a)({},t),{},{cart:[e.payload].concat(Object(i.a)(t.cart))});case N:var s=t.cart.filter((function(t){return t.id!==e.payload}));return console.log("cart deleted",s),Object(L.a)(Object(L.a)({},t),{},{cart:s});default:return t}}));r.a.render(Object(f.jsx)(P.a,{store:M,children:Object(f.jsx)(E,{})}),document.getElementById("root"))},7:function(t,e,a){t.exports={detail_container:"details_detail_container__2JELJ",detail_container_h2:"details_detail_container_h2__LmnW7",poster:"details_poster__37NHc",posterImage:"details_posterImage__122Go",posterTitle:"details_posterTitle__2ZDFP",description:"details_description__1PYdM"}}},[[58,1,2]]]);
//# sourceMappingURL=main.46f11cb1.chunk.js.map