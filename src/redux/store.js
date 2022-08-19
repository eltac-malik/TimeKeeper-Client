import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import registerSlice from './registerSlice'
import basketSlice from './basketSlice'

const store = configureStore({
    reducer:{
        log:loginSlice,
        reg:registerSlice,
        basket:basketSlice
    }
})

export default store