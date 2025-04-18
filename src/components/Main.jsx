import { Suspense, use, useEffect, useState } from "react"
import { BiHeart } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import EmptyFav from "./EmptyFav";

export default function Main(props) {

    const [totalAmount, setTotalAmount] = useState(0);
    const auctions = use(props.auctions)

    useEffect(() => {
        let total = 0;
        props.favAuctions.forEach(id => {
            const auction = auctions.find(auction => auction.id === id);
            if (auction) {
                total += auction.currentBidPrice;
            }
        });
        setTotalAmount(total);
    }, [props.favAuctions, auctions]);

    const addFavorite = (id) => {

        props.setFabAuctions([...props.favAuctions, id])
        console.log(props.favAuctions)
        toast.success('Item successfully added!!', {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
            });

    }
    const removeFavorite = (id) => {
        console.log(id);
        let newFavAuctions = props.favAuctions.filter(favId => favId !== id);
        props.setFabAuctions(newFavAuctions);
        toast.success('Item successfully removed!!', {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
            });
    }

  return (
    <main className='bg-blue-100'>
        <ToastContainer />
        <div className='w-11/12 mx-auto py-10 text-purple-900'>
            <h1 className='text-2xl font-bold mb-2'>Favorite Items</h1>
            <p className='mb-8'>Discover and bid on extraordinary items</p>

            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className='bg-white rounded-lg p-4 lg:col-span-2'>
                    <table className='table-auto w-full border-1 border-gray-300'>
                        <thead>
                            <tr className="font-bold text-left border-b-1 border-gray-300">
                                <td className="py-2 px-4">Items</td>
                                <td className="py-2 px-4">Current Bid</td>
                                <td className="py-2 px-4">Time Left</td>
                                <td className="py-2 px-4 text-center">Bid Now</td>
                            </tr>
                        </thead>

                        <tbody>
                            {auctions.map((auction) =>  (
                                <tr key={auction.id} className="border-b-2 border-gray-300 hover:bg-gray-50">
                                    <td className="flex items-center py-4 pl-4 text-xl">
                                        <img src={auction.image} alt={auction.title} className="w-24 h-24 rounded-lg mr-4" />
                                        {auction.title}</td>
                                    <td className="pl-4 font-bold">${auction.currentBidPrice}</td>
                                    <td className="pl-4 font-bold">{auction.timeLeft}</td>
                                    <td className='text-center font-bold'>
                                        <button onClick={() => addFavorite(auction.id)} disabled={props.favAuctions.includes(auction.id)}>
                                            {props.favAuctions.includes(auction.id) ? <BiSolidHeart className="text-red-500 text-4xl" /> : <BiHeart className="text-gray-500 text-4xl" />}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                
                <div className='bg-white rounded-lg p-4'>
                    <h2 className='text-2xl font-bold mb-2 pb-4 text-center border-b-2 border-gray-300'>Upcoming Auctions</h2>

                    {
                        props.favAuctions.length > 0 ? props.favAuctions.map(id => (
                            <div className="flex items-center py-2 border-b-2 border-gray-300" key={id}>
                                <img src={auctions.find(auction => auction.id == id).image} className="w-16 h-16 rounded-lg mr-4" />
                                <div>
                                    <p>{auctions.find(auction => auction.id == id).title}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <p>${auctions.find(auction => auction.id == id).currentBidPrice}</p>
                                        <p>Bids: {auctions.find(auction => auction.id == id).bidsCount}</p>
                                    </div>
                                </div>
                                <button className="ml-auto text-red-500" onClick={() => removeFavorite(id)}>
                                    <BiX className="text-2xl" />
                                </button>
                            </div>
                        )) : <EmptyFav />
                    }
                    
                    <div className="flex items-center justify-between mt-4 text-2xl font-bold">
                        <p className='mb-2'>Total bids Amount</p>
                        <p className='mb-2'>${totalAmount}</p>
                    </div>
                </div>

            </div>


        </div>
        
    </main>
  )
}
