import * as actions from "../actions/user.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const userURL = `${baseURL}users`;

export function getUserData() {
  return (dispatch) => {
    axios
      .get(userURL)
      .then((response) => dispatch(actions.getAllUsers(response.data)))
      .catch((error) => {
        dispatch(actions.getAllUsersError(error));
      });
  };
}

export function registerUser(user) {
  return (dispatch) => {
    axios
      .post(userURL, { ...user })
      .then(() => {
        dispatch(actions.registerUserSuccess());
      })
      .catch((error) => {
        dispatch(actions.regiterUserError(error));
      });
  };
}
