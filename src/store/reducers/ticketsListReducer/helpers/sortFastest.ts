export const sortFastest = (state: any, payload: any, handler: any) => {
  return {
    ...state,
    tickets: [
      ...state.tickets.sort((previous: any, next: any) =>
        handler(previous) > handler(next) ? 1 : -1
      ),
    ],
    filterSelected: payload,
  }
}
