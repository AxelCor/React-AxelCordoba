
import './App.css';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Cart} from './components/Cart/Cart';
import {CartProvider} from './context/CartContext';

const App = () => {
 
  

return(
  <CartProvider>
      <BrowserRouter> 
        <Header/>
        <Main/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
);

};



export default App;
