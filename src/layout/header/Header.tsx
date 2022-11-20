import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  let navigate = useNavigate();

  const search = (e: any) => {
    if (e.key === "Enter") {
      navigate("/", { state: { searchValue } });
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          src={require("../../assets/logo/trox.png")}
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input
          type="text"
          defaultValue={searchValue}
          className="header__searchInput"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={search}
        />
      </div>
    </nav>
  );
};

export default Header;
