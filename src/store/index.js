import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import itemReducer from '../reducers/itemReducer';

const composeEnhancers = composeWithDevTools({});
const reducers = combineReducers({
    item: itemReducer
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, composeEnhancers(middleware));

export default store;