
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import { add, remove } from './components/utilities/ManageDB';


function App() {
  const [count,setCount] = useState([]);
  
  

  const countListener = (product)=>{
    setCount(previous => [...previous,product]);
    // console.log(count)
    add(product);
}
  const removeListener = (id)=>{
    remove(id)
}
  
  return (
    <div className="App">
      <Cart count={count}></Cart>
      <Products  removeListener={removeListener} addListener={countListener}></Products>

    </div>
  );
}

export default App;
