import React from 'react';

const Header = ({ isLoggedIn, onLogin }) => {
  return (
    <header className="">
      {isLoggedIn ? (null) : (
          <>
            <div>Church Treasurer</div>
            <nav>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Donate</a></li>
              </ul>
            </nav>
          </>
      )}
    </header>
  )
}

export default Header;
