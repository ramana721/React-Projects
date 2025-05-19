

export default function Stats({ itemList }) {
  if (!itemList.length) return <div className="stats">Start Adding items to your packing list ..!</div>;
  // console.log(itemList);
  const len = itemList.length;
  let packLen = 0;
  itemList.forEach(item => item.isPacked ? packLen++ : '');
  const packPercentage = Math.round(packLen / len * 100);
  console.log(packPercentage, packLen, len);
  return (
    <div className="stats">
      {packPercentage === 100 ?
        <p>Preparations Set...! Ready to Go</p>
        :
        <p>You have {len} items in your list, So far packed {packLen} ({packPercentage}%) </p>}
    </div>

  );
}
