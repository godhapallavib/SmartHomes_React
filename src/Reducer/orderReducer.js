// orderReducer.js

// Define the initial state for the order
// const initialOrderState = [{
//     cart: [],
//     name: '',
//     creditCardNumber: '',
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     orderType: 'Home delivery',
//     instorePickup: '--------------------',
//   }];

const initialOrderState=[];

export const createOrder = (orderData) => ({
  type: OrderTypes.CREATE_ORDER,
  ...orderData,
});


export const OrderTypes = {
  CREATE_ORDER: 'CREATE_ORDER',
  UPDATE_ORDER: 'UPDATE_ORDER',
  DELETE_ORDER: 'DELETE_ORDER',
  VIEW_ORDER: 'VIEW_ORDER',
  CANCEL_ORDER: 'CANCEL_ORDER',
};

// Action creators for updating and deleting orders
export const updateOrder = (orderId, updatedOrderData) => ({
  type: OrderTypes.UPDATE_ORDER,
  orderId,
  ...updatedOrderData,
});

export const viewOrder = (order) => ({
  type: OrderTypes.VIEW_ORDER,
  ...order,
});

export const cancelOrder = (orderId) => ({
  type: OrderTypes.CANCEL_ORDER,
  orderId,
});

export const deleteOrder = (orderId) => ({
  type: OrderTypes.DELETE_ORDER,
  orderId,
});
export const viewOrderWithId = (orders, orderId) => {
  // Return the order with the specified orderId
  return orders.filter((order) => {
    console.log(order.orderId, " :Test: ", orderId);
    return order.orderId === orderId;
  });
};


export const generateOrderId = (orders) => {
  if (orders.length === 0) {
    // If there are no existing orders, start with order ID 1
    return 1;
  } else {
    // Find the maximum order ID and increment by 1
    const maxOrderId = Math.max(...orders.map((order) => order.orderId));
    return maxOrderId + 1;
  }
};

export const getMaxOrderId =(orders)=>{ return Math.max(...orders.map((order) => order.orderId));
};

// Define the order reducer
const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case OrderTypes.CREATE_ORDER:
      return [
        ...state,
        {
          orderId: action.orderId,
          cart: action.cart,
          name: action.name,
          creditCardNumber: action.creditCardNumber,
          street: action.street,
          city: action.city,
          state: action.states,
          zipCode: action.zipCode,
          orderType: action.orderType,
          instorePickup: action.instorePickup,
        }
      ];

      case OrderTypes.UPDATE_ORDER:
        console.log("update Order data",action);
        
return state.map((order) =>
  order.orderId === action.orderId
    ? {
        ...order,
        name: action.name,
        street: action.street ,
        city: action.city,
        state: action.states,
        zipCode: action.zipCode,
        orderType: action.orderType,
        instorePickup: action.instorePickup,
        // Add other properties you want to update here
      }
    : order
);

    // case OrderTypes.UPDATE_ORDER:
    //   return state.map((order) =>
    //     order.orderId === action.orderId
    //       ? { ...order, ...action.updatedOrderData }
    //       : order
    //   );

    case OrderTypes.DELETE_ORDER:
      return state.filter((order) => order.orderId !== action.orderId);

    case OrderTypes.CANCEL_ORDER:
      // Remove the order with the specified orderId
      return state.filter((order) => order.orderId !== action.orderId);

    default:
      return state;
  }
};

export default orderReducer;
