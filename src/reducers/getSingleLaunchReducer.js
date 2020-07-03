const INITIAL_STATE = {
  singleFlight: null,
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SINGLE_LAUNCH":
      return { ...state, singleFlight: action.payload, isLoading: false };
    default:
      return state;
  }
};
