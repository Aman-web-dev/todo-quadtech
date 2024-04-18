import { createStoreHook } from "react-redux";
import todoReducer from "./todo/todoReducer";
import { createStore } from "redux";




const store = createStore(todoReducer)

export default store;

