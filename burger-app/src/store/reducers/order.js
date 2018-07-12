import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
} 

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {id: action.orderId});
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder) }
  );
}

const fetchOrderSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false}
  );
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT: return updateObject(state, {purchased: false});
    
    case actionTypes.FETCH_ORDERS_START:
    case actionTypes.PURCHASE_BURGER_START:
      return updateObject(state, {loading: true});
    
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action); 
    
    case actionTypes.FETCH_ORDERS_FAILED:
    case actionTypes.PURCHASE_BURGER_FAILED:
      return updateObject(state, {loading: false})
    
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action);
    default: return state;
  }
}

export default reducer;