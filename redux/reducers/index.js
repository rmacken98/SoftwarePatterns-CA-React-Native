import { combineReducers } from  'redux';
import productReducer from './ProductReducer.js';
import cartReducer from './CartReducer';
import orderReducer from './OrderReducer';
export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
})