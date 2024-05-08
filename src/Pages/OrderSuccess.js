import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');
  const orderType = searchParams.get('orderType');

  return (
    <div>
      <div>
        <h2>
          <a>Order Summary:</a>
        </h2>
        <div>
          {/* <h3> the user address is userAddress</h3> */}
          <h2>Your Order is stored </h2>
          <h2>Your Order No is {orderId} </h2>
          <h2>Your {orderType} Date is 11-20-2023 </h2>
          <h2>
            Note: You can cancel an order 5 business days before the delivery date i.e. 11-15-2023
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
