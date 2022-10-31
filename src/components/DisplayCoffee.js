import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function DisplayCoffee({coffee}){

    let location = useLocation()

    const alreadyFavorited = () => {
        let check = favorites?.find((m) => m.imdbID === coffee.imdbID)
        if (check) {
            return true
        } else {
            return false
        }
    }

    const loaded = () => {
        if (location.pathname === "/favorites") {
            return (
                <div>
                    <Link to={`/favorites/${coffee.imdbID}`}>
                        <img src={coffee.Poster} alt={coffee.Title} />
                    </Link>
                    <br />
                    <button onClick={() => removeFromFavorites(coffee)}>Remove from Favorites</button>
                </div>
            )
        } else {
            return (
                <div>
                    <img src={coffee.image} alt={coffee.title} />
                    <h1>{coffee.title}</h1>
                    
                    <br />
                    {
                        alreadyFavorited()
                        ?
                        "Favorited"
                        :
                        <button onClick={() => addToFavorites(coffee)}>Add to Favorites</button>
                    }
                    <br /><br />
                </div>
            )
        }
    }

//   console.log(favorites.find((m) => m.imdbID === "tt0112697"))

    const loading = () => {
        return <div>No coffee data to display... :(</div>
    }

    return coffee ? loaded() : loading()
}

