const INITIAL_STATE = {
  launchYear: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_BY_YEAR":
      return { ...state, launchYear: action.payload };
    default:
      return state;
  }
};
