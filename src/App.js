
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  const saludo = 'Bienvenidos a Colombia'

return(
      <> 
        <Header/>
        <Main/>
        <ItemListContainer saludo={saludo}/>
        <Footer/>
      </>
);

};



export default App;
