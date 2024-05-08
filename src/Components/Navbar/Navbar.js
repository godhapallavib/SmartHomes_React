import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/site/smart-home-icon.png'
import { Link,useNavigate } from 'react-router-dom';
import { getTotalCartItems } from '../../Reducer/cartReducer';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { RegisterTypes } from '../../Reducer/registerReducer';
import LeftNavigationBar from '../LeftNavigationBar/LeftNavigationBar';
const Navbar = ({ totalCartItems,registration }) => {
    const[menu,setMenu]= useState("home");
    const dispatch=useDispatch();
    const navigate =useNavigate();
    console.log(registration);
    const handleLogout=()=>{
      navigate("/login")
      dispatch({type:RegisterTypes.LOGOUT,payload:{}});
    }
  return (
    <>
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt=""/>
        {/* <p> SmartHomes</p> */}
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration: 'none',  }} to='/'>SMARTHOMES</Link> {menu==="home"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("smartdoorbell")}}> <Link style={{textDecoration: 'none'}} to='/smartdoorbell'>Smart Doorbell</Link> {menu==="smartdoorbell"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("smartdoorlock")}}> <Link style={{textDecoration: 'none'}} to ='/smartdoorlock'>Smart Doorlock </Link> {menu==="smartdoorlock"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartspeaker")}}> <Link style={{textDecoration: 'none'}} to ='/smartspeaker'>Smart Speaker</Link>{menu==="smartspeaker"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartlighting")}}> <Link style={{textDecoration: 'none'}} to ='/smartlighting'>Smart Lighting</Link >{menu==="smartlighting"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartthermostat")}}> <Link style={{textDecoration: 'none'}} to ='/smartthermostat'>Smart Thermostat</Link>{menu==="smartthermostat"?<hr/>:<></>}</li>
        {registration?.[0]?.type==="retailer"&&
        
        <>
        <li> <Link style={{textDecoration: 'none'}} to ='/productModify/add'>Add Product</Link></li>
        <li> <Link style={{textDecoration: 'none'}} to ='/productModify/update'>Update Product</Link></li>
        <li> <Link style={{textDecoration: 'none'}} to ='/productModify/delete'>Delete Product</Link></li>
        
        </>
        }
        {registration?.[0]?.type==="salesman"&&
        
        <>
        <li> <Link style={{textDecoration: 'none'}} to ='/orderModify/add'>Add Order</Link></li>
        <li> <Link style={{textDecoration: 'none'}} to ='/orderModify/update'>Update Order</Link></li>
        <li> <Link style={{textDecoration: 'none'}} to ='/orderModify/delete'>Delete Order</Link></li>
        
        </>
        }
    </ul>
    <div className="nav-login-cart">
      {registration?.[0]?.name ? 
      
      <>
        <p style={{color:"white"}}>Welcome {registration?.[0]?.name}</p>
      <button onClick={()=>handleLogout()}>Logout</button>
      </> 
    
      
      
      :<Link style={{textDecoration: 'none'}} to ='/login'> <button>Login/Signup</button></Link>}
       
        <Link style={{textDecoration: 'none'}} to ='/cart'> <div><FontAwesomeIcon icon={faShoppingCart} /></div> </Link>
        <div className="nav-cart-count">{totalCartItems}</div>
    </div>
    </div>
    {/* <LeftNavigationBar /> */}
    </>

  )
}

const mapStateToProps = (state) => {
  return {
    totalCartItems: getTotalCartItems(state.cart),
    registration:state.registration,
  };
};

export default connect(mapStateToProps)(Navbar);
