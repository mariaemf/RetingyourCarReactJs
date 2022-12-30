import Bookings from "..pages/Bookings;";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";

const Router = () => {
  return (
    //BrowserRouter é im componente responsável por informar a aplicação que teremos um roteamento de componentes por isso ele ficará por volta dos componentes <Route>
    <BrowserRouter>
      <Routes>
        <Route path="./dashboard" element={<Dashboard />} />
        <Route path="./bookings" element={<Bookings />} />
        <Route path="./sellCar" element={<SellCar />} />
        <Route path="./settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
