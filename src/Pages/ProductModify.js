import React, { useContext, useState } from 'react'
import '../Pages/Css/Cart.css'
import { ShopContext } from '../Context/ShopContext';
import { useNavigate ,useParams} from 'react-router-dom';

const ProductModify = () => {
  const {productUpdate}=useParams();
 
  
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productCategory, setProductCategory] = useState('smartdoorbell');
    const [productManufacturer, setProductManufacturer] = useState('');
    const [productCondition, setProductCondition] = useState('');
    const [productDiscount, setProductDiscount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {all_product}= useContext(ShopContext);
    const navigate = useNavigate();


    const addProduct = (id, name, price, image, category, manufacturer, condition, discount, accessories = null) => {
      
      console.log("productId",id);
      console.log("productName",name);
      console.log("productPrice",price);
      console.log("productImage",image);
      console.log("productCategory",category);
      console.log("productManufacturer",manufacturer);
      console.log("productCondition",condition);
      console.log("productDiscount",discount);
        const newProduct = {
          id,
          name,
          price,
          image,
          category,
          manufacturer,
          condition,
          discount,
          accessories
        };
      
        all_product.push(newProduct);
        navigate('/productadded');
      };

      const updateProduct = (productId, updatedDetails) => {
        const productIndex = all_product.findIndex(product => product.id === productId);
      
        if (productIndex !== -1) {
          // If the product is found, update the specified fields
          all_product[productIndex] = {
            ...all_product[productIndex],
            ...  updatedDetails
          };
          navigate('/productupdated');
        } else {
          setErrorMessage(`Product with ID ${productId} not found.`);
          console.error(`Product with ID ${productId} not found.`);
        }
      };
      
      // Example usage:
      //updateProduct("Google Nest Doorbell (Wired)", { price: 219.99, discount: 15.0 });

      const deleteProduct = (productId) => {
        const productIndex = all_product.findIndex(product => product.id === productId);
      
        if (productIndex !== -1) {
          // If the product is found, remove it from the array
          all_product.splice(productIndex, 1);
          navigate('/productdeleted');
        } else {
          setErrorMessage(`Product with ID ${productId} not found.`);
          console.error(`Product with ID ${productId} not found.`);
        }
      };
      
      // Example usage:
      //deleteProduct("Google Nest Doorbell (Wired)");
      
      

    const submitAddProduct=(event)=>{
      event.preventDefault();
     console.log("productId",productId);
     console.log("productName",productName);
     console.log("productPrice",productPrice);
     console.log("productImage",productImage);
     console.log("productCategory",productCategory);
     console.log("productManufacturer",productManufacturer);
     console.log("productCondition",productCondition);
     console.log("productDiscount",productDiscount);
 
     if(productUpdate==='add'){
      // addProduct(
      //   "New Product ID",
      //   "New Product Name",
      //   99.99,
      //   "path/to/new_product_image.jpg",
      //   "smartdoorbell",
      //   "New Manufacturer",
      //   "New Condition",
      //   20.0,null
      // );
     addProduct(productId, productName, productPrice, productImage, productCategory, productManufacturer, productCondition, productDiscount,null);
     }
     else{
      const updatedDetails={
        name:productName,
        price:productPrice,
        image: productImage,
        category: productCategory,
        manufacturer: productManufacturer,
        condition: productCondition,
        discount: productDiscount,
      }
    updateProduct(productId,updatedDetails);
     }
    }

    const submitDeleteProduct=(event)=>{
      event.preventDefault();
      deleteProduct(productId);
    }

  return (
    productUpdate==='add'|| productUpdate==='update'?(
    <div className='cart-component'>
         <h2>{productUpdate === 'add' ? 'Add Product' : 'Update Product'}</h2>
          <form onSubmit={submitAddProduct}>
          <label htmlFor="productId">
             Product ID
              <input
                id="productId"
                type="text"
                value={productId}
                onChange={(event) => setProductId(event.target.value)}
                required
              />
              </label>
            <label htmlFor="productName">
            Product Name
              <input
                id="productName"
                type="text"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                required
              />
            </label>
            <label htmlFor="productPrice">
            Product Price
              <input
                id="productPrice"
                type="numeric"
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
                required
              />
            </label>
            <label htmlFor="productImage">
            Product Image
              <input
                id="productImage"
                type="text"
                value={productImage}
                onChange={(event) => setProductImage(event.target.value)}
                required
              />
            </label>
            <label htmlFor="productCategory">
            Product Category
              <select
                id="productCategory"
                value={productCategory}
                onChange={(event) => setProductCategory(event.target.value)}
                required
              >
                <option value='smartdoorbell' >smartdoorbell</option><option value='smartdoorlock'>smartdoorlock</option><option value='smartspeaker'>smartspeaker</option>
                <option value='smartlighting'>smartlighting</option>
                <option value='smartthermostat'>smartthermostat</option>
                </select>
            </label>
            <label htmlFor="productManufacturer">
            Product Manufacturer
              <input
                id="productManufacturer"
                type="text"
                value={productManufacturer}
                onChange={(event) => setProductManufacturer(event.target.value)}
                required
              />
            </label>

            <label htmlFor="productCondition">
            Product Condition
              <input
                id="productCondition"
                type="text"
                value={productCondition}
                onChange={(event) => setProductCondition(event.target.value)}
              />
            </label>
            <label htmlFor="productDiscount">
            Product Discount
              <input
                id="productDiscount"
                type="number"
                value={productDiscount}
                onChange={(event) => setProductDiscount(event.target.value)}
                required
              />
            </label>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {productUpdate === 'add' ? (
              <button type="submit">Add Product</button>
            ) : (
              <button type="submit">Update</button>
            )}
          </form>
    </div>
    ):
    (
      <div className='cart-component'>
      <h2>Delete Product</h2>
       <form onSubmit={submitDeleteProduct}>
       <label htmlFor="productId">
          Product ID
           <input
             id="productId"
             type="text"
             value={productId}
             onChange={(event) => setProductId(event.target.value)}
             required
           />
           </label>
           {errorMessage && <div className="error-message">{errorMessage}</div>}
         <button type="submit" >
          DeleteProduct
         </button>
       </form>
 </div>
    )
  )
}

export default ProductModify