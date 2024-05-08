

export const initialCartState = []; // Define your initial state

export const CartTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  CLEAR: 'CLEAR',
};

export const findItem = (cart, id) => cart.find((item) => item.id === id);

export const getTotalCartItems = (cart) => {
  let totalItems = 0;

  for (const cartItem of cart) {
    totalItems += cartItem.quantity;
  }

  return totalItems;
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CartTypes.ADD:
      if (findItem(state, action.id)) {
        console.log("xyz", action);
        console.log("xyz", state)
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...state,
        { id: action.id, quantity: 1 },
      ];
    case CartTypes.REMOVE:
      return state.filter((item) => item.id !== action.id);
      case CartTypes.CLEAR:
        return []; // Return an empty array to clear the cart
    default:
      return state; // Return the current state for unknown action types
  }
};

  