import { useParams, useNavigate } from "react-router-dom"

export default function CoffeeDisplay({ favorites }) {

    let params = useParams()

    const coffee = favorites.filter((m) => params.id === m.id)

    return (

        <div>
            <h3>{coffee.title}</h3>
            <img src={coffee.image} alt={coffee.title} />
            <p>{coffee.description}</p>
            <p>Ingredients: {coffee.ingredients}</p>
        </div>
    )
}