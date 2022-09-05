
import './App.css';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
 
  const onAdd = () =>{
      
          alert('PRODUCTO AGREGADO !');
      return () => {};
  }

return(
      <> 
        <Header/>
        
        <Main/>
        <ItemListContainer/>
        <ItemDetailContainer/>
      
      </>
);

};



export default App;
