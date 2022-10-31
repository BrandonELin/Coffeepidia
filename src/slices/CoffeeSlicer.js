import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid'

const initialState = {
    coffees: []
}

const coffeeSlice = createSlice({
    name: 'coffees',
    initialState, 
    reducers: {
        addCoffee: (state, action) => {
            let newDrink = action.payload
            newDrink.id = uuid();
            console.log(state, action, newDrink)
            state.coffees.push(newDrink)
        },
        emptyCoffees: (state, action) => {
            state.coffees = []
        },
        deleteCoffee: (state, action) =>{
            console.log(action.payload)
            state.coffees.splice(state.coffees.findIndex(function (listItem) {
                return listItem.id === (action.payload);
            }),1)
        },
        favoriteCoffee: (state, action) => { 
            state.coffees = state.coffees.map((coffee) => {
             if (coffee.id !== action.payload.id){
                 return coffee
             } else {
                 return {...coffee, favorite: !coffee.favorite}
             }
            })
         },
 
    }
})
export const { addCoffee, emptyCoffees, deleteCoffee, completeCoffee } = coffeeSlice.actions

export default coffeeSlice.reducer