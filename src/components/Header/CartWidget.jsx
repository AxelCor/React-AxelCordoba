import React from 'react'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import './Header.css'

export const CartWidget = () => {
	const {totalQuantity} = useContext(CartContext);
	const totalprod = totalQuantity();


		return (
    <>

		<span className='material-icons'>shopping_cart</span>
				<span className='spanCarrito'>{totalprod}</span>
			</>);
};



