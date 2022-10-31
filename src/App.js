import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Routes,useNavigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import CoffeeDisplay from "./pages/CoffeeDisplay";
import HotCoffee from "./pages/HotCoffee";
import IcedCoffee from "./pages/IcedCoffee";
import { useState, useReducer } from "react";
import CoffeeDescription from "./pages/CoffeeDescription";
import { v4 as uuid } from 'uuid'

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      action.payload.trueid = uuid() 
      return [...state, action.payload]
    case 'DELETE':
      let filteredArr = state.filter((m) => m.trueid !== action.payload.trueid)
      return filteredArr
    default:
      return state
  }
}

function App() {
  let [favorites, dispatch] = useReducer(reducer, [])
  let [coffeeList, setCoffeeList] = useState([])

  let navigate = useNavigate();

  const addCoffee = (coffee) => {
    dispatch({ type: 'ADD', payload: coffee })
    navigate("/favorites");
  };

  const deleteCoffee = (coffee) => {
    dispatch({ type: 'DELETE', payload: coffee })
    navigate("/favorites");
  };

  const getCoffee = async (temp) => {
    try {
      const response = await fetch(
        `https://api.sampleapis.com/coffee/${temp}`
      );
      const data = await response.json();
      console.log(data);
      setCoffeeList(data);
    } catch (err) {
      console.log("ERROR! OH NO!!");
      console.log(err);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element=
          {<Favorites 
            favorites={favorites} 
            deleteCoffee={deleteCoffee}
            addCoffee={addCoffee}
          />} 
        />
        <Route path="/favorites/:id" element={<CoffeeDisplay favorites={favorites} getCoffee={getCoffee} deleteCoffee={deleteCoffee}/>} />
        <Route path='/drinks/hot' element={<HotCoffee getCoffee={getCoffee} coffeeList={coffeeList} addCoffee={addCoffee}/> } />
        <Route path='/drinks/iced' element={<IcedCoffee getCoffee={getCoffee} coffeeList={coffeeList} addCoffee={addCoffee}/> } />
        <Route path="/drinks/hot/:id" element={<CoffeeDescription coffeeList={coffeeList} getCoffee={getCoffee} addCoffee={addCoffee}/>} />
        <Route path="/drinks/iced/:id" element={<CoffeeDescription coffeeList={coffeeList} getCoffee={getCoffee} addCoffee={addCoffee}/>} />
      </Routes>
    </div>
    
  );
}

export default App;