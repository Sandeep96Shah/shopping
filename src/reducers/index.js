import {PRODUCTS, DELETE, ADD, EDIT, ADDTOCART, DELETEFROMCART, CARTPRODUCTS} from '../actions';

const initialState={
    products:[],
    cart:[],
}

export default function shopping(state=initialState, action){
    switch(action.type){
        case PRODUCTS:
            return{
                ...state,
                products:action.payload,
            }
        case CARTPRODUCTS:
            return{
                ...state,
                cart:action.payload,
            }
        case DELETE:
            const items = state.products.filter((prod) => prod.Id !== action.payload);
            console.log('items',items)
            return {
                ...state,
                products:items,
            }
        case ADD:
            const lastIndex = state.products.length;
            console.log("last Index", lastIndex);
            return{
                ...state,
                products:[action.payload, ...state.products],
            }
        case EDIT:
            const index = state.products.findIndex(product => product.id === action.id);
            state.products[index]=action.payload;
            const latest_products = [...state.products];
            return{
                ...state,
                products:latest_products,
            }
        case ADDTOCART:
            return{
                ...state,
                cart:[action.payload, ...state.cart]
            }
        case DELETEFROMCART:
            const cart_products = state.cart.filter((product) => product.id !== action.payload);
            console.log("cart deleted", cart_products);
            return{
                ...state,
                cart:cart_products
            }
        default:
            return state;
    }
}