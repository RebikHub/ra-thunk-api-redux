export const FETCH_GET_SUCCESS = 'FETCH_GET_SUCCESS';
export const FETCH_GET_ERROR = 'FETCH_GET_ERROR';
export const FETCH_GET_REQUEST = 'FETCH_GET_REQUEST';

export const FETCH_GET_ID_SUCCESS = 'FETCH_GET_ID_SUCCESS';
export const FETCH_GET_ID_ERROR = 'FETCH_GET_ID_ERROR';
export const FETCH_GET_ID_REQUEST = 'FETCH_GET_ID_REQUEST';

export const FETCH_DELETE_SUCCESS = 'FETCH_DELETE_SUCCESS';
export const FETCH_DELETE_ERROR = 'FETCH_DELETE_ERROR';
export const FETCH_DELETE_REQUEST = 'FETCH_DELETE_REQUEST';

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_RESET = 'FETCH_POST_RESET';

export const fetchGetRequest = () => ({
  type: FETCH_GET_REQUEST,
});

export const fetchGetError = (error) => ({
  type: FETCH_GET_ERROR,
  payload: {
    error,
  },
});

export const fetchGetSuccess = (items) => ({
  type: FETCH_GET_SUCCESS,
  payload: {
    items,
  },
});


export const fetchGet = async (dispatch) => {
  dispatch(fetchGetRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    const data = await response.json();
    dispatch(fetchGetSuccess(data));
  } catch (e) {
    dispatch(fetchGetError(e.message));
  };
};

export const fetchDeleteRequest = () => ({
  type: FETCH_DELETE_REQUEST,
});

export const fetchDeleteError = (error) => ({
  type: FETCH_DELETE_ERROR,
  payload: {
    error,
  },
});

export const fetchDeleteSuccess = () => ({
  type: FETCH_DELETE_SUCCESS,
});

export const fetchDelete = async (dispatch, id) => {
  dispatch(fetchDeleteRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    dispatch(fetchDeleteSuccess());
  } catch (e) {
    dispatch(fetchDeleteError(e.message));
  };
  fetchGet(dispatch);
};

export const fetchGetIdRequest = () => ({
  type: FETCH_GET_ID_REQUEST,
});

export const fetchGetIdError = (error) => ({
  type: FETCH_GET_ID_ERROR,
  payload: {
    error,
  }
});

export const fetchGetIdSuccess = (item) => ({
  type: FETCH_GET_ID_SUCCESS,
  payload: {
    item
  }
});

export const fetchGetId = async (dispatch, id) => {
  dispatch(fetchGetIdRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    const data = await response.json();
    dispatch(fetchGetIdSuccess(data));
  } catch (e) {
    dispatch(fetchGetIdError(e.message));
  };
};

export const fetchPostRequest = () => ({
  type: FETCH_POST_REQUEST,
});

export const fetchPostError = error => ({
  type: FETCH_POST_ERROR,
  payload: {
    error,
  }
});

export const fetchPostSuccess = () => ({
  type: FETCH_POST_SUCCESS,
});

export const fetchPostReset = () => ({
  type: FETCH_POST_RESET,
});

export const fetchPost = async (dispatch, item) => {
  dispatch(fetchPostRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    };
    dispatch(fetchPostSuccess());
  } catch (e) {
    dispatch(fetchPostError(e.message));
  };
};