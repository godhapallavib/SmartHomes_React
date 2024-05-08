import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                category={item.category}
                price={item.price}
                manufacturer={item.manufacturer}
                condition={item.condition}
                discount={item.discount}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

ShopCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
