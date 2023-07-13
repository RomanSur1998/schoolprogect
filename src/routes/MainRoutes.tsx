import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Registration/Registration";
import Authorization from "../components/Authorization/Authorization";
import Recovery from "../components/Recovery/Recovery";

type Props = {};

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/recovery" element={<Recovery />} />
    </Routes>
  );
};

export default MainRoutes;
