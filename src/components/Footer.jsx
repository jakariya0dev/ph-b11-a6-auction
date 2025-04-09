import React from 'react'

export default function Footer() {
  return (
    <div className='bg-white text-black p-10 mx-auto'>
        <p className='text-4xl mx-auto flex justify-center mb-4'>Auction<span className='font-bold text-yellow-400'>Gallery</span></p>
        <p className='text-2xl mx-auto text-center mb-10'>Bid. Win. Own.</p>
        <div className='footer-links flex justify-center gap-8 text-xl mx-auto mb-4'>
            <a href="#">Home</a>
            <a href="#">Auctions</a>
            <a href="#">Categories</a>
            <a href="#">How to works</a>
        </div>
        <p className='text-xl text-center'>©2025 AuctionHub. All rights reserved.</p>
    </div>
  )
}
