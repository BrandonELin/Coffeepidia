import { useLocation, Link } from "react-router-dom"
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function DisplayCoffee({ coffee, favorites, deleteCoffee, addCoffee, newid }) {

    let location = useLocation()

    const loaded = () => {
        if (location.pathname === "/favorites") {
            return (
                <div>
                    <Link to={`/favorites/${newid}`}>
                        <Card style={{width: '28vw'}}>
                            <Card.Title>
                                <h1>{coffee.title}</h1>
                            </Card.Title>
                            <Card.Img 
                                style={{width: '25vw'}}
                                src={coffee.image} 
                                alt={coffee.title}
                            />
                        </Card>
                    </Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Card style={{width: '28vw'}}>
                        <Card.Title>
                            <h1>{coffee.title}</h1>
                        </Card.Title>
                        <Card.Img 
                        style={{width: '25vw'}}
                        src={coffee.image} 
                        alt={coffee.title}
                        />
                         <Button onClick={() => addCoffee(coffee)}>Add to Favorites</Button>
                    </Card>
                </div>
            )
        }
    }

    const loading = () => {
        return <div>No coffee data to display... :(</div>
    }

    return coffee ? loaded() : loading()
}