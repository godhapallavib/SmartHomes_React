export const initialRegisterState = [];
export const RegisterTypes = {
    ADD_REGISTRATION: 'ADD_REGISTRATION',
    LOGIN:"LOGIN_USER",
    LOGOUT:"LOGOUT_USER",
    CLEAR: 'CLEAR',
  };
  
  export const registerReducer = (state= initialRegisterState, action) => {
    switch (action.type) {
      case RegisterTypes.ADD_REGISTRATION:
        console.log("register",action);
        return [...state, action.registration]; // Add a new registration to the array
      case RegisterTypes.CLEAR:
        return []; // Clear the array of registrations
      case RegisterTypes.LOGIN:
        return [...state, action.payload];
      case RegisterTypes.LOGOUT:
        localStorage.clear();
        return [];
      default:
        return state; // Return the current state for unknown action types
    }
  };
  