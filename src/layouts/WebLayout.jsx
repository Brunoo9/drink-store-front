import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/Web/Header";
import Footer from "../components/Web/Footer";
const WebLayout = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-200 flex flex-col min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default WebLayout;
