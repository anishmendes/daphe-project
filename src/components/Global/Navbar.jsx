import React from 'react'
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <div className='fixed top-[26px] flex ml-[2%] z-50 w-20 items-center justify-center'>
                <img src={logo} className='w-full h-full' alt="" />
            </div>
            <div className='flex w-full fixed top-[32px] justify-end h-max z-50 items-center'>
    <div className='mr-4 text-center flex py-2 px-4 bg-none rounded-lg gap-8 uppercase items-center justify-center'>
        <a className='navLink activeNavLink' href="">Launch</a>
        <a className='navLink' href="">Research</a>
        <a className='navLink' href="">Team</a>
        <a className='navLink' href="">Explore</a>
    </div>
</div>

                {/* <button className='flex mr-[40px] py-2 px-4 bg-sky-600 text-center tracking-tighter text-white rounded-xl text-[16px]/[120%] hover:opacity-80'>Reach Us</button> */}

        </>
    )
}

export default Navbar