import { createStore, applyMiddleware, combineReducers } from "redux";
import counterReducer from "./counterReducer";
import logger from "redux-logger";
import userReducer from "./userReducer";
// import thunk from "redux-thunk";
import createSaga from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import appSaga from "./saga";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const saga = createSaga();

const middelware = composeWithDevTools(applyMiddleware(saga, logger));

const store = createStore(rootReducer, middelware);

saga.run(appSaga);

export default store;

