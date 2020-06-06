const INITIAL_STATE = {
  singleFlight: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SINGLE_LAUNCH":
      return { ...state, singleFlight: action.payload };
    default:
      return state;
  }
};
