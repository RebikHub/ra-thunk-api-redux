import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPost, fetchPostReset } from '../store/action';
import Error from './Error';

export default function ServiceEdit() {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    price: '',
    content: ''
  });
  const {item, loading, error} = useSelector(state => state.serviceEdit);
  const dispatch = useDispatch();
  const post = useSelector(state => state.servicePost);

  useEffect(() => {
    if (item) {
      setInput({
        id: item.id,
        name: item.name,
        price: item.price,
        content: item.content
      });
    };
  }, [item]);

  useEffect(() => {
    setTimeout(() => {
      if (post.error || error) {
        navigate('/services');
      };
    }, 3 * 1000);
  }, [post.error, error, navigate]);

  useEffect(() => {
    if (post.save === 'ok') {
      navigate('/services');
      dispatch(fetchPostReset());
    };
  }, [dispatch, navigate, post.save]);

  function inputName(ev) {
    setInput((prev) => ({...prev, name: ev.target.value}));
  };

  function inputPrice(ev) {
    setInput((prev) => ({...prev, price: Number(ev.target.value)}));
  };

  function inputContent(ev) {
    setInput((prev) => ({...prev, content: ev.target.value}));
  };

  function enterService(ev) {
    ev.preventDefault();
    fetchPost(dispatch, input);
  };

  if (post.error || error) {
    return <Error/>;
  };

  return (
    <form onSubmit={enterService} className={loading || post.loading ? 'hidden-form' : ''}>
      <div className={loading || post.loading ? 'hidden' : 'none'}></div>
      <div className='edit-input'>
        <label htmlFor="name">Название</label>
        <input name='name' type="text"
          required
          value={input.name}
          onChange={inputName} />
        <label htmlFor="price">Стоимость</label>
        <input name='price' type="number"
          required
          value={input.price}
          onChange={inputPrice} />
        <label htmlFor="description">Описание</label>
        <input name='description' type="text"
          required
          value={input.content}
          onChange={inputContent} />
      </div>
      <div className='edit-buttons'>
        <button type='button' onClick={() => navigate('/services')}>Отмена</button>
        {loading || post.loading ?
            <div>
              <div className="loader-btn" ></div>
            </div> :
            <button type='submit'>Сохранить</button>}
      </div>
    </form>
  );
};
