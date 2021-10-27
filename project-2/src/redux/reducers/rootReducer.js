import { combineReducers } from "redux";
import movieReducers from "./movie.reducers";
import theaterReducers from "./theater.reducers";
import newReducers from "./news.reducers";

const rootReducer = combineReducers({
  movie: movieReducers,
  theater: theaterReducers,
  new: newReducers,
});

export default rootReducer;
