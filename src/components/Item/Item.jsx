import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'
import {Link} from 'react-router-dom'


export const Item = ({id,title,img,price,description,category,stock}) => {
			
			const [cantidad, setCantidad] = useState(0);

			const onAdd = (cant) =>{
				setCantidad(cant);
  }
	
	
		return (
				 <div className='cardContainer'>
					 <h4>{title}</h4>
					 <div><img className='img'src={img} alt='Imagen-Producto'/></div>
					 <h6>{category}</h6>
					 <Link to={`/Item/${id}`}>
					 <button>Ver Detalle</button></Link>
					 <p className='price'>$ {price}</p>
					 {cantidad > 0 
		      			? <Link to='/cart'>
					 		<button>Ver Carrito</button>
				  		  </Link>
		      			: <ItemCount stock={stock} inicial={0} onAdd={onAdd}/>}
				 </div>

			)
}

