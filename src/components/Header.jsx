import React from 'react';
import Logo from './Logo.jsx';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 w-screen h-12 p-4 flex justify-between items-center">
      <div className="font-bold text-lg w-1/3">
        <Logo />
      </div>
      <div className="hidden sm:block w-1/3">
        <nav>
          <ul className="flex flex-row justify-evenly">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Donate</a></li>
          </ul>
        </nav>
      </div>
      <div className="hidden sm:block font-bold w-1/3 items-end">
        <button>Log in</button>
      </div>
      <div className="sm:hidden">
        <button>Menu</button>
      </div>
    </header>
  )
}

export default Header;
