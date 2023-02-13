import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import UsersPage from './components/UsersPage';
import UserDetails from './components/UserDetails';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} /> 
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='users/:id' element={<UserDetails/>} /> 
            {/* для динамики :id */}
        </Route>
    </Routes>
  )
}

export default MainRoutes

// index - абсолютный путь по умолчанию