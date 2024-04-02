import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing Map Marker Icon from React Icons

function ProductMenu() {
  const products = [
    {
      id: 1,
      imageUrl: "https://storage.googleapis.com/m_tickets/assets/event_poster/park-and-chill-naivasha2024-03-29T20-36-13.894109.jpeg",
      name: "Park & Chill",
      price: "ksh. 2600/-",
      location: "Naivasha",
      isNew: false
    },
    {
      id: 2,
      imageUrl: "https://storage.googleapis.com/m_tickets/assets/event_poster/light-shift-2024-03-18T13-33-09.278952.jpeg",
      name: "Light Shift",
      price: "ksh. 3000/-",
      location: "KORR STABLES",
      isNew: true
    },
    {
      id: 3,
      imageUrl: "https://storage.googleapis.com/m_tickets/assets/event_poster/the-jig-gig2024-03-16T10-14-02.400971.jpg",
      name: "Another Toy",
      price: "ksh. 2500/-",
      location: "PIXXEL YARD",
      isNew: true
    },
    // Add more products as needed
    {
      id: 4,
      imageUrl: "https://storage.googleapis.com/m_tickets/assets/event_poster/portable-live2024-03-27T18-28-44.917670.jpeg",
      name: "PORTABLE LIVE",
      price: "ksh. 1500/-",
      location: "Kitchenette, Kanjata Street",
      isNew: true
    },
    {
      id: 5,
      imageUrl: "https://storage.googleapis.com/m_tickets/assets/event_poster/4th-all-africa-congress2024-03-22T19-10-32.469228.jpeg",
      name: "4TH ALL AFRICA CONGRESS",
      price: "ksh. 0/-",
      location: "Arusha, Tanzania",
      isNew: true
    },
    {
      id: 6,
      imageUrl: "https://storage.googleapis.com/m_tickets/assets/event_poster/boomfest-20242024-03-19T19-52-14.390272.jpg",
      name: "BOOMFEST 2024",
      price: "ksh. 0/-",
      location: "THE A.S.K DOME",
      isNew: true
    },
    // Add more products as needed
  ];

  return (
    <div className='lg:flex flex-wrap justify-center gap-2 mb-12'>
      {products.map(product => (
        <div key={product.id} className="group relative overflow-hidden w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 mb-4">
          <img
            src={product.imageUrl}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="relative border border-gray-100 bg-white p-6">
            <div className='flex justify-between items-center'>
              {product.isNew ? (
                <span className="whitespace-nowrap bg-slate-400 text-white px-3 py-1.5 text-xs font-medium"> New </span>
              ) : (
                <span className="whitespace-nowrap bg-red-400 px-3 py-1.5 text-xs line-through  font-medium text-white"> Closed </span>
              )}
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-500 " /> {/* Map Marker Icon */}
                <span className="whitespace-nowrap text-gray-900 px-3 py-1.5 text-xs font-medium">{product.location}</span>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1.5 text-sm text-gray-700">{product.price}</p>
            <form className="mt-4">
              <button
                className="block w-full rounded bg-slate-400 text-white p-4 text-sm font-medium transition hover:scale-105"
              >
                Buy Ticket
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductMenu;
