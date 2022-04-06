import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerGet from "./reducerGet";
import reducerGetId from "./reducerGetId";
import reducerDelete from "./reducerDelete";
import reducerPost from "./reducerPost";
import thunk from "redux-thunk";

const reducer = combineReducers({
  serviceList: reducerGet,
  serviceRemove: reducerDelete,
  serviceEdit: reducerGetId,
  servicePost: reducerPost,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
