const defaultState: any = {
  filterSelected: "CHEAPEST",
}

export const filterReducer = (state = defaultState, { type, payload }: any) => {
  switch (type) {
    case "SET_CHEAPEST":
      return { ...state, filterSelected: payload }

    case "SET_FASTEST":
      return { ...state, filterSelected: payload }

    default:
      return state
  }
}
