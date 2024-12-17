import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
  <h1>Welcome to the Shopping Website</h1>
  <div className={styles.layoutContainer}>
    <div className={styles.gridContainer}>
      <div className={styles.bigDiv}>
        <div id={styles.exOne}></div>
      </div>
      <div className={styles.smallDiv}>
        <div className={styles.exTwo}></div>
      </div>
      <div className={styles.smallDiv}>
        <div className={styles.exTwo}></div>
      </div>
    </div>
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <div className={styles.exThree}></div>
      </div>
      <div className={styles.sidebarItem}>
        <div className={styles.exThree}></div>
      </div>
      <div className={styles.sidebarItem}>
        <div className={styles.exThree}></div>
      </div>
    </div>
  </div>
  </>
);
}
