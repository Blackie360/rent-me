// pages/index.tsx

import React from 'react';

const EventTicket: React.FC = () => {
  return (
    <div className=" p-8">
      <div className="max-w-lg mx-auto bg-gradient-to-r from-green-600 rounded-lg shadow-lg mt-10 overflow-hidden">
        <div className="flex items-center p-4">
          <img src="https://via.placeholder.com/150" alt="Event Image" className="w-20 h-20 object-cover rounded-md " />
          <div className="border-t border-dashed  border-gray-400 flex-grow ml-4"></div>
          <div className="qr-code w-20 h-20 border-2 border-dashed border-black"></div>
        </div>

        <div className="p-4">
          <h1 className="text-6xl font-extrabold mb-2">Nai Fest</h1>

          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2 font-bold">Date:</td>
                <td className="py-2">10.23.2025</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Location:</td>
                <td className="py-2">Band Street</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Time:</td>
                <td className="py-2">8:30 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 text-left">
          <p className="text-black text-2xl font-extrabold  mb-2 ml-1">Amount : <span className="text-black text-xl bg-white rounded-md px-2 py-1 font-bold ">Ksh. 1000/-</span></p>
        </div>

        <div className="p-4 text-right">
          <p className="text-black font-extrabold text-sm mb-2">Ticket Number : <span className="text-black font-bold">SB8596004</span></p>
        </div>
      </div>
    </div>
  );
};

export default EventTicket;
