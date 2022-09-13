import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'

export const Detail = ({

		id = '1',
		title = 'asd',
		img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEPk2oPCL3lf3wOu2f1TYczcbXWQqVghhLw&usqp=CAU',
		price= 600,
		description='text',
		category='text',
		stock=10}) => {

			const [cantidad, setCantidad] = useState(0);

			const onAdd = (cant) =>{
				setCantidad(cant);
		      	
		         
	
  }
	
	
		return (
				 <div className='detailContainer'>
					 <div><img className='img'src={img} alt='Imagen-Producto'/></div>
					 <div className='divDetail'>
					 <h4>{title}</h4>
					 <p>{description}</p>
					 <p className='price'>$ {price}</p>
					 {cantidad === 0 
		      			? <ItemCount stock={stock} inicial={0} onAdd={onAdd}/>
		      			: <Link to='/Cart'>
					 		<button>Ver Carrito</button>
				  		  </Link>}
					 </div>
				 </div>

			)
}

