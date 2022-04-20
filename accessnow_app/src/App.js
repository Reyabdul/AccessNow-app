import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import SignInSignUp from './routes/SignInSignUp';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Filter from './routes/Filter';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SignInSignUp" element={<SignInSignUp />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
