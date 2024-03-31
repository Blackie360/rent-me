import React from "react";
import { PaystackButton } from 'react-paystack';
import { PaystackProps } from "react-paystack/dist/types";


interface PaymentMethodProps {
  amount: number;
  onSuccess: () => void; // Callback for successful payment
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ amount, onSuccess }) => {
  const config: PaystackProps = {
    reference: (new Date()).getTime().toString(),
    email: 'olivehendendrilgen1@gmail.com',
    amount: amount * 100,
    publicKey: 'pk_test_a7961d4fbeaf8f2da658a5cd92df761415594574',
    currency: 'KES',
    channels: ['card', 'mobile_money'],
    // onSuccess: () => {
    //   onSuccess(); // Call the callback function
    // },
    // onClose: () => {
    //   // Handle close event if needed
    // }
  };

  return (
    <>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        {/* Payment method UI */}
      </div>
      <div className="payment text-end mt-5">
        <PaystackButton {...config} text="pay"  className="rounded-md p-4 bg-slate-400 text-whie"/>
      </div>
    </>
  );
};

export default PaymentMethod;
