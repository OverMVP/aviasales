import { ActionType } from '../../enums';

export interface ISetNumberToShow {
  type: ActionType.SET_NUMBER_TO_SHOW;
  payload: number;
}

export const setNumberToShow = (): ISetNumberToShow => {
  return {
    type: ActionType.SET_NUMBER_TO_SHOW,
    payload: 5,
  };
};
