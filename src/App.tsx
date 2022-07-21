import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Index";
import HomePage from "./pages/homePage";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
