import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Catagories from "./Catagories.jsx";
import LogoLG from "./LogoLG.jsx";
import Hamburger from "./Hamburger.jsx";
import Signup from "./Signup.jsx";
import Cart from "./Cart.jsx";
import Box from "./Box.jsx";

// import Menu from "./Menu";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          <p className={styles.subTitle}>
            <LogoLG />
            <Hamburger />
          </p>
        </Link>
        <Link to="/products" className={styles.link}>
          <p className={styles.subTitle}>
            <Box />
            Products
          </p>
        </Link>
        <SearchBar />
        <Link to="/cart" className={styles.link}>
          <p className={styles.subTitle}>
            <Cart />
            Cart
          </p>
        </Link>
        <Link to="/sign-up" className={styles.link}>
          <p className={styles.subTitle}>
            <Signup />
            Sign-up
          </p>
        </Link>
      </nav>

      <Catagories />
    </>
  );
}
