import {combineReducers} from "redux";
import AmountReducer from "./Reducer/AmountReducer";

const reducers = combineReducers({
    amount:AmountReducer
});

export default reducers;