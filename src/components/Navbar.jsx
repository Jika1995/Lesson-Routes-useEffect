import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>Navbar
        {/* первый способ - дольше, перегружается страничка */}

        {/* <a href="/">Home</a>
        <a href="/about">About us</a>  */} 

        {/* это второй способ, который быстрее, страница не перезагружается */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About us</Link> */}

        {/* третий способ - в стилях можно задать и переопределить класс active */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about"> About us</NavLink>
        <NavLink to="/users"> Users </NavLink>


    </div>
  )
}

export default Navbar