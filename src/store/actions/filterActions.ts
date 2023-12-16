enum FilterActionsType {
  SET_CHEAPEST = 'SET_CHEAPEST',
  SET_FASTEST = 'SET_FASTEST',
}

export enum FilterActionsPayload {
  CHEAPEST = 'CHEAPEST',
  FASTEST = 'FASTEST',
}

export interface IFilterActions {
  type: FilterActionsType;
  payload: FilterActionsPayload;
}

export const setCheapest: IFilterActions = {
  type: FilterActionsType.SET_CHEAPEST,
  payload: FilterActionsPayload.CHEAPEST,
};

export const setFastest: IFilterActions = {
  type: FilterActionsType.SET_FASTEST,
  payload: FilterActionsPayload.FASTEST,
};
