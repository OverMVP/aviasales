export const sortCheapest = (state: any, payload: any) => {
  return {
    ...state,
    tickets: [...state.tickets.sort((prev: any, next: any) => (prev.price > next.price ? 1 : -1))],
    filterSelected: payload,
  }
}
