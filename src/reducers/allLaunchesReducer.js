const INITIAL_STATE = {
  data: [],
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_LAUNCHES":
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
