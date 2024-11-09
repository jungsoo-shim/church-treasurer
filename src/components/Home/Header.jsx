import React from 'react';
import Logo from './Logo.jsx';
import Login from './Login.jsx';
import Menu from './Menu.jsx';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 w-screen h-12 p-4 flex items-center">
      <div className="w-1/6">
        <Logo />
      </div>
      <div className="hidden sm:block w-2/3">
        <nav>
          <ul className="flex justify-evenly">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Donate</a></li>
          </ul>
        </nav>
      </div>
      <div className="hidden sm:block w-1/6">
        <Login />
      </div>
      <div className="sm:hidden w-5/6">
        <Menu />
      </div>
    </header>
  )
}

export default Header;
