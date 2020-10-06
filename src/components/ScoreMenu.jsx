import React from "react";
import { Link } from "react-router-dom";
import ScoreMenuItem from "./ScoreMenuItem";

const ScoreMenu = () => {
  let scoreArr = JSON.parse(localStorage.getItem("score"));
  let empty = false;
  if (scoreArr.length === 0) empty = true;
  return (
    <>
      <ul className='score-menu'>
        {empty ? (
          <li className='score-menu__item'>--- No records yet ---</li>
        ) : (
          scoreArr.map((scoreItem, i) => {
            const { date, score } = scoreItem;
            return (
              <ScoreMenuItem key={i} id={i + 1} date={date} score={score} />
            );
          })
        )}
      </ul>
      <Link to='/' className='btn'>
        Return
      </Link>
    </>
  );
};

export default ScoreMenu;
