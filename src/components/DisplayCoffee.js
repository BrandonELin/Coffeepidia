import { useLocation } from "react-router-dom"
import FavoriteCoffee from "./FavoriteCoffee";
import DrinkDescription from "./DrinkDescription";

export default function DisplayCoffee({ coffee, favorites, deleteCoffee, addCoffee, newid }) {

    let location = useLocation()

    const loaded = () => {
        if (location.pathname === "/favorites") {
            return (
                <div>
                    <FavoriteCoffee coffee={coffee} deleteCoffee={deleteCoffee} newid={newid}/>
                </div>
            )
        } else if (location.pathname === "/drinks/hot"){
            return (
                <div>
                    <DrinkDescription coffee={coffee} addCoffee={addCoffee} temp='hot'/>
                </div>
            )
        } else {
            return (
                <div>
                    <DrinkDescription coffee={coffee} addCoffee={addCoffee} temp='iced'/>
                </div>
            )
        }
    }

    const loading = () => {
        return <div>No coffee data to display... :(</div>
    }

    return coffee ? loaded() : loading()
}