export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
