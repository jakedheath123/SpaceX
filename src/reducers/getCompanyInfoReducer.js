const INITIAL_STATE = {
  companyDetails: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COMPANY_INFO":
      return { ...state, companyDetails: action.payload };
    default:
      return state;
  }
};
