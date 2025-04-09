import React from 'react'
import { FaRegBell } from "react-icons/fa6";

export default function Navbar({favAuctions}) {
  return (
    <div className='navbar-container bg-white text-black sticky top-0 shadow-lg w-full'>
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <a href='#' className="text-xl text-purple-600">Auction<span className='font-bold text-yellow-400'>Gallery</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Auctions</a></li>
                    <li><a>Categories</a></li>
                    <li><a>How to works</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost btn-circle mr-5">
                    <div className="indicator">
                        <FaRegBell size={32}/>
                        <span className="badge badge-sm indicator-item">{favAuctions.length}</span>
                    </div>
                </a>
                <a className='btn btn-ghost btn-circle avatar'>
                    
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
