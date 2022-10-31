import { useParams } from "react-router-dom"
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function CoffeeDescription({ coffeeList, addCoffee }) {

    let params = useParams()

    const coffee = coffeeList[params.id]

    console.log(coffee)

    return (

        <div className="brown" >
            <Card style={{width: '100vw'}}  className='around bg-dark text-white'>
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
                <Button onClick={() => addCoffee(coffee)}>Add to Favorites</Button>
            </Card>
        </div>
    )
}