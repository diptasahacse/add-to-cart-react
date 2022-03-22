
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import { ManageDb } from './components/utilities/ManageDB';

function App() {
  const [count,setCount] = useState([]);
  
  

  const countListener = (product)=>{
    


    setCount(previous => [...previous,product]);
    // console.log(count)
    ManageDb(product);
    
    
}
  
  return (
    <div className="App">
      <Cart count={count}></Cart>
      <Products listener={countListener}></Products>

    </div>
  );
}

export default App;
