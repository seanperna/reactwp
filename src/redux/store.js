import { createStore } from "react-redux";
import storeReducer from "./redux/reducers/UIReducer";

export const store = createStore(UIReducer);
