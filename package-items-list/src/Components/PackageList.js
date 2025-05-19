import Items from "./Items";
import { useState } from 'react';
export default function PackageList({ itemList, togglePacked, deleteItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;

  if (sortBy === "input") sortedList = itemList;
  else if (sortBy === "description") {
    sortedList = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedList = [
      ...itemList.filter((item) => item.isPacked === false),
      ...itemList.filter((item) => item.isPacked === true),
    ];
  } else if (sortBy === "quantity") {
    sortedList = itemList.slice().sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Items
            item={item}
            key={item.id}
            togglePacked={togglePacked}
            deleteItem={deleteItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
          <option value="quantity">Sort By Quantity</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
