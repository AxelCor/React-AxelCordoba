import React, { useState } from 'react';
import {CartWidget} from './CartWidget';
import './Header.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../index';

const Header = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(db, 'categorias');

        getDocs(collectionCat).then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categorias);
        });
    }, []);


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
        </div>  <Link className="ulLi1" to='/Cart'><CartWidget/></Link>
        </div>
      </div>
    </div>
    
  </header>
				</>
			);
};

export default Header;

