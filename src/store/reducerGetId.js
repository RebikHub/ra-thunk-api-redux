import {
  FETCH_GET_ID_REQUEST,
  FETCH_GET_ID_ERROR,
  FETCH_GET_ID_SUCCESS,
} from './action';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

export default function reducerGet(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_ID_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case FETCH_GET_ID_ERROR:
      const {error} = action.payload;
      return {
        loading: false,
        error,
      };
    case FETCH_GET_ID_SUCCESS:
      const {item} = action.payload;
      return {
        item,
        loading: false,
        error: null,
      };
    default:
      return state;
  };
};