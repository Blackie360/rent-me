import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing Map Marker Icon from React Icons

function ProductMenu() {
  const products = [
    {
      id: 1,
      imageUrl: "https://unsplash.com/photos/a-living-room-with-a-white-couch-and-a-large-window-2ld4scSpnzM",
      name: "Park & Chill",
      price: "ksh. 2600/-",
      location: "Naivasha",
      isNew: false
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1635286721033-e11cf9e632c4?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Light Shift",
      price: "ksh. 3000/-",
      location: "KORR STABLES",
      isNew: true
    },
    {
      id: 3,
      imageUrl: "https://www.property24.co.ke/3-bedroom-apartment-flat-to-rent-in-nyali-114320134",
      name: "Another Toy",
      price: "ksh. 2500/-",
      location: "PIXXEL YARD",
      isNew: true
    },
    // Add more products as needed
    {
      id: 4,
      imageUrl: "https://www.property24.co.ke/3-bedroom-apartment-flat-to-rent-in-nyali-114309424",
      name: "mikindani",
      price: "ksh. 1500/-",
      location: "Kitchenette, Kanjata Street",
      isNew: true
    },
    {
      id: 5,
      imageUrl: "https://www.property24.co.ke/2-bedroom-apartment-flat-to-rent-in-nyali-114303621",
      name: "bamburi",
      price: "ksh. 0/-",
      location: "mombasa",
      isNew: true
    },
    {
      id: 6,
      imageUrl: "https://www.property24.co.ke/3-bedroom-apartment-flat-to-rent-in-nyali-114309373",
      name: "BOOMFEST ",
      price: "ksh. 3000/-",
      location: "Miritini",
      isNew: true
    },
    // Add more products as needed
  ];

  return (
    <div className='lg:flex flex-wrap justify-center gap-2 mb-12'>
      {products.map(product => (
        <div key={product.id} className="group relative overflow-hidden w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 mb-4">
          
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
