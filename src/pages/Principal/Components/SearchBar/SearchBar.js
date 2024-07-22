import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ onSearch, codebarReaded, codebartoFind }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  useEffect(() => {
    if (codebarReaded) {
      setSearchTerm(codebarReaded.rawValue);
    } else {
      setSearchTerm("");
    }
  }, [codebarReaded]);

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            🔍
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
