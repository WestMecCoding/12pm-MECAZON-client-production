import styles from "../styles/GroceryList.module.css";
import { Link } from "react-router-dom";

export default function GroceryList({ items, onItemClick }) {
   return (
    <div className={styles.list}>
      {items.map((i) => {
        const image = new URL(i.imgSrc, import.meta.url).href;

        return (
          <div key={i.id} className={styles.item}>
            <Link to="/product" className={styles.link}>
              <p className={styles.subtitle}>
                <img src={image} alt="" className={styles.img} />
                <div className={styles.subtitle}>
                  <div className={styles.subtitle}>
                    <h2>{i.item}</h2>
                  </div>
                  <div className={styles.subtitle}>
                    <p>
                      Category: <br /> {i.category}
                    </p>
                  </div>
                  <div className={styles.subtitle}>
                    <p>
                      Price: <br /> {i.price_in_usd}
                    </p>
                  </div>
                </div>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}




// export default function GroceryList({ items, onItemClick }) {
//   return (


