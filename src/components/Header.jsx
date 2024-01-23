import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    function toggleMini() {
      const burger = document.querySelector('.burger');
      const mini = document.querySelector('.mini');

      if (burger) {
        burger.addEventListener('click', function() {
          mini.classList.toggle('block');
          console.log('Burger clicked');
        });
      }
    }
    toggleMini();
  }, []);

  return (
    <div className="Header">
      <div className="nav">
        <div className="ul">
          <li><a href="#">Home</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Promotion</a></li>
          <li className="burger"><i className="fas fa-bars burger"></i></li>
        </div>

        <div className="logo">
          <h1>M.Zawarshah</h1>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="mini">
        <li><a href="#">Home</a></li>
        <li><a href="#">Order</a></li>
        <li><a href="#">Promotion</a></li>
      </div>
    </div>
  );
}

export default Header;
