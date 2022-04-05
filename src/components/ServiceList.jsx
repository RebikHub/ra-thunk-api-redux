import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeService, fetchServices } from '../actions/actionCreators';
import Error from './Error';
import Loader from './Loader';

export default function ServiceList(props) {
  let navigate = useNavigate();
  const [remove, setRemove] = useState(false);
  const [removeId, setRemoveId] = useState(null);
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch])

  useEffect(() => {
    setRemove(false);
    setRemoveId(null);
  }, [items.length])

  const handleRemove = id => {
    setRemove(true);
    setRemoveId(id);
    // removeService(dispatch, id);
  }

  const handleEdit = id => {
    console.log(id);
    navigate("/edit")
  }
  console.log('render');
  if (loading && !remove) {
    return <Loader/>;
  }

  if (error) {
    return <Error/>;
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          <p className="item-text">{`${o.name} ${o.price} ${o.id === removeId}`}</p>
          {!remove && removeId !== o.id ? <div>
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

