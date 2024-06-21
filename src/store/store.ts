import { combineReducers, createStore } from "redux";
import foodReducer from "./reducers/foodReducer";
import foodCartReducer from "./reducers/foodCartReducer";

const rootReducer = combineReducers({
    foodReducer,
    foodCartReducer,
});

const store = createStore(rootReducer);

export default store;