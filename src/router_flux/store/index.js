/**
 * Created by lemon on 2017/1/19.
 */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}
const middlewares = [thunk, logger];

const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//配置store信息
export default function configureStore(initialState) {

    //将reducer组合起来
    const reducer = combineReducers(reducers);
    //创建store
    const store = createSoreWithMiddleware(reducer, initialState);

    return store;
}
