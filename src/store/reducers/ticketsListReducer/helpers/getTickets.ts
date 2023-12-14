export const getTicketsList = (state: any, handler: any, payload: any) => {
  if (state.filterSelected === "CHEAPEST") {
    return {
      ...state,
      tickets: [...state.tickets, ...payload.tickets].sort((prev: any, next: any) =>
        prev.price > next.price ? 1 : -1
      ),
      stop: payload.stop,
    }
  } else {
    return {
      ...state,
      tickets: [
        ...state.tickets,
        ...state.tickets.sort((previous: any, next: any) =>
          handler(previous) > handler(next) ? 1 : -1
        ),
      ],
      stop: payload.stop,
    }
  }
}
