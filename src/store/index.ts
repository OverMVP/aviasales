import { createStore, combineReducers } from "redux"
import { ticketOptionsReducer } from "./reducers/ticketOptionsReducer"
import { filterReducer } from "./reducers/filterReducer"
import { composeWithDevTools } from "@redux-devtools/extension"

const rootReducer = combineReducers({
  filterReducer,
  ticketOptionsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
