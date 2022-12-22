import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

function SearchBar() {
  return (
    <form className="relative">
      <input type="text" className="outline-none rounded-full text-sm p-2 sm:w-80 w-50" placeholder="Search" style={{ borderWidth: "1px" }} />
      <button type="submit">
        <MagnifyingGlassIcon className="text-gray-400 bg-white h-6 absolute top-2 right-2" />
      </button>
    </form>
  );
}

export default SearchBar;
