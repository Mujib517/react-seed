import { createStore, applyMiddleware, combineReducers } from "redux";
import counterReducer from "./counterReducer";
import logger from "redux-logger";
import userReducer from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const middelware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middelware);

export default store;

