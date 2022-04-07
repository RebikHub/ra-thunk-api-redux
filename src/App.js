import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/services'}/>}/>
        <Route path='/edit' element={<ServiceEdit />} />
        <Route path='/services' element={<ServiceList />}/>
      </Routes>
    </>
  );
};

export default App;
