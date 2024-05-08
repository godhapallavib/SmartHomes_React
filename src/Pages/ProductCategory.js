import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Css/ProductCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { useLocation } from 'react-router-dom';

const ProductCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  const location = useLocation();
  const searchParams=new URLSearchParams(location.search);
  const maker = searchParams.get('maker');
  console.log(maker);

  return (
    <div className='shop-category'>
      <div className="productcategory-products">
        {all_product.map((item, i) => {
          if (category === item.category.toLowerCase() && maker === item.manufacturer.toLowerCase()) {
            return (
              <Item
                key={i}
                id={item.id}
                category={item.category}
                name={item.name}
                image={item.image}
                price={item.price}
                manufacturer={item.manufacturer}
                condition={item.condition}
                discount={item.discount}
                description={item.description}
                warranty={item.warranty}
                rebates={item.rebates}
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

ProductCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductCategory;