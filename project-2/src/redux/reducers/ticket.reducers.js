const initialState = {
  tickets: [],
  error: null,
};

export default function ticketReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_ALL_TICKETS":
      return {
        ...state,
        tickets: payload,
      };
    case "GET_ALL_TICKETS_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
