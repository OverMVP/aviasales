import { IState } from '../../../../interfaces';

export const increaseNumberToShow = (state: IState, payload: any) => {
  return {
    ...state,
    numberToShow: state.numberToShow + payload,
  };
};
