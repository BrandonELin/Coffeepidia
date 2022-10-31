import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import CoffeeDetails from "./pages/CoffeeDetails";
import {addCoffee, emptyCoffees, deleteCoffee, favoriteCoffee} from './slices/CoffeeSlicer';
import CoffeeList from "./pages/CoffeeList";

let init = false;

function App() {

  let [coffee, setCoffee] = useState(null);
  let [favorites, setFavorites] = useState([]);

  let navigate = useNavigate();

  const addToFavorites = (coffee) => {
    setFavorites([...favorites, coffee]);
    navigate("/favorites");
  };

  const removeFromFavorites = (coffee) => {
    let filteredArr = favorites.filter((m) => m.imdbID !== coffee.imdbID);
    setFavorites(filteredArr);
  };

  const addMoreToFavorite = (more, id) => {
    console.log(more, id)
    let newUpdatedFavorites = favorites.map(m => {
      if (m.imdbID === id) {
        return { 
          ...m, 
          rating: more.rating, 
          notes: more.notes
        }

      } else {
        return m
      }
    })
    favorites.map(m => m.imdbID === id ? { ...m, ...more } : m)

    setFavorites(newUpdatedFavorites)
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/favorites/:id" element={<CoffeeDisplay/>} />
        <Route path='/drinks/:temp' element={<CoffeeList/>} />
      </Routes>
    </div>
  );
}

export default App;
