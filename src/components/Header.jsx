import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex justify-between items-center bg-black fixed top-0 left-0 w-full z-[1001] p-4 transition-all duration-300 ">
      <div className="flex space-x-8 items-center">
        <h2 className="text-red-700 text-[30px] font-bold">MOVIE</h2>
        <nav className="text-white space-x-4 text-[18px]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="p-2 rounded-md"
          name=""
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button
          className="px-4 py-1 rounded-md text-white bg-red-500 hover:opacity-90"
          onClick={() => onSearch(searchTerm)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
