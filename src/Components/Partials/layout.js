import React, { Component } from 'react';
import {Media} from 'reactstrap';

import Header from '../Partials/header';
import Footer from '../Partials/footer';

const Layout =({children}) =>{
    return(
        <>
        <div>
           <Header />
                {children}
                <Footer />
        </div>
       
        </>
    )
}
export default Layout;
