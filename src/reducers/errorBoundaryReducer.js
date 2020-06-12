const INITIAL_STATE = {
  hasErrored: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ERROR_BOUNDARY":
      return { ...state, hasErrored: true };
    default:
      return state;
  }
};
