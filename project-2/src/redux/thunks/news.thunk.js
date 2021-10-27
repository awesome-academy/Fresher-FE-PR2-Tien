import * as actions from "../actions/news.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const newsURL = `${baseURL}news`;

export function getNewsData() {
  return (dispatch) => {
    axios
      .get(newsURL)
      .then((response) => dispatch(actions.getAllNews(response.data)))
      .catch((error) => {
        dispatch(actions.getAllNewsError(error));
      });
  };
}