import {CartWidget} from './CartWidget';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
		return (<>
	
  <header>
    <div className="headerContainer">
      <div className="headerContainerDiv"> 
        <ul className="headerUl">
          <li><Link className="ulLi" to='/' > INICIO</Link></li>
          <li><Link className="ulLi1" to='/category/Gorras' > Gorras</Link></li>
          <li><Link className="ulLi1" to='/category/Remeras' > Remeras</Link></li>
          <li><Link className="ulLi1" to='/category/Jeans' > Jeans</Link></li>
        </ul>
        <div className='flex'>
        <form className="headerForm">
          <input type="search" className="headerForm1" placeholder="Busqueda.." aria-label="Search"></input>
        </form>
        <div>
          <a href="./pages/usuario.html"><button type="button" className="headerP">Perfil</button></a>
          <a href="./pages/login.html"><button type="button" className="headerL">Login</button></a> 
        </div>  <CartWidget/>
        </div>
      </div>
    </div>
    
  </header>
				</>
			);
};

export default Header;

