import React, { useState } from "react";
import styles from "../styles/Catagories.module.css";
import { Link } from "react-router-dom";

export default function Catagories() {
  return (
    <nav>
      <ul className={styles.nav}>
        <Link to="/products">
          <a href="#">Furniture</a>
        </Link>
        <Link to="/products">
          <a href="#">Office supplies</a>
        </Link>
        <Link to="/products">
          <a href="#">Travel</a>
        </Link>
        <Link to="/products">
          <a href="#">Electronics</a>
        </Link>
      </ul>
    </nav>
  );
}
