import { IState, ITicket } from '../../../../interfaces';

export const getTicketsList = (state: IState, handler: (ticket: ITicket) => number, payload: any) => {
  if (state.filterSelected === 'CHEAPEST') {
    return {
      ...state,
      tickets: [...state.tickets, ...payload.tickets].sort((prev, next) => (prev.price > next.price ? 1 : -1)),
      stop: payload.stop,
    };
  } else {
    return {
      ...state,
      tickets: [
        ...state.tickets,
        ...state.tickets.sort((previous, next) => (handler(previous) > handler(next) ? 1 : -1)),
      ],
      stop: payload.stop,
    };
  }
};
