import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartTypes, findItem } from '../Reducer/cartReducer';
import { ShopContext } from '../Context/ShopContext';
import { useDispatch } from 'react-redux';

function CartRow({ cartItem, items }) {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch({ type: CartTypes.REMOVE, id: item.id });
  };
  
 // const item = items.find((i) => i.id === cartItem.id);
 console.log(cartItem);
 const {all_product}=useContext(ShopContext);

 console.log("allitems",all_product);
  //const item = (all_product, id) => {all_product.find((item) => item.id === cartItem.id) };
  //const item=findItem(items,cartItem.id);

  function findItemById(items, id) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        return items[i];
      }
    }
    return null; // Return null if the item is not found
  }
  
 const item = findItemById(all_product,cartItem.id);
  console.log("cartitem ",item);
  if (!item) {
    return (
      <tr>
        <td colSpan="4">Item not found</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item.name}</td>
      <td>
        $
        {((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
      </td>
      <td>
      <button
          type="button"
          onClick={removeItemFromCart}
        >
          X
        </button>
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    salePrice: PropTypes.number,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default CartRow;



// import React from 'react'

// const CartRow = () => {
//   return (
//     <div>CartRow</div>
//   )
// }

// export default CartRow


// import React from 'react';
// import PropTypes from 'prop-types';
// import { CartTypes } from '../Reducer/cartReducer';

// function CartRow({ cartItem, dispatch, items }) {
//   const item = items.find((i) => i.id === cartItem.id);

//   if (!items || !items.length) {
//     // Handle the case when items are empty or undefined
//     return null;
//   }

//   //const item = items.find((i) => i.itemId === cartItem.itemId);

//   if (!item) {
//     // Handle the case where the item is not found
//     return (
//       <tr>
//         <td colSpan="4">Item not found</td>
//       </tr>
//     );
//   }

//   const removeItemFromCart = () => {
//     dispatch({ type: CartTypes.REMOVE, id: item.id });
//   };

//   return (
//     <tr>
//       <td>{cartItem.quantity}</td>
//       <td>{item.title}</td>
//       <td>
//         $
//         {((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
//       </td>
//       <td>
//         <button
//           type="button"
//           onClick={removeItemFromCart}
//         >
//           Remove
//         </button>
//       </td>
//     </tr>
//   );
// }

// CartRow.propTypes = {
//   cartItem: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   }).isRequired,
//   dispatch: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     salePrice: PropTypes.number,
//     price: PropTypes.number.isRequired,
//   })).isRequired,
// };

// export default CartRow;
