
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Main from './components/Main'
import Navbar from './components/Navbar'
// import { fetchActiveAuctions } from './utils/Functions'
import React, {useState, Suspense } from 'react'

const auctions = fetch('/bids.json').then(res => res.json());

function App() {

  const [favAuctions, setFabAuctions] = useState([]);

  return (
    <>
      <Navbar favAuctions={favAuctions} />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Main auctions={auctions} setFabAuctions={setFabAuctions} favAuctions={favAuctions}/>
      </Suspense>
      
      <Footer />
    </>
  )
}

export default App
