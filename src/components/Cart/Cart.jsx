import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import '../ItemDetail/ItemDetail.css'
import Form from '../Form/Form';

export const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const {cart, clearCart, eliminarProd, totalPrice} = useContext(CartContext);
    const total = totalPrice();

    const codCompra = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por tu compra! El id de tu compra es: {idCompra}. Vuelvas Prontos...</h1>;
    }

    if (cart.length === 0) {
        return (
            <h1>
                Todavia no agregaste productos, podés ir al <Link to="/">INICIO</Link>{' '}
                para elegir algunos...
            </h1>
        );
    }

		return (
				<div>
          
          {cart.map((prod)=>(
            
              <div className='detailContainer' key={prod.id}>
           <div><img className='img'src={prod.img} alt='Imagen-Producto'/></div>
           <div className='divDetail'>
           <h4>{prod.title}</h4>
           <p>{prod.description}</p>
           <p>Cantidad: {prod.cantidad}</p>
           <p className='price'>$ {prod.price}</p>
           
           </div>

              <button onClick={() => eliminarProd(prod.id)}>
                Eliminar Producto
              </button>
            </div>  
          ))}
             <div>
              <button onClick={clearCart}><h4>Limpiar Carrito</h4></button>
              <h4>Total: ${total}</h4>
              
              <Form
                cart={cart}
                total={total}
                codCompra={codCompra}
                />
              </div>
          </div>
			);
  };

