import { createStore } from "redux";
import reducer from '../reducers/Add';

const store = createStore(reducer);

export default store;