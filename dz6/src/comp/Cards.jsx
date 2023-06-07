import { addProduct, delProduct } from '../store/CardReducer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

export default function Purchased ({ product }) {
    const cardProducts = useSelector(state => state.card.products)
    const dispatch = useDispatch()

    const checkCards = ( checkProd ) => { return cardProducts.includes(checkProd) }

    return (
        <div className='productCard'>
            <div className='productIMG'>
                <img src={product.picture} alt="#" />
            </div>

            <div className='productText'>
                <h3 className='prodTextH3'>{product.name}</h3>
                <p className='prodTextP'>Category: {product.category}</p>
                <p className='prodTextP'>Color: {product.color}</p>
            </div>

            <div className='prodBTNS'>
                <div>
                    <span className='prodPrice'>{product.price}</span>
                </div>
                <div>
                    {checkCards(product)
                        ? <button className='basketBTN' onClick={() => {dispatch(delProduct(product.id))}}>REMOVE</button>
                        : <button className='basketBTN' onClick={() => {dispatch(addProduct(product))}}>BUY</button>}
                </div>
            </div>
        </div>
    )
}