import React from 'react';
import Logo from './Logo.jsx';
import Login from './Login.jsx';
import Menu from './Menu.jsx';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 w-screen h-12 p-4 flex items-center">
      <div className="flex w-1/3">
        <Logo />
      </div>
      <div className="flex hidden sm:block w-1/3">
        <nav>
          <ul className="flex justify-end">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Donate</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end hidden sm:block w-1/3">
        <Login />
      </div>
      <div className="flex sm:hidden">
        <Menu />
      </div>
    </header>
  )
}

export default Header;
