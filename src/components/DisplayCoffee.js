import { useLocation, Link } from "react-router-dom"
import { useDispatch } from 'react-redux'

export default function DisplayCoffee({ coffee, favorites, deleteCoffee, addCoffee }) {

    let location = useLocation()

    const loaded = () => {
        if (location.pathname === "/favorites") {
            return (
                <div>
                    <Link to={`/favorites/${coffee.id}`}>
                        <img src={coffee.image} alt={coffee.title} />
                    </Link>
                    <br />
                    <button onClick={() => deleteCoffee(coffee)}>Remove from Favorites</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{coffee.title}</h1>
                    <img src={coffee.image} alt={coffee.title} />
                    <br />
                    <button onClick={() => addCoffee(coffee)}>Add to Favorites</button>
                    <br /><br />
                </div>
            )
        }
    }

    const loading = () => {
        return <div>No coffee data to display... :(</div>
    }

    return coffee ? loaded() : loading()
}