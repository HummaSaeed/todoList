import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initiaState = {
  todos: [],
};
export const todoaction = ( data ) => ({
  type: "ADD_DATA",
  payload: data,
});
const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {  todos:[action.payload,...state.todos] };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));
export default store;
