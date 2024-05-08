import React, { useState } from 'react'
import '../Pages/Css/Cart.css'
import { connect, useDispatch } from 'react-redux';
import { createOrder, deleteOrder, generateOrderId, getMaxOrderId, updateOrder } from '../Reducer/orderReducer';
import { useNavigate ,useParams} from 'react-router-dom';


const OrderModify = ({ order}) => {
    const {orderUpdate}=useParams();
    const [name, setName] = useState('');
    const [orderId, setOrderId] = useState(null);
    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity]=useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [states, setStates] = useState('');
    const [orderType, setOrderTpye] = useState('Home delivery');
    const [instorePickup, setInstorePickup] = useState('--------------------');
    const [errorMessage, setErrorMessage] = useState('');
    const [zipCode, setZipCode] = useState('');
    const dispatch =useDispatch();
    const navigate=useNavigate();
    

    const submitAddOrder=(event)=>{
        event.preventDefault();

        if(orderUpdate==='add'){
        dispatch(
            createOrder({
               orderId: generateOrderId(order), // You need to implement generateOrderId
              cart: [{id:productName,quantity:productQuantity}], // Provide the cart id
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
          navigate('/orderadded');
        }
        else{
            console.log('getmaxorder',getMaxOrderId(order));
            console.log(orderId);
            console.log('getMaxOrderId(order)',getMaxOrderId(order));
            console.log(orderId<=getMaxOrderId(order))
            const orderId1= Number(orderId);
            if(orderId1<=getMaxOrderId(order)){
            dispatch(
                updateOrder(orderId1,{
                   name,
                   creditCardNumber,
                   street,
                   city,
                   states,
                   zipCode,
                   orderType,
                   instorePickup,
                 } )
            )

            console.log("after updating order", order);
            navigate('/orderupdated');
                }
                else{
                    setErrorMessage(`Order with ID ${orderId} not found.`);
                    console.error(`Order with ID ${orderId} not found.`);
                }
        }

    }

    const submitDeleteOrder =(event)=>{
        event.preventDefault();
        const orderId1= Number(orderId);
        if(orderId1<=getMaxOrderId(order)){
        dispatch(deleteOrder(orderId1));
        navigate('/orderdeleted');
        }
        else{
            setErrorMessage(`Order with ID ${orderId} not found.`);
             console.error(`Order with ID ${orderId} not found.`);
        }
    }

  return (
    orderUpdate==='add'|| orderUpdate==='update'?(
        <div className='cart-component'>
             <h2>{orderUpdate === 'add' ? 'Add Order' : 'Update Order'}</h2>
              <form onSubmit={submitAddOrder}>
                {
                orderUpdate === 'update' ?(
                    <label htmlFor="orderId">
                    Order Id
                      <input
                        id="orderId"
                        type="numeric"
                        value={orderId}
                        onChange={(event) => setOrderId(event.target.value)}
                        required
                      />
                    </label>
                ):(  <><label htmlFor="productName">
                              Product Name
                              <input
                                  id="productName"
                                  type="text"
                                  value={productName}
                                  onChange={(event) => setProductName(event.target.value)}
                                  required />
                          </label><label htmlFor="productQuantity">
                                  Product Quantity
                                  <input
                                      id="productQuantity"
                                      type="numeric"
                                      value={productQuantity}
                                      onChange={(event) => setProductQuantity(event.target.value)}
                                      required />
                              </label></>)

                }
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
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {orderUpdate === 'add' ? (
                  <button type="submit">Add</button>
                ) : (
                  <button type="submit">Update</button>
                )}
              </form>
        </div>
        ):
        (
          <div className='cart-component'>
          <h2>Delete Order</h2>
           <form onSubmit={submitDeleteOrder}>
           <label htmlFor="orderId">
              Order ID
               <input
                 id="orderId"
                 type="numeric"
                 value={orderId}
                 onChange={(event) => setOrderId(event.target.value)}
                 required
               />
               </label>
               {errorMessage && <div className="error-message">{errorMessage}</div>}
             <button type="submit" >
              DeleteOrder
             </button>
           </form>
     </div>
        )
      )
}


const mapStateToProps = (state) => {
    console.log("mapstate ", state);
    return {
      order : state.order,
     // register : state.register,
    };
  };
  
  const ConnectedOrderModify = connect(mapStateToProps)(OrderModify);
  
  export default ConnectedOrderModify;
