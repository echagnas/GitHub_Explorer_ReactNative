import {createStore} from 'redux';
import {mainReducer} from './reducers/Reducer';

export const Store = createStore(mainReducer);