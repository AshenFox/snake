import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className='main-menu'>
      <li className='main-menu__item'>
        <Link to='/game'>
          <h3>Play</h3>
        </Link>
      </li>
      <li className='main-menu__item'>
        <Link to='/score'>
          <h3>Top score</h3>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
