import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {reducers} from './reducers/rootReducer'

export function configureStore(initialState={}){
    // const store = createStore(reducers , initialState );
    const store = createStore(reducers , initialState , applyMiddleware(thunk));
    return store
}
export const store = configureStore()
