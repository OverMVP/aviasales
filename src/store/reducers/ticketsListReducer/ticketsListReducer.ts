import { Reducer } from 'redux';
import { ActionType } from '../../../enums';
import { IAction, IActionTypes, IState } from '../../../interfaces';
import { getTicketsList } from './helpers/getTickets';
import { getTotalFlightDuration } from './helpers/getTotalFlightDuration';
import { increaseNumberToShow } from './helpers/increaseNumberToShow';
import { sortCheapest } from './helpers/sortCheapest';
import { sortFastest } from './helpers/sortFastest';
import { updateCheckBoxState } from './helpers/updateCheckBoxState';

const defaultState: IState = {
  tickets: [],
  stop: false,
  numberToShow: 5,
  filterSelected: 'CHEAPEST',
  filterTransfers: [
    {
      id: 0,
      isChecked: true,
      name: 'Все',
      value: -1,
    },
    {
      id: 1,
      isChecked: true,
      name: 'Без пересадок',
      value: 0,
    },
    {
      id: 2,
      isChecked: true,
      name: '1 пересадка',
      value: 1,
    },
    {
      id: 3,
      isChecked: true,
      name: '2 пересадки',
      value: 2,
    },
    {
      id: 4,
      isChecked: true,
      name: '3 пересадки',
      value: 3,
    },
  ],
};

export const ticketsListReducer: Reducer<IState, IAction> = (
  state = defaultState,
  { type, payload }: IAction
): IState => {
  const actionTypes: IActionTypes = {
    [ActionType.CHECKBOX_CLICKED]: () => updateCheckBoxState(state, payload),
    [ActionType.GET_TICKETS]: () => getTicketsList(state, getTotalFlightDuration, payload),
    [ActionType.SET_NUMBER_TO_SHOW]: () => increaseNumberToShow(state, payload),
    [ActionType.SET_CHEAPEST]: () => sortCheapest(state, payload),
    [ActionType.SET_FASTEST]: () => sortFastest(state, payload, getTotalFlightDuration),
  };

  if (actionTypes.hasOwnProperty(type)) {
    return actionTypes[type]();
  }
  return { ...state };
};
