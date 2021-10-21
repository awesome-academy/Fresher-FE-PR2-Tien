import { combineReducers } from "redux";
import movieReducers from "./movie.reducers";

const rootReducer = combineReducers({
  movie: movieReducers,
});

export default rootReducer;
