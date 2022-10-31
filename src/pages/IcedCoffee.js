import { useParams } from "react-router-dom";
import DisplayCoffee from "../components/DisplayCoffee";
import { useEffect } from "react"

export default function IcedCoffee({ coffeeList, getCoffee, addCoffee }){
    let params = useParams();

    useEffect(() => {getCoffee('iced')},[])

    // const loaded = () => {
    return (
        <div className="coffee-view">
            {coffeeList.map((coffee) => {
                return (
                    <DisplayCoffee 
                        key={coffee.id}
                        coffee={coffee}
                        addCoffee={addCoffee}
                    />
                )
            })}
        </div>
    )
    // }

    // const loading = () => {
    //     return <div>Brewing up some Dirt</div>
    // }

    // return coffee ? loaded() : loading()
}

