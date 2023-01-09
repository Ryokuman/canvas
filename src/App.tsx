import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@pages/Login";

function App() {
  return (
    <Routes>
      <Route path="" element={<div>hello</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
