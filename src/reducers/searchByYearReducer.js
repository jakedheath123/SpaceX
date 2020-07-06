const INITIAL_STATE = {
  year: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_BY_YEAR":
      return { ...state, year: action.payload };
    default:
      return state;
  }
};
