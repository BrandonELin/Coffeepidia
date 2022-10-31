import { useParams } from "react-router-dom";

export default function CoffeeList(){
    let params = useParams();

    const getCoffee = async (temp) => {
        try {
          const response = await fetch(
            `https://api.sampleapis.com/coffee/${temp}`
          );
          const data = await response.json();
          console.log(data);
          return data;
        } catch (err) {
          console.log("ERROR! OH NO!!");
          console.log(err);
        }
    };

    const loaded = () => {
        return (
            <div>
                {getCoffee(params).map((coffee) => {
                    return (
                        <DisplayCoffee 
                            key={coffee.id}
                            coffee={coffee}
                        />
                    )
                })}
            </div>
        )
    }

    const loading = () => {
        return <div>Brewing up some Dirt</div>
    }

    return movie ? loaded() : loading()
}

