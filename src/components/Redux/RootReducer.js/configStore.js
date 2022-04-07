import { combineReducers, createStore } from "redux";

import {quanLySVReducer} from './QLSVReducer'


const rootReducer = combineReducers({
   
    quanLySVReducer

})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )