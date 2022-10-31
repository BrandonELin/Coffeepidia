import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

export default function FavoriteCoffee({coffee, deleteCoffee, newid}){
    return(
        <Card style={{width: '28vw'}} className='around bg-dark text-white'>
            <Card.Title>
                <h1>{coffee.title}</h1>
            </Card.Title>
            <Link to={`/favorites/${newid}`}>
                <Card.Img 
                    style={{height: '25vw'}}
                    src={coffee.image} 
                    alt={coffee.title}
                />
            </Link>
            
            <Button onClick={() => deleteCoffee(coffee)}>Remove from Favorites</Button>
        </Card>
    )
}

