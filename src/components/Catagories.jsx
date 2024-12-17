import React, { useState } from "react";
import styles from "../styles/Catagories.module.css";

export default function Catagories() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <a href="#">Furniture</a>
        </li>
        <li>
          <a href="#">Office supplies</a>
        </li>
        <li>
          <a href="#">Travel</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
      </ul>
    </nav>
  );
}
