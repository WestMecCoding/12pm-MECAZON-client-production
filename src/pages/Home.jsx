import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
  <h1 className={styles.header}>Welcome to Mecazon!</h1>
  <div className={styles.layoutContainer}>
    <div className={styles.gridContainer}>
        <Link to="/products" className={styles.bigDiv}>
          <div>
            <h1 className={styles.divTitle}>Office Supply</h1>
          </div>
        </Link>
      <Link to="/products" className={styles.smallDiv}>
      <div>
        <h1 className={styles.divTitle}>Travel</h1>
      </div>
        </Link>
      <Link to="/products" className={styles.smallDiv}>
      <div>
      <h1 className={styles.divTitle}>Electronics</h1>
      </div>
        </Link>
    </div>
  </div>
  </>
);
}
