export default function Items({ item, togglePacked, deleteItem }) {
  return (
    <li>
      <input type="checkbox" checked={item.isPacked} onChange={() => togglePacked(item.id)}></input>
      <p style={item.isPacked ? { textDecorationLine: "line-through" } : null}>{item.quantity} {item.description}</p>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
