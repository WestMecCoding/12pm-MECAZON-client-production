import React, { useState } from "react";
import Styles from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch({
        term: searchTerm,
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search by name..."
        className={Styles.input}
      />
    </div>
  );
}
