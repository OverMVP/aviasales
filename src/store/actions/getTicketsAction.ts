import { IJSONTickets } from '../../interfaces';

export const getTicketsAction = (payload: IJSONTickets) => {
  return {
    type: 'GET_TICKETS',
    payload: payload,
  };
};
