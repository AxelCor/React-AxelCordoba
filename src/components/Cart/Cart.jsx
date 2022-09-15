import React from 'react'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import '../ItemDetail/ItemDetail.css'


export const Cart = () => {
    const {cart, clearCart, eliminarProd} = useContext(CartContext);

		return (
				<div>
          
          {cart.map((prod)=>(
            
              <div className='detailContainer' key={prod.id}>
           <div><img className='img'src={prod.img} alt='Imagen-Producto'/></div>
           <div className='divDetail'>
           <h4>{prod.title}</h4>
           <p>{prod.description}</p>
           <p>{prod.cantidad}</p>
           <p className='price'>$ {prod.price}</p>
           
           </div>
         



              <button onClick={() => eliminarProd(prod.id)}>
                Eliminar Producto
              </button>
            </div>  
          ))}
          <button onClick={clearCart}>Clear Cart</button>
          </div>
			);
  };

