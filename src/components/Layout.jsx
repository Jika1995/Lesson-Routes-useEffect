import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet /> 
        <footer>@makers JS29</footer>
    </>
  )
}

export default Layout

// outlet - типа заглушка