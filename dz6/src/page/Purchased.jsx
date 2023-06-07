import Cards from '../comp/Cards.jsx'
import { useSelector } from 'react-redux'
import React from 'react'

export default function Purchased () {
    const cards = useSelector(state => state.card.products)

    if (cards.length === 0) {
        return <div className='mainContent'>
            <div className='productContent'>
                <div className='nullContent'>
                    You don't have any purchased items!
                </div>
            </div>
        </div>
    }

    return (
        <div className='mainContent'>
            <div className='container'>
                <div className='productContent'>
                    {cards.map(product => <Cards product={product} key={product.id}></Cards>)}
                </div>
            </div>
        </div>
    )
}