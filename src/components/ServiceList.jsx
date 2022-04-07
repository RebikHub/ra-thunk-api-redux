import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGet, fetchDelete, fetchGetId } from '../store/action';
import Error from './Error';
import Loader from './Loader';

export default function ServiceList() {
  let navigate = useNavigate();
  const [removeId, setRemoveId] = useState([]);
  const {items, loading, error} = useSelector(state => state.serviceList);
  const removeLoading = useSelector(state => state.serviceRemove.loading);
  const removeError = useSelector(state => state.serviceRemove.error);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchGet(dispatch);
  }, [dispatch])

  // useEffect(() => {
  //   setRemoveId(null);
  // }, [items.length])

  const handleRemove = id => {
    setRemoveId((prev) => ([...prev, id]));
    fetchDelete(dispatch, id);
  }

  const handleEdit = id => {
    fetchGetId(dispatch, id);
    navigate("/edit")
  }

  if (loading) {
    return <Loader/>;
  }

  if (error || removeError) {
    return <Error/>;
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          <p className="item-text">{`${o.name} ${o.price}`}</p>
          {!removeLoading || !removeId.includes(o.id) ?
            <div>
              <button className="btn-edit" onClick={() => handleEdit(o.id)}></button>
              <button className="btn-remove" onClick={() => handleRemove(o.id)}></button>
            </div> :
            <div>
              <div className="loader-btn" ></div>
            </div>
          }
        </li>
      ))}
    </ul>
  );
}

