import {useState} from 'react';
import Form from './Form';
import Stats from './Stats';
import PackageList from './PackageList';
// import { Items } from './Items';



export default function App(){
  
  const [itemList, setItemList] = useState([]);

  function clearList(){
    const confirmation = window.confirm('Are you sure, You want to clear your Package List ?');
    return confirmation ? setItemList([]) : '';
  }

  function togglePacked(id) {
    return setItemList((items) => 
      items.map((item) => {
        return item.id === id ? {...item, isPacked:!item.isPacked} : item
      })
    );
  }

  function deleteItem(id){
    return setItemList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <h1>Pack It Up!</h1>
      {/* <h1>Test</h1> */}
      <Form setItemList={setItemList} />
      <PackageList itemList={itemList} togglePacked={togglePacked} deleteItem={deleteItem} clearList={clearList}/>
      <Stats itemList={itemList}/>
    </div>
  );
}





