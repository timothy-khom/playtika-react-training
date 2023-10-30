import { combineReducers } from "redux";
import { reducer as waiterReducer } from '../features/Waiter/store/reducer';

export const reducer = combineReducers({
    waiter: waiterReducer,
});
