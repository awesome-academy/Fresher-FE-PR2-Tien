import { combineReducers } from "redux";
import movieReducers from "./movie.reducers";
import theaterReducers from "./theater.reducers";
import newReducers from "./news.reducers";
import userReducers from "./user.reducers";

const rootReducer = combineReducers({
  movie: movieReducers,
  theater: theaterReducers,
  new: newReducers,
  user: userReducers,
});

export default rootReducer;
