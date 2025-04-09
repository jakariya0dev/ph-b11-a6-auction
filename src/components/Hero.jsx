import React, { Component } from 'react'
import banner from './../assets/images/banner-min.jpg'

export default class Hero extends Component {
  render() {
    return (
      <div className='hero w-full h-[80vh] bg-base-200 object-cover flex items-center' style={{ backgroundImage: `url(${banner})` }}>
        <div className='bg-[#0000007b] w-full h-full flex items-center'>
          <div className='w-11/12 mx-auto'>
              <div className='w-5/12'>
                  <h1 className='text-5xl font-bold'>Bid on Unique Items from Around the World</h1>
                  <p className='text-2xl my-8'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                  <a href="#" className='bg-white text-black px-6 py-3 rounded-full font-bold'>Explore Auctions</a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
