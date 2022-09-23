import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';



	export const ItemDetail = ({productoList}) => {
		const [cantidad, setCantidad] = useState(0);
		const {addToCart} = useContext(CartContext);
		const onAdd = (cant) =>{
			setCantidad(cant);
			addToCart(productoList, cant)
		};

			return (
				 <div className='detailContainer' key={productoList.id}>
					 <div><img className='img'src={productoList.img} alt='Imagen-Producto'/></div>
					 <div className='divDetail'>
					 <h4>{productoList.title}</h4>
					 <p>{productoList.description}</p>
					 <p className='price'>$ {productoList.price}</p>
					 {cantidad === 0 
		      			? <ItemCount stock={productoList.stock} inicial={0} onAdd={onAdd}/>
		      			: <Link to='/Cart'>
					 		<button>Ver Carrito</button>
				  		  </Link>}
					 </div>
				 </div>

			);

};