import { Route, Routes } from 'react-router-dom'
import Purchased from './page/Purchased.jsx'
import Content from './page/Content.jsx'
import Layout from './page/Layout.jsx'
import './App.css'

export default function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Content/>}></Route>
                    <Route path='/Purchased' element={<Purchased/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}