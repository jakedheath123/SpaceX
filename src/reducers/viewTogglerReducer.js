const INITIAL_STATE = {
  isVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "IS_VISIBLE":
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};
