import {useState} from 'react';
import Friends from "./Friends";
import AddFriend from "./AddFriend";

export default function FriendList({ friends, selectedId, handleSelectedId, setFriends }) {
  const [newFrnd, setNewFrnd] = useState(false);
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friends
            friend={friend}
            key={friend.id}
            selectedId={selectedId}
            handleSelectedId={handleSelectedId}
          />
        ))}
      </ul>
      {!newFrnd ? (
        <button className="button" onClick={() => setNewFrnd((b) => !b)}>
          Add Friend
        </button>
      ) : (
        <AddFriend setNewFrnd={setNewFrnd} setFriends={setFriends} />
      )}
    </div>
  );
}
