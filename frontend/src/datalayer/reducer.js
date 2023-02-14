export const initialState = {
  clicked: false,
  loggedIn: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
    case "CLICK":
      return {
        ...state,
        clicked: action.clicked,
      };
  }
};
export default reducer;
