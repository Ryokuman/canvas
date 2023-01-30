import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@pages/Login";
import FindPassword from "@pages/FindPassword";
import SignUp from "@pages/SignUp";
import Main from "@pages/Main";
import Write from "@pages/Write";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/findpassword" element={<FindPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<Main />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
}

export default App;
