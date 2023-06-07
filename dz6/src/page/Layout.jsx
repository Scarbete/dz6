import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

const Layout = () => {
    const prods = useSelector(state => state.card.products)
    const basket = prods.length

    return (
        <div className='layout'>
            <header className='header'>
                <div className="container">
                    <div className='header__inner'>
                        <div className='nav'>
                            <img src="" alt="#"/>
                            <NavLink to={"/"}><button className='pagesBTN'>Main</button></NavLink>
                            <NavLink to={"/Purchased"}><button className='pagesBTN'>Purchased</button></NavLink>
                            <button className='pagesBTN'>Contacts</button>
                            <button className='pagesBTN'>Portfolio</button>
                        </div>
                        <h2 style={{ background: 'gray', padding: '10px', borderRadius: '8px'}}>Products { basket }</h2>
                    </div>
                </div>
            </header>

            <div className="sidepanel">
                <div className="sidepanel__text">
                    <span>Social network</span>
                </div>
                <div className="sidepanel__divider"></div>
                <a href="#" className="sidepanel__icon">
                    <img src='https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Simbolo.png' alt="#" style={{ width: '100%', height: '100%' }}/>
                </a>
                <a href="#" className="sidepanel__icon">
                    <img src="https://i.pinimg.com/originals/d5/e1/cf/d5e1cf0a96bad7c64e868128e6190c2f.png" alt="#" style={{ width: '100%', height: '100%' }}/>
                </a>
            </div>

            <Outlet/>

            <footer className="footer">
                <div className="container">
                    <div className="social">
                        <div className="subtitle">We are in social networks:</div>
                        <a href="#" className="link">instagram</a>
                        <a href="#" className="link">facebook</a>
                    </div>
                    <div className="call">
                        <div className="subtitle">Or call us</div>
                        <a href="#" className="link">+380678341034</a>
                        <a href="#" className="link">+380500941356</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout