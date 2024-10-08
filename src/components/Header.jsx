import React from 'react';

const Header = ({ isLoggedIn, onLogin }) => {
  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 w-screen h-12 p-4 flex justify-between items-center">
      <div className="font-bold text-lg">Church Treasurer</div>
      {isLoggedIn ? (null) : (
        <div>
          <nav>
            <ul className="space-x-2 md:space-x-16 flex justify-stretch">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Donate</a></li>
            </ul>
          </nav>
        </div>
      )}
      {isLoggedIn ? (null) : (
      <div className="font-bold"><button>Log in</button></div>
      )}
    </header>
  )
}

export default Header;
