import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/utility";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="bg-white w-screen py-1 flex justify-between px-4 items-center sticky top-0">
      <Link>
        <img src={logo} alt="Logo" className="h-10" />
      </Link>
      <SearchBar />
    </div>
  );
}

export default Navbar;
