import React from "react";
import { PUBLIC_URLS } from "./Config/routes";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Index } from "./Pages";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { Layout } from "./Layouts/Layouts";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={PUBLIC_URLS.default} element={<Index />} />
          <Route path={PUBLIC_URLS.login} element={<Login />} />
          <Route path={PUBLIC_URLS.register} element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
