import Cookies from 'js-cookie';
import { getTicketsAction } from '../actions/getTicketsAction';

export const getAsyncTickets = () => {
  return (dispatch: any) => {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${Cookies.get('searchId')}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getTicketsAction(json));
        if (!json.stop) {
          setTimeout(() => dispatch(getAsyncTickets()), 1000);
        }
      })
      .catch((err) => {
        setTimeout(() => dispatch(getAsyncTickets()), 1000);
      });
  };
};
