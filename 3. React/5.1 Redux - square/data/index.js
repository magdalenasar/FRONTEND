import counterReducer from "./counter.js";
import vriendenReducer from "./vrienden.js";
import squareReducer from "./square.js";

const rootReducer = Redux.combineReducers({
  counterState: counterReducer,
  vriendenState: vriendenReducer,
  squareState: squareReducer,
});

/* STORE */
const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
