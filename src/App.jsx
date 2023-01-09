import React from "react";

//Components
import GamePage from "./components/pages/GamePage";
// import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import ModalButton from "./components/ModalButton";

const App = () => {
  return (
    <React.Fragment>
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamePage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
      <ModalButton />
    </React.Fragment>
  );
};

export default App;
