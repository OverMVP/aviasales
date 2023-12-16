// function getNumberOfAllTransfers(arr: any) {
//   const forwardLength = arr[0].stops.length
//   const backwardLength = arr[1].stops.length
//   return forwardLength > backwardLength ? forwardLength : backwardLength
// }

import { IState } from '../../../../interfaces';

export function updateCheckBoxState(state: IState, id: any): IState {
  const newFilters = [...state.filterTransfers];
  const idx = newFilters.findIndex((el: any) => el.id === id);

  if (id === 0) {
    const newChecked = !newFilters[id].isChecked;

    newFilters.forEach((item) => {
      item.isChecked = newChecked;
    });

    return {
      ...state,
      filterTransfers: [...newFilters],
    };
  }

  newFilters[idx].isChecked = !newFilters[idx].isChecked;

  if (newFilters[0].isChecked) newFilters[0].isChecked = false;

  if (newFilters.slice(1).every((el) => el.isChecked) && !newFilters[0].isChecked) {
    newFilters[0].isChecked = true;
  }

  return { ...state, filterTransfers: [...newFilters] };
}
