import React, { useEffect } from "react";
import GameArea from "./components/GameArea";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import ScoreMenu from "./components/ScoreMenu";
import Granim from "granim";

const App = () => {
  useEffect(() => {
    let granimInstance = new Granim({
      element: "#gradient",
      name: "granim",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#ff9966", "#ff5e62"],
            ["#00F260", "#0575E6"],
            ["#f05053", "#f0e937"],
          ],
        },
      },
    });
  }, []);

  return (
    <Router>
      <Provider store={store}>
        <div className='container'>
          <h1 className='logo'>Snake</h1>
          <Switch>
            <Route exact path='/'>
              <MainMenu />
            </Route>
            <Route exact path='/game'>
              <Game />
            </Route>
            <Route exact path='/score'>
              <ScoreMenu />
            </Route>
          </Switch>
          <canvas id='gradient'></canvas>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
