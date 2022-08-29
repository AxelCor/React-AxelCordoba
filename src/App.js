
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
  const saludo = 'Bienvenidos a Colombia'
  const onAdd = () =>{
      
          alert('PRODUCTO AGREGADO !');
      return () => {};
  }

return(
      <> 
        <Header/>
        <ItemCount stock={10} inicial={1} onAdd={onAdd}/>
        <Main/>
        <ItemListContainer saludo={saludo}/>
        <Footer/>
      </>
);

};



export default App;
