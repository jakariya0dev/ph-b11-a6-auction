import React from 'react'

export default function Navbar({favAuctions}) {
  return (
    <div className='navbar-container bg-white text-black sticky top-0 shadow-lg w-full'>
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Auction<span className='font-bold text-yellow-400'>Gallery</span></a>
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
                <a className="btn btn-ghost btn-circle mr-2">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
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
