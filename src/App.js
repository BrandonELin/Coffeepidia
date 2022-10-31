import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import {addCoffee, emptyCoffees, deleteCoffee, favoriteCoffee} from './slices/CoffeeSlicer';
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import CoffeeDisplay from "./pages/CoffeeDisplay";
import CoffeeList from "./pages/CoffeeList";
import { useSelector } from 'react-redux'

function App() {

  const { coffees } = useSelector((state) => state.coffees)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element=
          {<Favorites 
            favorites={coffees} 
            deleteCoffee={deleteCoffee}
            addCoffee={addCoffee}
          />} 
        />
        <Route path="/favorites/:id" element={<CoffeeDisplay favorites={coffees}/>} />
        <Route path='/drinks/:temp' element={<CoffeeList/>} />
      </Routes>
    </div>
  );
}

export default App;
