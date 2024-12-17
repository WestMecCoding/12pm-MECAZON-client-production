import styles from "../styles/GroceryList.module.css";
import { Link } from "react-router-dom";

export default function GroceryList({ items, onItemClick }) {
  return (
    <div className={styles.list}>
      {items.map(i => (

        <div key={i.id} className={styles.item}>
          <img src={i.imgSrc} alt="" className={styles.img} />
          <h2>{i.name}</h2>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
        </div>
      ))}
    </div>
  )
};




// export default function GroceryList({ items, onItemClick }) {
//   return (


