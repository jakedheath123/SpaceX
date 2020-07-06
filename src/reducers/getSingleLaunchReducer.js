const INITIAL_STATE = {
  singleLaunch: null,
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SINGLE_LAUNCH":
      return { ...state, singleLaunch: action.payload, isLoading: false };
    default:
      return state;
  }
};
