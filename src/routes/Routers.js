import AllFoods from '../pages/AllFoods';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import FoodDetails from '../pages/FoodDetails';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

const Routers = () => {
    return(
        <Routes>
            <Route path='/' element = {<Navigate to='/home'/>} />
            <Route path='/home' element = { <Home/> } />
            <Route path='/allfoods' element = {<AllFoods/> }/>
            <Route path='/cart' element = {<Cart/> }/>
            <Route path="/checkout" element = {<Checkout/> }/>
            <Route path='/contact' element = {<Contact/> }/>
            <Route path='/fooddetails' element = {<FoodDetails/> }/>
            <Route path='/login' element = {<Login/> }/>
            <Route path='/register' element = {<Register/> }/>
        </Routes>
    )
}

export default Routers;