import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { CartTypes } from '../../Reducer/cartReducer';
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';


const Item = (props) => {
  const dispatch = useDispatch();
  const navigate  = useNavigate ();


  const handleAddToCart = () => {
    dispatch({ type: CartTypes.ADD, id: props.id });
    console.log(props.id);
    navigate('/cart'); 

  };
  console.log(props)

  return (
    <div className='item'>
      <img src={require(`../Assets/${props.category}/${props.image}`)} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price">
          ${props.price}
        </div>
      </div>
      <p>Manufacturer: {props.manufacturer}</p>
      <p> Condition: {props.condition}</p>
      <p> Discount: {props.discount}</p>
      <button onClick={handleAddToCart} >Buy Now</button>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  manufacturer: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
};

export default Item;
