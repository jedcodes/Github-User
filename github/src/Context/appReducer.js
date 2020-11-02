export const ACTIONS = {
  GET_GITHUB_USER: "GITHUB_USER",
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_GITHUB_USER:
      return {
        ...state,
        githubUser: action.payload,
      };

    default:
      return state;
  }
};
