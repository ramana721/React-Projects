export default function Friends({ friend, selectedId, handleSelectedId }) {
  let isSelected = friend.id === selectedId;
  return (
    <>
      <li className={isSelected ? "selected" : null}>
        <h3>{friend.name}</h3>
        <img src={friend.image} />
        {/* <p className={friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : null}>
            {}
          </p> */}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance}₹
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}₹
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <button className="button" onClick={() => handleSelectedId(friend.id)}>
          {isSelected ? "Close" : "Select"}
        </button>
      </li>
    </>
  );
}
