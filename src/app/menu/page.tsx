'use client';
import React, { useState } from 'react';
import TopNav from '@/components/TopNav';
import ProductMenu from '@/components/ProductMenu';
import PaymentMethod from '../../components/payment';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import  Select  from '@/components/ui/select';



interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface Props {
  product: Product;
  ticketCount: number;
  onTicketCountChange: (count: number) => void;
  onBuyTickets: (data: any) => void;
  onClose: () => void;
}

function ProductDetailsModal({ product, ticketCount, onTicketCountChange, onBuyTickets, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [ticketCategory, setTicketCategory] = useState('Regular');

  const handleBuyTickets = () => {
    onBuyTickets({
      email,
      username,
      ticketCount,
      ticketCategory,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
      <div className="bg-white overflow-y-auto z-50 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          {product.name}
        </h2>
        <img
          src={product.image}
          alt={product.name}
          className="mt-4 w-full object-cover h-48"
        />
        <div className="mt-4">
        <label htmlFor="username" className="text-gray-700 mr-2">
            No. of Tickets :
          </label>
          <Input
            type="number"
            id="ticketCount"
            placeholder='Enter number of tickets'
            value={ticketCount}
            onChange={(e) => onTicketCountChange(parseInt(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-1"
          />
        </div>
        <div className="mt-4">
          <Input
            type="email"
            id="email"
            value={email}
            placeholder='Enter email address'
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1"
          />
        </div>
        <div className="mt-4">
          <Input
            type="text"
            id="username"
            value={username}
            placeholder='Enter username'
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1"
          />
        </div>
        <div className="mt-50 mr-2 ">
         <Select />
        </div>
        <div className="mt-4 flex justify-around gap-4">
          <Button
            onClick={onClose}
            className="bg-gray-300 mt-14 hover:bg-slate-900 hover:text-white px text-gray-800 font-bold rounded-md "
          >
            Close
          </Button>
          <PaymentMethod
            amount={product.price * ticketCount}
            onSuccess={handleBuyTickets}
          />
        </div>
      </div>
    </div>
  );
}

function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Vasha Fest",
      image: "https://storage.googleapis.com/m_tickets/assets/event_poster/park-and-chill-naivasha2024-03-29T20-36-13.894109.jpeg",
      price: 5000,
    },
    {
      id: 2,
      name: "Glory Fight",
      image: "https://storage.googleapis.com/m_tickets/assets/event_poster/ultimate-glory-fight2024-03-21T14-09-43.403674.jpeg",
      price: 7800,
    },
    {
      id: 3,
      name: "Kairo",
      image: "https://storage.googleapis.com/m_tickets/assets/event_poster/battle-of-x-khalif-kairo-vs-polo-kimani-2024-03-05T14-18-58.648089.jpg",
      price: 1000,
    },
    {
      id: 4,
      name: "Piano Fest",
      image: "https://storage.googleapis.com/m_tickets/assets/event_poster/kite-piano-fest-2024-03-15T09-03-30.403012.jpeg",
      price: 600,
    },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleTicketCountChange = (count: number) => {
    setTicketCount(count);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setTicketCount(1);
  };

  return (
    <div>
      <TopNav />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600"> ksh. {product.price}</p>
                <button onClick={() => handleProductClick(product)} className="mt-4 block w-full bg-slate-400 text-white  px-4 py-2 rounded-md text-center">
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-xl text-center font-bold text-gray-900 dark:text-white sm:text-3xl mb-4">Other Events you may like</h2>
      <ProductMenu />
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="flex items-center justify-center h-screen">
            <div className="bg-white text-slate-900 rounded-lg p-6">
              <ProductDetailsModal
                product={selectedProduct!}
                ticketCount={ticketCount}
                onTicketCountChange={handleTicketCountChange}
                onBuyTickets={(data) => console.log(data)} // Example onBuyTickets function, replace with actual implementation
                onClose={handleCloseModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
