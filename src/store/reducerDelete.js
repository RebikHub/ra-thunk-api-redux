import {
  FETCH_DELETE_REQUEST,
  FETCH_DELETE_ERROR,
  FETCH_DELETE_SUCCESS,
} from './action';

const initialState = {
  loading: false,
  error: null,
};

export default function reducerDelete(state = initialState, action) {
  switch (action.type) {
    case FETCH_DELETE_REQUEST:
      return {
        loading: true,
        error: null,
      };
    case FETCH_DELETE_ERROR:
      const {error} = action.payload;
      return {
        loading: false,
        error,
      };
    case FETCH_DELETE_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  };
};