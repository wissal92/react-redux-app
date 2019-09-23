import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
//this will warn us if we accidentally mutated redux state:
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    //this is the config to unable redux dev tools:
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                             
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
}