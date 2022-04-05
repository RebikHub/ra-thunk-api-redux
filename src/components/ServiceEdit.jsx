import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceEdit() {
  let navigate = useNavigate();

  return (
    <>
      <div className='edit-input'>
        <label htmlFor="name">Название</label>
        <input name='name' type="text" />
        <label htmlFor="price">Стоимость</label>
        <input name='price' type="text" />
        <label htmlFor="description">Описание</label>
        <input name='description' type="text" />
      </div>
      <div className='edit-btn'>
        <button type='button' onClick={() => navigate('/services')}>Отмена</button>
        <button type='button' onClick={() => console.log('edit save')}>Сохранить</button>
      </div>
    </>
  )
}
