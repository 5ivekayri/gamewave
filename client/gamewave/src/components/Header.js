import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>GameWave</h1>
      <nav>
        <Link to="/">Библиотека Игр</Link>
        <Link to="/about">О Нас</Link>
        <Link to="/consoles">Консоли</Link>
        <Link to="/login">Войти</Link>
        <Link to="/register">Регистрация</Link>
      </nav>
    </header>
  );
}

export default Header;