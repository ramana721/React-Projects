import {useState} from 'react';


export default function AddFriend({ setNewFrnd, setFriends }) {
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();
  function handleAddFrndSubmit(e) {
    if (!name || !imgURL) return;
    e.preventDefault();
    const newAddedFriend = {
      name,
      id,
      image: `${imgURL}?u=${id}`,
      balance: 0,
    };
    // console.log(newAddedFriend);
    setFriends((frnds) => [...frnds, newAddedFriend]);
    setName("");
    setImgURL("https://i.pravatar.cc/48");
    setNewFrnd((b) => !b);
    return;
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleAddFrndSubmit}>
        <label>Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image URL</label>
        <input
          type="text"
          value={imgURL}
          onChange={(e) => setImgURL(e.target.value)}
        />

        <button className="button">Add</button>
      </form>
      <button className="button" onClick={() => setNewFrnd((b) => !b)}>
        Close
      </button>
    </>
  );
}
