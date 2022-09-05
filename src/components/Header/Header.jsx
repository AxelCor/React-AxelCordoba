import {CartWidget} from './CartWidget';
import './Header.css'

const Header = () => {
		return (<>
	
  <header>
    <div className="headerContainer">
      <div className="headerContainerDiv"> 
        <ul className="headerUl">
          <li><a href="index.html" className="ulLi">INICIO</a></li>
          <li><a href="./pages/indumentaria.html" className="ulLi1">Indumentaria</a></li>
          <li><a href="./pages/comprando.html" className="ulLi1">Ofertas</a></li>
          <li><a href="./pages/contacto.html" className="ulLi1">Contacto</a></li>
        </ul>
        <div className='flex'>
        <form className="headerForm">
          <input type="search" className="headerForm1" placeholder="Busqueda.." aria-label="Search"></input>
        </form>
        <div>
          <a href="./pages/usuario.html"><button type="button" className="headerP">Perfil</button></a>
          <a href="./pages/login.html"><button type="button" className="headerL">Login</button></a> 
        </div><CartWidget/>
        </div>
      </div>
    </div>
    
  </header>
				</>
			);
};

export default Header;

