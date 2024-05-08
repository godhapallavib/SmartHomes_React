import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LeftNavigationBar from './Components/LeftNavigationBar/LeftNavigationBar';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Provider,connect } from 'react-redux';
import store from './Store/Store'; // Import your Redux store
import all_product from './Components/Assets/all_product';
import OrderSuccess from './Pages/OrderSuccess';
import LoginPage from './Pages/LoginPage';
import ProductModify from './Pages/ProductModify';
import ProductCategory from './Pages/ProductCategory';
import ProductCrud from './Pages/ProductCrud';
import OrderModify from './Pages/OrderModify';
import OrderCrud from './Pages/OrderCrud';


function App({registration}) {
   
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <NavBarGeneric /> */}
        <div className='main-content'>
          {registration.length>0 && <LeftNavigationBar />}
        <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path="/productModify/:productUpdate" element={<ProductModify/>}/>
          <Route path="/orderModify/:orderUpdate" element={<OrderModify/>}/>
          <Route path='/orderadded' element={<OrderCrud orderUpdate="added" />}/>
          <Route path='/orderupdated' element={<OrderCrud orderUpdate="updated" />}/>
          <Route path='/orderdeleted' element={<OrderCrud orderUpdate="deleted" />}/>

          <Route path='/smartdoorbell' element={<ShopCategory category="smartdoorbell" />} />
          <Route path='/smartdoorlock' element={<ShopCategory category="smartdoorlock" />} />
          <Route path='/smartspeaker' element={<ShopCategory category="smartspeaker" />} />
          <Route path='/smartlighting' element={<ShopCategory category="smartlighting" />} />
          <Route path='/smartthermostat' element={<ShopCategory category="smartthermostat" />} />

          <Route path='/ConsoleList' element={<ProductCategory category="smartdoorbell" />} />
          <Route path='/GamesList' element={<ProductCategory category="smartdoorlock" />} />
          <Route path='/TabletList' element={<ProductCategory category="smartspeaker" />} />
          <Route path='/LightingList' element={<ProductCategory category="smartlighting" />} />
          <Route path='/ThermostatList' element={<ProductCategory category="smartthermostat" />} />
          <Route path='/AccessoryList' element={<ProductCategory category="accessory" />} />
          <Route path='/productadded' element={<ProductCrud productUpdate="added" />}/>
          <Route path='/productupdated' element={<ProductCrud productUpdate="updated" />}/>
          <Route path='/productdeleted' element={<ProductCrud productUpdate="deleted" />}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route  path='/cart' element={<Cart />} />
          <Route path='/orders' element={<OrderSuccess/>}/>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/loginPage' element={<LoginPage/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
   
    registration:state.registration,
  };
};

export default connect(mapStateToProps)(App);
