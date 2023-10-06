// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import CheckBar from '../Shared/CheckBar';

// eslint-disable-next-line react/prop-types
const Main = ({handleQuery,query,handleClicked}) => {
    return (
        <div>
           {/* <Navbar query={query} handleQuery={handleQuery} /> */}
           <CheckBar query={query} handleQuery={handleQuery} handleClicked={handleClicked}/>
           <Outlet/>
           <h1 className="bg-red-500"> Hi I am from Fiter Website</h1>
        </div>
    );
};

export default Main;