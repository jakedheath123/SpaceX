export default (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_SPORTS":
      return action.payload;
    default:
      return state;
  }
};
