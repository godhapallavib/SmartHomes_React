import React, { useContext, useState } from 'react';
import { connect, useDispatch } from 'react-redux'; // Import connect from react-redux
import CartRow from './CartRow'; // Assuming you have a CartRow component
import PropTypes from 'prop-types';
import { ShopContext } from '../Context/ShopContext';
import './Css/Cart.css'
import { createOrder, generateOrderId } from '../Reducer/orderReducer';
import { useNavigate } from 'react-router-dom';
import { CartTypes } from '../Reducer/cartReducer';
import Popular from '../Components/Popular/Popular'

function Cart({ cart, items, order }) {
  const [name, setName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState('');
  const [orderType, setOrderTpye] = useState('Home delivery');
  const [instorePickup, setInstorePickup] = useState('--------------------');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const {all_product}=useContext(ShopContext);
  console.log(all_product)
  const dispatch= useDispatch();
  const navigate  = useNavigate ();

  const cartAccessories = cart.reduce((acc, item) => {
    const detailItem = all_product.find((i) => i.id === item.id);
    if (detailItem && detailItem.accessories) {
      detailItem.accessories.accessory.forEach((accessoryItem) => {
        const accessoryItemFound=all_product.find((i)=>i.id==accessoryItem);
        if(accessoryItemFound){
          acc.push({...accessoryItemFound});
        }
      });
      
     
    }
    console.log(acc)
    return acc;
  }, []);

  const subTotal = cart.reduce((acc, item) => {
    const detailItem = all_product.find((i) => i.id === item.id);
    const itemPrice = detailItem.salePrice ?? detailItem.price;
    return item.quantity * itemPrice + acc;
  }, 0);

  const taxPercentage = parseInt(zipCode.substring(0, 1) || '0', 10) + 1;
  const taxRate = taxPercentage / 100;
  const tax = subTotal * taxRate;
  const total = subTotal + tax;
  const isFormValid = zipCode.length === 5 && name.trim();

  const submitOrder = (event) => {
    event.preventDefault();
    console.log('name: ', name);
    console.log('phone: ', phone);
    console.log('zipcode: ', zipCode);
    console.log('credit: ', creditCardNumber);
    console.log('street: ', street);
    console.log('city: ', city);
    console.log('statte: ', states);
    console.log('ordertype: ', orderType);
    console.log('instore: ', instorePickup);

    //const orderId= generateOrderId(order);

    dispatch(
      createOrder({
         orderId: generateOrderId(order), // You need to implement generateOrderId
        cart: cart, // Provide the cart id
        name,
        creditCardNumber,
        street,
        city,
        states,
        zipCode,
        orderType,
        instorePickup,
      })
    );


    //console.log("order state ", order);
   // console.log(" cart state", this.state);
   dispatch({ type: CartTypes.CLEAR });
   navigate(`/orders?orderId=${generateOrderId(order)}&orderType=${orderType}`);
  };

  const setFormattedPhone = (newNumber) => {
    const digits = newNumber.replace(/\D/g, '');
    let formatted = digits.substring(0, 3);
    if (digits.length === 3 && newNumber[3] === '-') {
      formatted = `${formatted}-`;
    } else if (digits.length > 3) {
      formatted = `${formatted}-${digits.substring(3, 6)}`;
    }
    if (digits.length === 6 && newNumber[7] === '-') {
      formatted = `${formatted}-`;
    } else if (digits.length > 6) {
      formatted = `${formatted}-${digits.substring(6, 10)}`;
    }
    setPhone(formatted);
  };
  console.log(cartAccessories)
  return (
    <div className="cart-component">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartRow 
                  key={item.id}
                  cartItem={item}
                  items={all_product}
                />
              ))}
            </tbody>
          </table>
          <div>
            Subtotal: $
            {subTotal.toFixed(2)}
            <div> 
            <Popular accessories={cartAccessories}/>
            </div>
          </div>
          { zipCode.length === 5
            ? (
              <>
                <div>
                  Tax: $
                  {tax.toFixed(2)}
                </div>
                <div>
                  Total: $
                  { total.toFixed(2) }
                </div>
              </>
            ) : (
              <div className="warning">Enter ZIP Code to get total</div>
            )}
          <h2>Checkout</h2>
          <form onSubmit={submitOrder}>
          <label htmlFor="creditCardNumber">
              Credit Card Number
              <input
                id="creditCardNumber"
                type="text"
                value={creditCardNumber}
                onChange={(event) => setCreditCardNumber(event.target.value)}
                required
              />
              </label>
            <label htmlFor="name">
             Customer Address Name
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label htmlFor="street">
            Street
              <input
                id="street"
                type="text"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                required
              />
            </label>
            <label htmlFor="city">
            City
              <input
                id="city"
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              />
            </label>
            <label htmlFor="states">
            State
              <input
                id="states"
                type="text"
                value={states}
                onChange={(event) => setStates(event.target.value)}
                required
              />
            </label>

            <label htmlFor="phone">
              Phone Number
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => setFormattedPhone(event.target.value)}
              />
            </label>
            <label htmlFor="zipcode">
              ZIP Code
              <input
                id="zipcode"
                type="text"
                maxLength="5"
                inputMode="numeric"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
                required
              />
            </label>
            <label htmlFor="orderTpye">
             Order Type
              <select
                id="orderTpye"
                value={orderType}
                onChange={(event) => setOrderTpye(event.target.value)}
                required
              >
                <option value='Home delivery' selected>Home delivery</option><option value='In store pickup'>In store pickup</option>
                </select>
            </label>
            <label htmlFor="instorePickup">
            In-store Pickup Locations
              <select
                id="instorePickup"
                value={instorePickup}
                onChange={(event) => setInstorePickup(event.target.value)}
                required
              >
                <option value='--------------------' selected>------------------</option><option value='Smartgoodsstore'> Smart goods store,6410 N Clark St</option><option value='furniturestore'>Furniture store in Skokie, Illinois</option><option value='targetstore'> Target store 6422 N Sheridan Rd</option><option value='electronicsstore'>Electronics store 1000 W North Ave</option>
        <option value='homeimprovementstore'>Home improvement store 6211 N Lincoln Ave</option>
       <option value='appliancestore'>Appliance store 1300 W North Ave</option>
        <option value='casonastore'> Casona store 5241 N Clark St</option>
        <option value='lowesstore'>lowes store 1360 N Ashland Ave</option>
        <option value='homegoodsstore'> Home goods store 1840 N Clybourn Ave</option>
        <option value='walmartstore'>Walmart store 4650 W North Ave</option>
                </select>
            </label>

            <button type="submit" disabled={!isFormValid}>
              Order Now
            </button>
          </form>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  order: PropTypes.shape({
    orderId:PropTypes.number,
    cart: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    creditCardNumber: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
    orderType: PropTypes.string,
    instorePickup: PropTypes.string,
  }).isRequired,
  items: PropTypes.array.isRequired, // Adjust the PropTypes as needed
};

const mapStateToProps = (state) => {
  console.log("mapstate ", state);
  return {
    cart: state.cart, // Assuming "cart" is the key under which the cart data is stored in your store
    order : state.order,
   // register : state.register,
  };
};

const ConnectedCart = connect(mapStateToProps)(Cart);

export default ConnectedCart;




