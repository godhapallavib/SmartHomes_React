import React, { useState } from 'react';

import './Css/LoginPage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterTypes } from '../Reducer/registerReducer';
export const USERS = [
  {
    id: "1",
    name: "godha",
    password: "password",
    user_type: "customer",
  },
  {
    id: "2",
    name: "manager",
    password: "password",
    user_type: "retailer",
  },
  {
    id: "3",
    name: "sales",
    password: "password",
    user_type: "salesman",
  },
];


const LoginPage = (registration) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    usertype: 'customer',
  });
  const navigate  = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const dispatch=useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = checkCredentials(formData.username, formData.password, formData.usertype);

    if (data) {
      localStorage.setItem("userDetails", JSON.stringify(data));
      localStorage.setItem("userId", data.id);
      dispatch({type:RegisterTypes.LOGIN,payload:data});
      window.location.href = "/";
    } else {
      alert("User Not Found !");
      setFormData({
        username: '',
        password: '',
        usertype: 'customer',
      })
    }
  };

  const checkCredentials = (name, pass, type) => {
    const user = USERS.filter(
      (user) =>
        user.name === name && user.user_type === type && user.password === pass
    );
    if (user.length) {
      let data = {
        id: user[0].id,
        name: user[0].name,
        type: user[0].user_type,
      };
      return data;
    } else {
      return null;
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='login-field'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Enter your username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='login-field'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='login-field'>
            <label htmlFor='usertype'>UserType:</label>
            <select
              id='usertype'
              name='usertype'
              value={formData.usertype}
              onChange={handleChange}
            >
              <option value='customer'>Customer</option>
              <option value='retailer'>Store Manager</option>
              <option value='salesman'>Salesman</option>
            </select>
          </div>
          <button type='submit'>Login</button>
        </form>
        <p className='login-signup'>
          Don't have an account? <span>Sign up here</span>
        </p>
      </div>
    </div>
  );
};

// LoginPage.PropTypes = {
//   registration: PropTypes.arrayOf(PropTypes.shape({
//     userName: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     repassword: PropTypes.string.isRequired,
//     userType: PropTypes.string.isRequired,
//   })).isRequired,
// };

const mapStateToProps = (state) => {
  console.log("mapstate ", state);
  return {
    registration : state.registration,
  };
};

const ConnectedLoginPage = connect(mapStateToProps)(LoginPage);

export default ConnectedLoginPage;
