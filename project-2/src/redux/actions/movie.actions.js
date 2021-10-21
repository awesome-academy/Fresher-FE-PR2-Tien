export function getAllMovies(movies) {
  return {
    type: "GET_ALL_MOVIES",
    payload: movies,
  };
}

export function getAllMoviesError(error) {
  return {
    type: "GET_ALL_MOVIES_ERROR",
    payload: error,
  };
}

export function getAllIncomingMovies(movies) {
  return {
    type: "GET_ALL_INCOMING_MOVIES",
    payload: movies,
  };
}

export function getAllIncomingMoviesError(error) {
  return {
    type: "GET_ALL_INCOMING_MOVIES_ERROR",
    payload: error,
  };
}

export function getAllShowingMovies(movies) {
  return {
    type: "GET_ALL_SHOWING_MOVIES",
    payload: movies,
  };
}

export function getAllShowingMoviesError(error) {
  return {
    type: "GET_ALL_SHOWING_MOVIES_ERROR",
    payload: error,
  };
}

export function getAllMoviesByName(movies) {
  return {
    type: "GET_ALL_MOVIES_BY_NAME",
    payload: movies,
  };
}

export function getAllMoviesByNameError(error) {
  return {
    type: "GET_ALL_MOVIES_BY_NAME_ERROR",
    payload: error,
  };
}

export function setMovies(movies) {
  return {
    type: "SET_MOVIES",
    payload: movies,
  };
}