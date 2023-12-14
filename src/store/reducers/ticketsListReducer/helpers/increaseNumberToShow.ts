export const increaseNumberToShow = (state: any, payload: any) => {
  return {
    ...state,
    numberToShow: state.numberToShow + payload,
  }
}
