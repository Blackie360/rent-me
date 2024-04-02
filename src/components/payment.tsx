import React from "react";
import { Button } from '@/components/ui/button'; // Import reusable button component from shadcn
import { PaystackButton } from 'react-paystack';

interface PaymentMethodProps {
  amount: number;
  onSuccess: () => void; // Callback for successful payment
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ amount, onSuccess }) => {
  // Configuration for Paystack payment
  const config = {
    reference: (new Date()).getTime().toString(),
    email: 'olivehendendrilgen1@gmail.com',
    amount: amount * 100,
    publicKey: 'pk_test_a7961d4fbeaf8f2da658a5cd92df761415594574',
    currency: 'KES',
    channels: ['card', 'mobile_money'],
  };

  // Function to handle payment success
  const handleSuccess = () => {
    onSuccess(); // Call the callback function
  };

  return (
    <>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        {/* Payment method UI */}
      </div>
      <div className="payment text-end mt-14">
        <PaystackButton {...config} onSuccess={handleSuccess} text="Pay" className="rounded-md px-4 py-2 bg-gray-300 hover:bg-slate-900 hover:text-white text-gray-800 font-bold" />
      </div>
    </>
  );
};

export default PaymentMethod;
