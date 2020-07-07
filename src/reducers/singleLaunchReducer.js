const INITIAL_STATE = {
  data: null,
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SINGLE_LAUNCH":
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
