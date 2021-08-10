import axios from 'axios';

export const PRODUCTS = 'PRODUCTS';
export const CARTPRODUCTS = 'CARTPRODUCTS';
export const DELETE = 'DELETE';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const ADDTOCART = 'ADDTOCART';
export const DELETEFROMCART = 'DELETEFROMCART'; 

export function products(prods){
    return {
        type:PRODUCTS,
        payload:prods,
    }
}

export function cartProducts(prods){
    return{
        type:CARTPRODUCTS,
        payload:prods,
    }
}

export function deleteProduct(Id, id){
    axios.delete(`http://localhost:3500/data/${id}`)
    .then(response => {
        console.log("delete",response);
      })
      .catch(err => {
        console.log("error",err);
      })
    return {
        type:DELETE,
        payload:id
    }
}

export function addproduct(check, title, price, rating, description){
    console.log("idddd",check);
    const product={
        Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CKO5wcka_a9kK3CF_jzcTkpdPOSNq8MZ9g&usqp=CAU",
        Id:check,
        Title:title,
        Price:price,
        Rating:rating,
        Description:description,
    }
    axios.post("http://localhost:3500/data", product)
        .then((response) => {
            console.log("Post",response);
        })
        .catch(error => {
            console.log("error",error);
        }) 
    return{
        type:ADD,
        payload:product,
    }
}

export function editProduct(id, product){
    axios.put(`http://localhost:3500/data/${id}`, product)
      .then(response => {
        console.log("put",response);
      })
      .catch(err => {
        console.log("error",err);
      })
    return {
        type:EDIT,
        payload:product,
        id:id
    }
}

export function addToCart(product){
    axios.post("http://localhost:3500/cart", product)
    .then((response) => {
        console.log("Post",response);
    })
    .catch(error => {
        console.log("error",error);
    })
    return{
        type:ADDTOCART,
        payload:product
    }
}

export function deleteFromCart(id){
    axios.delete(`http://localhost:3500/cart/${id}`)
    .then(response => {
        console.log("delete",response);
      })
      .catch(err => {
        console.log("error",err);
      })
    return{
        type:DELETEFROMCART,
        payload:id
    }
}