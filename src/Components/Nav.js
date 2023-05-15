import React from 'react';

const Nav = () => {
    return (
        <div class="navbar bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 ">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li tabindex="0">
                        <a class="justify-between">
                            Parent
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div class="container lg:flex flex-wrap items-center justify-between mx-auto hidden" id="navbar-sticky ">
            <h1 className='text-xl font-bold text-black'>David</h1>
            <ul class="menu menu-horizontal px-1 mx-auto text-black text-md font-bold ">
                <li><a className='hover:text-red-500'>HOME</a></li>
                <li tabindex="0">
                    <a className='hover:text-red-500'>COACHING</a>
                    <ul class="p-2 bg-white text-black">
                        <li><a className='hover:text-red-500'>ALL COACHING</a></li>
                        <li><a className='hover:text-red-500'>IELTS COACHING</a></li>
                        <li><a className='hover:text-red-500'>TOEFL</a></li>
                        <li><a className='hover:text-red-500'>PTE COACHING</a></li>
                        <li><a className='hover:text-red-500'>GRADUATE RE-EXAM</a></li>
                        <li><a className='hover:text-red-500'>MANAGEMENT TEST</a></li>
                        <li><a className='hover:text-red-500'>SCHOLASTIC APTI</a></li>
                    </ul>
                </li>
                <li tabindex="0">
                    <a className='hover:text-red-500'>VISA </a>
                    <ul class="p-2 bg-white text-black">
                        <li><a className='hover:text-red-500'>ALL VISA</a></li>
                        <li><a className='hover:text-red-500'>HAJJ & UMRRA VISA</a></li>
                        <li><a className='hover:text-red-500'>BUSINESS VISA</a></li>
                        <li><a className='hover:text-red-500'>STUDENT VISA</a></li>
                        <li><a className='hover:text-red-500'>JOB SEEKER VISA</a></li>
                        <li><a className='hover:text-red-500'>TOURIST VISA</a></li>
                        <li><a className='hover:text-red-500'>MEDICAL VISA</a></li>
                        <li><a className='hover:text-red-500'>TRANSIT VISA</a></li>
                    </ul>
                </li>
                <li tabindex="0">
                    <a className='hover:text-red-500'>COUNTRY</a>
                    <ul class="p-2 bg-white text-black">
                        <li><a className='hover:text-red-500'>ALL COUNTRY</a></li>
                        <li><a className='hover:text-red-500'>SOUDIA ARAB</a></li>
                        <li><a className='hover:text-red-500'>UNITED STATE</a></li>
                        <li><a className='hover:text-red-500'>UNITED KINGDOM</a></li>
                        <li><a className='hover:text-red-500'>AUSTRALIA</a></li>
                        <li><a className='hover:text-red-500'>CANADA</a></li>
                        <li><a className='hover:text-red-500'>SINGAPUR</a></li>
                    </ul>
                </li>
                <li className='hover:text-red-500'><a>BLOG</a></li>
                <li className='hover:text-red-500'><a>CONTRACT</a></li>
                <button type="button" class="text-white bg-red-500 hover:bg-blue-800 rounded-lg text-md font-bold px-5 py-2.5 text-center inline-flex items-center">
                    GET QUOTE
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-9 h-9 ml-3 -mr-3" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fill="white"></path> </svg>
                </button>
            </ul>
        </div>

    </div>
    );
};

export default Nav;