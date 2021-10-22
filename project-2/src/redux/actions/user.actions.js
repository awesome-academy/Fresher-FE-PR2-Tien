export function getAllUsers(users) {
  return {
    type: "GET_ALL_USERS",
    payload: users,
  };
}

export function getAllUsersError(error) {
  return {
    type: "GET_ALL_USERS_ERROR",
    payload: error,
  };
}

export function userAuthorize(user) {
  return {
    type: "USER_AUTHORIZE",
    payload: user,
  };
}

export function userAuthorizeError() {
  return {
    type: "USER_AUTHORIZE_ERROR",
  };
}

export function userLogOut() {
  return {
    type: "USER_LOGOUT",
  };
}

export function regiterUserError(error) {
  return {
    type: "REGISTER_USER_ERROR",
    payload: error,
  };
}

export function registerUserSuccess() {
  return {
    type: "REGISTER_USER_SUCCESS",
  };
}
