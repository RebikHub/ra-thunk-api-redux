import {
  FETCH_POST_REQUEST,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
  FETCH_POST_RESET
} from './action';

const initialState = {
  loading: false,
  error: null,
  save: null
};

export default function reducerGet(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        loading: true,
        error: null,
        save: null
      };
    case FETCH_POST_ERROR:
      const {error} = action.payload;
      return {
        loading: false,
        error,
        save: null
      };
    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        save: "ok"
      };
    case FETCH_POST_RESET:
      return {
        loading: false,
        error: null,
        save: null
      };
    default:
      return state;
  };
};