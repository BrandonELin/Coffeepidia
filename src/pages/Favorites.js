import DisplayCoffee from "../components/DisplayCoffee";

export default function Favorites({favorites, deleteCoffee, addCoffee}) {

    return ( 
        <div>
            <h3>Favorites:</h3>

            <div>
                {favorites.map((coffee, i) => 
                    <DisplayCoffee 
                        key={i} 
                        coffee={coffee} 
                        deleteCoffee={deleteCoffee} 
                        addCoffee={addCoffee}
                        favorites={favorites}
                    />
                )}
            </div>
        </div>
    );
}