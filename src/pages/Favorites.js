import DisplayCoffee from "../components/DisplayCoffee";

export default function Favorites({favorites, deleteCoffee, addCoffee}) {

    function showFavorites(){
        if(favorites.length>0){
            return(
                favorites.map((coffee, i) => 
                    <DisplayCoffee 
                        key={i} 
                        coffee={coffee} 
                        deleteCoffee={deleteCoffee} 
                        addCoffee={addCoffee}
                        favorites={favorites}
                        newid={i}
                    />
                )
            )
        } else {
            return (
                <h3 className="white">Start picking out some new favorites</h3>
            )
        }
    }

    
    return ( 
        <div className="brown">
            <h3>Favorites:</h3>

            <div>
                {showFavorites()}
            </div>
        </div>
    );
}