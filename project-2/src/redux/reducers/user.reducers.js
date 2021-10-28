const initialState = {
  users: [],
  isLoggedIn: false,
  error: null,
  status: "",
};

export default function userReducers(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        users: payload,
      };
    case "GET_ALL_USERS_ERROR":
      return {
        ...state,
        error: payload,
      };
    case "USER_AUTHORIZE":
      const profile = payload;

      sessionStorage.setItem("user", JSON.stringify(profile));

      return {
        ...state,
        isLoggedIn: true,
        status: "login success",
      };
    case "USER_AUTHORIZE_ERROR":
      return {
        ...state,
        status: "login fail",
      };
    case "USER_LOGOUT":
      sessionStorage.clear();

      return {
        ...state,
        isLoggedIn: false,
      };
    case "REGISTER_USER_ERROR":
      return {
        ...state,
        error: payload,
        status: "register fail",
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        status: "register success",
      };

    default:
      return state;
  }
}
