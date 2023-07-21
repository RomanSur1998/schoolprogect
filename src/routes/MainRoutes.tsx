import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Registration/Registration";
import Authorization from "../components/Authorization/Authorization";
import StudentsAuth from "../components/StudentsAuth/StudentsAuth";
import Recovery from "../components/Recovery/Recovery";
import StudentsProfile from "../components/StudentsProfile/StudentsProfile";

type Props = {};

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="studentsauth" element={<StudentsAuth />} />
      <Route path="studentsprofile" element={<StudentsProfile />} />
    </Routes>
  );
};

export default MainRoutes;
