import {useState} from 'react';

export default function Form({ setItemList }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    let newItem = {
      id: Date.now(),
      quantity: quantity,
      description: description,
      isPacked: false,
    };
    setItemList((prev) => [...prev, newItem]);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>Items You Need to Pack..</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => (
          <option value={`${index + 1}`} key={`${index + 1}`}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        placeholder="Items.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
