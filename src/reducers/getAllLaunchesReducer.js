const INITIAL_STATE = {
  launches: [],
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_LAUNCHES":
      return { ...state, launches: action.payload, isLoading: false };
    default:
      return state;
  }
};
