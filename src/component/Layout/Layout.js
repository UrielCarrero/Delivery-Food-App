
import React from 'react';
import Header from '../Headers/Header';
import Footer from '../Footers/Footer';
import Routers from '../../routes/Routers';

const Layout = () => {
    return(
        <>
        <Header/>
        <div>
            <Routers />
        </div>
        <Footer />
        </>
    )
}

export default Layout;