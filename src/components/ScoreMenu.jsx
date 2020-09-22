import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ScoreMenu = () => {
  return (
    <>
      <ul className='score-menu'>
        <li className='score-menu__item'>
          <p className='score-menu__data'>
            <span className='score-menu__number'>1. - </span>
            <span className='score-menu__date'>16:27 - 26.08.2020</span>
          </p>
          <span className='score-menu__score'> --- 650 points</span>
        </li>

        <li className='score-menu__item'>
          <p className='score-menu__data'>
            <span className='score-menu__number'>2. - </span>
            <span className='score-menu__date'>16:27 - 26.08.2020</span>
          </p>
          <span className='score-menu__score'> --- 625 points</span>
        </li>

        <li className='score-menu__item'>
          <p className='score-menu__data'>
            <span className='score-menu__number'>3. - </span>
            <span className='score-menu__date'>16:27 - 26.08.2020</span>
          </p>
          <span className='score-menu__score'> --- 500 points</span>
        </li>
      </ul>

      <Link to='/' className='btn'>
        Return
      </Link>
    </>
  );
};

export default ScoreMenu;
