import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
    name: "card", initialState: {products: []},

    reducers: {
        delProduct: (state, action) => {
            const deleteProdId = state.products.findIndex(item => item.id === action.payload)
            if (deleteProdId !== -1) {state.products.splice(deleteProdId, 1)}
        },
        addProduct: (state, action) => {state.products.push(action.payload)},
    }
})
export const { addProduct, delProduct } = cardSlice.actions
export default cardSlice.reducer