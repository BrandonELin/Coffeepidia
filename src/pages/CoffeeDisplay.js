import { useParams, useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function CoffeeDisplay({ favorites, deleteCoffee }) {

    let params = useParams()

    const coffee = favorites[params.id]

    return (

        <div className="brown">
            <Card style={{width: '100vw'}}>
                <Card.Title>
                    <h1>{coffee.title}</h1>
                </Card.Title>
                <Card.Body className="Display">
                    <Card.Img 
                        style={{width: '25vw'}}
                        src={coffee.image} 
                        alt={coffee.title}
                    />
                    <Card.Text>
                        {coffee.description}<br/>
                        Ingredients: {(coffee.ingredients).join()}
                    </Card.Text>
                </Card.Body>
                <Button onClick={() => deleteCoffee(coffee)}>Remove from Favorites</Button>
            </Card>
        </div>
    )
}