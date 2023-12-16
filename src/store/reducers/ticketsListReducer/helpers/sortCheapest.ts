import { IState, ITicket } from '../../../../interfaces';

export const sortCheapest = (state: IState, payload: any) => {
  return {
    ...state,
    tickets: [...state.tickets.sort((prev: ITicket, next: ITicket) => (prev.price > next.price ? 1 : -1))],
    filterSelected: payload,
  };
};
