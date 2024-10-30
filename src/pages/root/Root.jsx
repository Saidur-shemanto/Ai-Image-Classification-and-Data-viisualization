import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[60vh] w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
}
