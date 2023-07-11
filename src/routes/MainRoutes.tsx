import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Registration/Registration";
import Authorization from "../components/Authorization/Authorization";

type Props = {};

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/auth" element={<Authorization />} />
    </Routes>
  );
};

export default MainRoutes;
