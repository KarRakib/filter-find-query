/* eslint-disable react/no-unknown-property */

import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci'
import { BiSearch } from 'react-icons/bi'
import { BsChevronCompactUp } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Button from '../components/Button';


// eslint-disable-next-line react/prop-types
const CheckBar = ({ query, handleQuery, handleClicked }) => {
    const [showProfile, setShowProfile] = useState(false)
    const [showNav, setShowNav] = useState(false)

    return (
        <div>

            <div className='flex items-center justify-between py-4 relative'>
                <div className='flex items-center md:space-x-10 lg:space-x-20'>
                    <div className='font-semibold text-2xl'><a href="/">SEINE</a></div>
                    <nav className='max-md:hidden'>
                        <ul className='flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]'>
                            <Button onClickHandler={handleClicked} value="" title=" All Products" />
                            <Button onClickHandler={handleClicked} value="Nike" title="Nike" />
                            <Button onClickHandler={handleClicked} value="Adidas" title="Adidas" />
                            <Button onClickHandler={handleClicked} value="Puma" title="Puma" />
                            <Button onClickHandler={handleClicked} value="Vans" title="Vans" />
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center bg-gray-100 p-2 rounded-full max-md:hidden'>
                        <button><BiSearch size={20} className='opacity-50' /></button>
                        <input
                            value={query} onChange={handleQuery}
                            type="text"
                            className='outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
                            placeholder='Search'
                            autoComplete='false'
                        />

                    </div>
                    <div onClick={() => setShowProfile(!showProfile)} className='relative cursor-pointer'>
                        <img src="user.jpg" className='w-[35px] h-[35px] rounded-full object-cover' alt="" />
                        <div className={`absolute bg-white z-[2] rounded-lg shadow-lg ${showProfile ? "" : "hidden"}`}>

                        </div>
                    </div>

                    <Link href='/cart'>
                        <div className='p-2 bg-gray-100 rounded-full'><CiShoppingCart size={20} /></div>
                    </Link>

                                       <span onClick={() => setShowNav(!showNav)} className='p-[9px] bg-gray-100 rounded-full md:hidden'>
                        <BsChevronCompactUp className={`transition ease-in duration-150 ${showNav ? "rotate-180" : "0"}`} />
                    </span>
                </div>
            </div>
            <div className={`md:hidden ${showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"}`}>
                <ul className='flex flex-col text-[15px] opacity-75 px-2'>
                    <Button onClickHandler={handleClicked} value="" title=" All Products" />
                    <Button onClickHandler={handleClicked} value="Nike" title="Nike" />
                    <Button onClickHandler={handleClicked} value="Adidas" title="Adidas" />
                    <Button onClickHandler={handleClicked} value="Puma" title="Puma" />
                    <Button onClickHandler={handleClicked} value="Vans" title="Vans" />
                </ul>
                <div className='flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3'>
                    <input
                        type="text"
                        className='outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
                        placeholder='Search'
                        autoComplete='false'
                    />
                    <button><BiSearch size={20} className='opacity-50' /></button>
                </div>
            </div>
        </div>
    );
};

export default CheckBar;
