const INITIAL_STATE = {
  isVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "IS_VISIBLE":
      return { ...state, isVisible: !state.isVisible };
    case "SET_TOGGLER_FALSE":
      return { ...state, isVisible: false };
    default:
      return state;
  }
};
