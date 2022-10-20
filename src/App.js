
import './App.css';
import Shopping from './shopping.jpg';
import Grocery from './grocery.jpg';
import {GroceryList} from "./groceryList";


function App() {
  return (
    <div className="app">
       <div className="container"><img src={Grocery} alt="Grocery" width="250px"/></div>
        <div className="container"><h1>Grocery List</h1></div>
        < GroceryList />
        <div className="container"><img src={Shopping} alt="Shopping" width="250px"/></div>
    </div>
  );
}

export default App;
