export const ACTIONS = {
  SET_CURRENT_USER: "SET_USER",
  GET_GITHUB_USER: "GITHUB_USER",
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ACTIONS.GET_GITHUB_USER:
      return {
        ...state,
        githubUser: action.payload,
      };

    default:
      return state;
  }
};
