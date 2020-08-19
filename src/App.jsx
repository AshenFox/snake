import React from "react";
import GameArea from "./components/GameArea";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <GameArea />
      </div>
    </Provider>
  );
};

export default App;
