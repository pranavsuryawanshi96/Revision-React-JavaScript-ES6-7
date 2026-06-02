import React from "react";
import UserContainer from "./containers/UserContainer";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import UserProfile from "./components/UserProfile";
import userAuth from "./components/hoc/userAuth";
const App = () => {
  const CheckDashboard = userAuth(DashBoard);
  const CheckUserProfile = userAuth(UserProfile);
  return (
    <>
      <h1>Container Presentational Design Pattern</h1>
      <UserContainer />
      <hr />
      <Routes>
        <Route path="/dashboard" element={<CheckDashboard name="pranav" />} />
        <Route path="/userprofile" element={<CheckUserProfile />} />
        <Route
          path="/"
          element={<div>HOC Component and Welcome to login page</div>}
        />
      </Routes>
    </>
  );
};

export default App;
