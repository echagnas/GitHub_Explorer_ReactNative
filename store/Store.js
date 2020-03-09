import { createStore, combineReducers } from 'redux';
import { mainReducer } from './reducers/Reducer';

export const Store = createStore(combineReducers({
    main: mainReducer
}));