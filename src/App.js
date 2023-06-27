import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [foodItems, setFoodItems] = useState(items);
  const categorySet = new Set();
  items.filter((item) => categorySet.add(item["category"]));
  const categories = [...categorySet];
  const [foodCategory, setFoodCategory] = useState(categories);

  //filer function
  const filter = (category) => {
    if (category === "all") {
      setFoodItems(items);
      return;
    }
    const filterCategory = items.filter(
      (item) => item["category"] === category
    );
    setFoodItems(filterCategory);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>
        <div className="underline"></div>
        <Categories categories={foodCategory} filter={filter} />
        <Menu items={foodItems} />
      </section>
    </main>
  );
}

export default App;
