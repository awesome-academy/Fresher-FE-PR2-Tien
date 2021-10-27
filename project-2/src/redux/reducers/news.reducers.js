const initialState = {
  news: [],
  error: null,
};

export default function newReducers(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_NEWS":
      return {
        ...state,
        news: payload,
      };
    case "GET_ALL_NEWS_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
