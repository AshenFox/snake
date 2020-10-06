import React from "react";

const ScoreMenuItem = (props) => {
  const { id, date, score } = props;
  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return (
    <li className='score-menu__item'>
      <p className='score-menu__data'>
        <span className='score-menu__number'>{id}. - </span>
        <span className='score-menu__date'>
          {hours}:{minutes} - {day}.{month}.{year}
        </span>
      </p>
      <span className='score-menu__score'> --- {score} points</span>
    </li>
  );
};

export default ScoreMenuItem;
