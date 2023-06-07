import { getProductsList } from '../store/ListReducer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import Cards from '../comp/Cards.jsx'

export default function Content () {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsList())
    }, [])

    return (
        <div className='mainContent'>
            <div className='container'>
                <div className='productContent'>
                    {products.map(product => <Cards product={product} key={product.id}/>)}
                </div>
            </div>
        </div>
    )
}