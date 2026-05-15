import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Articles from "./components/Articles/Articles";
import Admin from "./components/Admin/Admin";
import Sales, { default as sales } from "./components/Admin/Sales";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sales" element={<Sales />} />
          {/*  if in case in this upper does not match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
