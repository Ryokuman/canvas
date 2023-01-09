import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@pages/Login";
import FindPassword from "@pages/FindPassword";
import SignUp from "@pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="" element={<div>hello</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/findpassword" element={<FindPassword />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
