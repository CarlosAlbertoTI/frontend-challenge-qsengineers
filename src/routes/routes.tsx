import React from "react";
import { Route, Routes, } from "react-router";

import Menu from "@screens/Menu/Menu";
import Loading from "@screens/Loading/Loading";


const AppRouter: React.FC = () => {
  

  return (
    <>
    <Routes>
      <Route path="*" element={<Loading />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
    </>
  );
};

export default AppRouter;
