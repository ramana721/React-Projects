import { useState } from "react";
import FriendList from "./FriendList";
import AddFriend from './AddFriend';
import AddExpense from './AddExpense';
const initialFriends = [
  {
    id: 134836,
    name: "Avicii",
    image: "https://i.pravatar.cc/48?u=134836",
    balance: -700,
  },
  {
    id: 976372,
    name: "Nathan",
    image: "https://i.pravatar.cc/48?u=976372",
    balance: 2000,
  },
  {
    id: 481476,
    name: "Raj",
    image: "https://i.pravatar.cc/48?u=481476",
    balance: 0,
  },
];

// console.log(
//   initialFriends.map((frnd) =>
//     frnd.id === 134836 ? { ...frnd, balance: -900 } : frnd
//   )
// );

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleSelectedId(id) {
    return setSelectedId(id === selectedId ? null : id);
  }

  return (
    <div className="app">
      <FriendList
        friends={friends}
        setFriends={setFriends}
        selectedId={selectedId}
        handleSelectedId={handleSelectedId}
      />
      {selectedId && (
        <AddExpense
          friends={friends}
          key={selectedId}
          selectedId={selectedId}
          handleSelectedId={handleSelectedId}
          setFriends={setFriends}
        />
      )}
    </div>
  );
}

