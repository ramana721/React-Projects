import {useState} from 'react';

export default function AddExpense({ friends, selectedId, setFriends, handleSelectedId }) {
  let frndName;
  let selectedFrnd;
  friends.forEach((frnd) =>
    frnd.id === selectedId ? (selectedFrnd = frnd) : null
  );
  frndName = selectedFrnd.name;

  const [bill, setBill] = useState("");
  const [selfExpense, setSelfExpense] = useState("");
  const [billPayee, setBillPayee] = useState("you");

  const frndExpense = bill - selfExpense;

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill) return;
    let newBalance;
    if (billPayee == "you") {
      newBalance = selectedFrnd.balance + bill - selfExpense;
      setFriends((frnds) =>
        frnds.map((frnd) =>
          frnd.id === selectedId ? { ...frnd, balance: newBalance } : frnd
        )
      );
    } else {
      newBalance = selectedFrnd.balance - selfExpense;
      setFriends((frnds) =>
        frnds.map((frnd) =>
          frnd.id === selectedId ? { ...frnd, balance: newBalance } : frnd
        )
      );
    }
    handleSelectedId(selectedId);
    return;
    // return ;
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>Split a Bill with {frndName}</h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your Expense</label>
      <input
        type="text"
        value={selfExpense}
        onChange={(e) => setSelfExpense(Number(e.target.value))}
      />
      <label>{frndName}'s Expense</label>
      <input type="text" disabled value={frndExpense > 0 ? frndExpense : ""} />
      <label>Who paid the bill?</label>
      <select
        value={billPayee}
        onChange={(e) => setBillPayee(Number(e.target.value))}
      >
        <option value="you">You</option>
        <option value="frnd">{frndName}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}
