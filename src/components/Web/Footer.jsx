import React from "react";
import "./webComponents.css";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mt-auto bg-neutral-800 h-20">
      <p className="font-black text-red-500 text-xl p-2">
        Drink{" "}
        <span className="font-black text-white text-xl text-red-500">
          Store
        </span>
      </p>
      <p className="font-bold text-white text-lg p-2">
        <span className="font-bold text-red-500 text-lg">&copy;</span> All
        rights reserved 2023
      </p>
    </footer>
  );
};

export default Footer;
