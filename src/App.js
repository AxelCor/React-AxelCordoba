import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Cart} from './components/Cart/Cart';
import {CartProvider} from './context/CartContext';
import {Item} from './components/Item/Item';

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
        <Route path='/Item/:itemId' element={<Item/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
);

};



export default App;
