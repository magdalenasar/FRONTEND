import counterReducer from "./counter.js";
import vriendenReducer from "./vrienden.js";

const rootReducer = Redux.combineReducers({
  counterState: counterReducer,
  vriendenState: vriendenReducer,
});

/* STORE */
const store = Redux.createStore(rootReducer);

export default store;
