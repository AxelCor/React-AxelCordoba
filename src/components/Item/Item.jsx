import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export const Item = ({id,title,img,price,description,category,stock}) => {
			
		
	
		return (
				 <div className='cardContainer'>
					 <h4>{title}</h4>
					 <div><img className='img'src={img} alt='Imagen-Producto'/></div>
					 <h6>- - {category} - -</h6>
					 <Link to={`/Item/${id}`}>
					 <button>Ver Detalle</button></Link>
					 <p className='price'>$ {price}</p>
					 
				 </div>

			)
}

