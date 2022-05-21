import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Info } from "../pages";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/info/:id" element={<Info />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesApp;
