import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { sesionReducer, tasksReducer } from "./Reducers/";

import { getAllTasks } from "./Actions/tasksActions";

const reducers = combineReducers({
  sesionReducer,
  tasksReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(getAllTasks());

export default store;
