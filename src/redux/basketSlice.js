import {createSlice} from '@reduxjs/toolkit'


const basketSlice = createSlice({
    name:"basket",
    initialState:{
        basket:JSON.parse(localStorage.getItem("basket"))
    },
    reducers:{
        setBasket:(state,action)=>
        {
            state.basket = action.payload
        },
        delBasket:(state,action)=>
        {
            let newFilter = state.basket.filter(e=> e.id !== action.payload)
            localStorage.setItem("basket",JSON.stringify(newFilter))
            state.basket = JSON.parse(localStorage.getItem("basket"))
        }
    }
})

export default basketSlice.reducer;
export const {setBasket,delBasket} = basketSlice.actions