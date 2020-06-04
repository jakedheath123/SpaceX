export default (state = [], action) => {
  switch (action.type) {
    case "GET_LAUNCHES":
      return action.payload;
    default:
      return state;
  }
};
