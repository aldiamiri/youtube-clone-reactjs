import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [inputSeacrh, setInputSearch] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSeacrh}`);
    setInputSearch("");
  };

  return (
    <form className="relative" onSubmit={handlerSubmit}>
      <input
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={inputSeacrh}
        type="text"
        className="outline-none rounded-full text-sm p-2 sm:w-80 w-50"
        placeholder="Search"
        style={{ borderWidth: "1px" }}
      />
      <button type="submit">
        <MagnifyingGlassIcon className="text-gray-400 bg-white h-6 absolute top-2 right-2" />
      </button>
    </form>
  );
}

export default SearchBar;
