import { useLocation, Link } from "react-router-dom"
import { useDispatch } from 'react-redux'


export default function MovieDisplay({ coffee, favorites, deleteCoffee, addCoffee }) {

    let location = useLocation()
    let dispatch = useDispatch()

    const alreadyFavorited = () => {
        let check = favorites?.find((bean) => bean.title === coffee.title)
        if (check) {
            return true
        } else {
            return false
        }
    }

    const handleDelete = (drink) => {
        dispatch(deleteCoffee(drink))
    }

    const handleClick = (drink) => {
        dispatch(addCoffee(drink))
    }

    const loaded = () => {
        if (location.pathname === "/favorites") {
            return (
                <div>
                    <Link to={`/favorites/${coffee.id}`}>
                        <img src={coffee.image} alt={coffee.title} />
                    </Link>
                    <br />
                    <button onClick={() => handleDelete(coffee)}>Remove from Favorites</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{coffee.title}</h1>
                    <img src={coffee.image} alt={coffee.title} />
                    <br />
                    {
                        alreadyFavorited()? "Favorited" : <button onClick={() => handleClick(coffee)}>Add to Favorites</button>
                    }
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