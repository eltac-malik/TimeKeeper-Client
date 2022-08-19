import {createSlice} from '@reduxjs/toolkit'


const basketSlice = createSlice({
    name:"basket",
    initialState:{
        basket:[]
    },
    reducers:{
        setBasket:(state,action)=>
        {
            state.basket = action.payload
        }
    }
})

export default basketSlice.reducer;
export const {setBasket} = basketSlice.actions