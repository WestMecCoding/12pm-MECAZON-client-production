import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import styles from "../styles/GroceryList.module.css";
import Modal from "../components/ItemDataModal";
import { sortAscending, filterByCategory } from "../utils/groceryFunctions";
import axios from "axios";
import SearchBar from "../components/SearchBar";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  const [filteredGroceries, setFilteredGroceries] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("/dummy-data/groceries.json");
        setGroceries(response.data);
        setFilteredGroceries(response.data);
      } catch (err) {
        console.error("Something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  const handleSearch = ({ term }) => {
    let results = groceries;

    if (term) {
      results = results.filter(item =>
        item.item.toLowerCase().includes(term.toLowerCase())
      );
    }
    setFilteredGroceries(results);
  };
  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    console.log(JSON.parse(sessionStorage.getItem("groceries")));
  }, [groceries]);


const handleSort = () => {
  const sorted = sortAscending(groceries);
  setFilteredGroceries(sorted);
};
const handleCategoryFilter = (category) => {
  const filtered = filterByCategory(groceries, category);
  setFilteredGroceries(filtered);
  };
   const handleItemClick = (item) => {
     setSelectedItem(item);
     setModalVisible(true);
   };

   const closeModal = () => {
     setModalVisible(false);
     setSelectedItem(null);
   };

  return (
    <div>
      <h1 className={styles.header}>Result of Search:</h1>
      <div className={styles.wrap}>
        <button className={styles.priceButton} onClick={handleSort}>Sort by Price</button>
      <select onChange={(e) => handleCategoryFilter(e.target.value)}>
        <option value="all">All Items</option>
        <option value="Educational Supplies">Educational Supplies</option>
        <option value="Office Furniture">Office Furniture</option>
        <option value="Electronics">Electronics</option>
        <option value="Travel Supplies and Luggage">Travel Supplies and Luggage</option>
      </select>
      
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.space}></div>
      <GroceryList items={filteredGroceries} onItemClick={handleItemClick} />
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        title={selectedItem?.name || "Item Details"}
      >
        {selectedItem && (
          <div>
            <p>Category: {selectedItem.category}</p>
            <p>Price: ${selectedItem.price}</p>
            <button>Add to Cart</button>
          </div>
        )}
      </Modal>
    </div>
  );
}