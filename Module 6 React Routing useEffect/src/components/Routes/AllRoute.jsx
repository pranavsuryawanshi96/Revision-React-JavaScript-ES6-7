import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Articles from "../Articles/Articles";
import Admin from "../Admin/Admin";
import Sales, { default as sales } from "../Admin/Sales";
import NotFound from "../NotFound/NotFound";
import SingleProduct from "../Products/SingleProduct";
import Seller from "../Admin/Seller";
const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="sales" element={<Sales />} />
          <Route path="seller" element={<Seller />} />
        </Route>
        <Route path="/sales" element={<Sales />} />
        {/*  if in case in this upper does not match route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
