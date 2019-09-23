import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
//this will warn us if we accidentally mutated redux state:
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configStore(initialState){
    //this is the config to unable redux dev tools:
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}