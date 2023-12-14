export const getTickets = (payload: any) => {
  return {
    type: "GET_TICKETS",
    payload: payload,
  }
}
