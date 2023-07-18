import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Registration/Registration";
import Authorization from "../components/Authorization/Authorization";
import Recovery from "../components/Recovery/Recovery";
import MainPage from "../components/MainPage/MainPage";

type Props = {};

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/recovery" element={<Recovery />} />
    </Routes>
  );
};

export default MainRoutes;
