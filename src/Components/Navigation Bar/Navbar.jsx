import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    if (!searchKeyword || searchKeyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword("");
    }
  };

  return (
    <nav className="bg-[#ffffff1a] flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between items-center p-5 gap-2 ">
      <Link to="/">
        <h1 className="text-4xl font-bold text-white">Manga List</h1>
      </Link>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Manga...."
          className="px-5 py-2 rounded-xl w-full"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button className="absolute top-1 right-1" onClick={handleSearch}>
          <MagnifyingGlass size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
