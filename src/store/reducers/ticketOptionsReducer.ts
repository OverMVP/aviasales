const defaultState: any = {
  checkBoxChecked: "ALL",
}

export const ticketOptionsReducer = (state = defaultState, { type, payload }: any) => {
  switch (type) {
    case "ALL":
      return { ...state, checkBoxChecked: payload }
    case "WITHOUT_TRANSFER":
      return { ...state, checkBoxChecked: payload }
    case "ONE_TRANSFER":
      return { ...state, checkBoxChecked: payload }
    case "TWO_TRANSFERS":
      return { ...state, checkBoxChecked: payload }
    case "THREE_TRANSFERS":
      return { ...state, checkBoxChecked: payload }
    default:
      return state
  }
}
