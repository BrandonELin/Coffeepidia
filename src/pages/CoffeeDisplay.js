import { useParams, useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card";

export default function CoffeeDisplay({ favorites }) {

    let params = useParams()

    const coffee = favorites[params.id]

    return (

        <div>
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
                
            </Card>
        </div>
    )
}