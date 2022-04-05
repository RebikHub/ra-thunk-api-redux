import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';

export default function ServiceAdd() {
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();
  console.log(item);

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addService(dispatch, item.name, item.price);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit' className='btn-save' disabled={loading}>Save</button>
      {error && <p>Something went wrong try again</p>}
    </form>
  );
}
