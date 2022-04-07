import { createStore, combineReducers } from "redux";
import reducerGet from "./reducerGet";
import reducerGetId from "./reducerGetId";
import reducerDelete from "./reducerDelete";
import reducerPost from "./reducerPost";

const reducer = combineReducers({
  serviceList: reducerGet,
  serviceRemove: reducerDelete,
  serviceEdit: reducerGetId,
  servicePost: reducerPost,
});

const store = createStore(
  reducer
);

export default store;
