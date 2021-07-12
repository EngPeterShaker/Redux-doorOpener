import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import {reducers} from './reducers/rootReducer';


export function configureStore(initialState={}){
    // const store = createStore(reducers , initialState );
    const mw = [thunk, logger]
    const store = createStore(reducers , initialState , composeWithDevTools(
        applyMiddleware(...mw)));
    return store
}
export const store = configureStore()
