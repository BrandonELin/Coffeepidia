import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

export default function DrinkDescription({coffee, addCoffee, temp}){
    return(
        <Card style={{width: '28vw'}} className='around bg-dark text-white'>
            <Card.Title>
                <h1>{coffee.title}</h1>
            </Card.Title>
            <Link to={`/drinks/${temp}/${coffee.id}`}>
                <Card.Img 
                style={{height: '25vw'}}
                src={coffee.image} 
                alt={coffee.title}
                />
            </Link>
                <Button onClick={() => addCoffee(coffee)}>Add to Favorites</Button>
        </Card>
    )
}