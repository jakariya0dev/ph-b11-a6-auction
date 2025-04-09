import React from 'react'

export default function Footer() {
  return (
    <div className='footer bg-white text-black p-10 mx-auto'>
        <p className='text-4xl mx-auto flex'>Auction<span className='font-bold text-yellow-400'>Gallery</span></p>
        <p className='text-2xl mx-auto'>Bid. Win. Own.</p>
        <div className='footer-links flex justify-center gap-8 text-xl mx-auto'>
            <a href="#">Home</a>
            <a href="#">Auctions</a>
            <a href="#">Categories</a>
            <a href="#">How to works</a>
        </div>
        <p className='text-xl mx-auto'>©2025 AuctionHub. All rights reserved.</p>
    </div>
  )
}
