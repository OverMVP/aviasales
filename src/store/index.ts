import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { ticketsListReducer } from './reducers/ticketsListReducer/ticketsListReducer';

const rootReducer = combineReducers({
  ticketsListReducer,
});
//@ts-ignore
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
