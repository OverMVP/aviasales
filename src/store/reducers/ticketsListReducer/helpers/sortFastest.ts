import { IState, ITicket } from '../../../../interfaces';

export const sortFastest = (state: IState, payload: any, handler: (ticket: ITicket) => number) => {
  return {
    ...state,
    tickets: [...state.tickets.sort((previous, next) => (handler(previous) > handler(next) ? 1 : -1))],
    filterSelected: payload,
  };
};
