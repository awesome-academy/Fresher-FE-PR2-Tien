export function getAllNews(news) {
  return {
    type: "GET_ALL_NEWS",
    payload: news,
  };
}

export function getAllNewsError(error) {
  return {
    type: "GET_ALL_NEWS_ERROR",
    payload: error,
  };
}
