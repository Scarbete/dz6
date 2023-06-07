import { configureStore } from '@reduxjs/toolkit'
import products from './ListReducer'
import cardReducer from './cardReducer'

export const store = configureStore({
    reducer: {
        card: cardReducer,
        products: products
    }
})