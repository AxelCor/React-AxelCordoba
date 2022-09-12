
import './App.css';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {cart} from './components/cart/cart';

const App = () => {
 
  

return(
      <BrowserRouter> 
        <Header/>
        <Main/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
);

};



export default App;
