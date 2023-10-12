// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer';

// eslint-disable-next-line react/prop-types
const Main = ({handleQuery,query,handleClicked}) => {
    return (
        <div>
           {/* <Navbar query={query} handleQuery={handleQuery} /> */}
           <Navbar query={query} handleQuery={handleQuery} handleClicked={handleClicked}/>
           <Outlet className='my-10'/>
           <Footer/>
        </div>
    );
};

export default Main;