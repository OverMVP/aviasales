import { ActionType } from '../../enums';
export interface ICheckBoxClickedAction {
  type: ActionType.CHECKBOX_CLICKED;
  payload: number;
}

export function checkBoxClicked(id: number): ICheckBoxClickedAction {
  return {
    type: ActionType.CHECKBOX_CLICKED,
    payload: id,
  };
}
