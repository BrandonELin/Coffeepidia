import { useLocation, Link } from "react-router-dom"
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function DisplayCoffee({ coffee, favorites, deleteCoffee, addCoffee, newid }) {

    let location = useLocation()

    const loaded = () => {
        if (location.pathname === "/favorites") {
            return (
                <div>
                    
                        <Card style={{width: '28vw'}} className='around bg-dark text-white'>
                            <Card.Title>
                                <h1>{coffee.title}</h1>
                            </Card.Title>
                            <Link to={`/favorites/${newid}`}>
                                <Card.Img 
                                    style={{width: '25vw'}}
                                    src={coffee.image} 
                                    alt={coffee.title}
                                />
                            </Link>
                            
                            <Button onClick={() => deleteCoffee(coffee)}>Remove from Favorites</Button>
                        </Card>
                </div>
            )
        } else {
            return (
                <div>
                    <Card style={{width: '28vw'}} className='around bg-dark text-white'>
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