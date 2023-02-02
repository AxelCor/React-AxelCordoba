import React from 'react'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import './Header.css'

export const CartWidget = () => {
	const {totalQuantity} = useContext(CartContext);
	const totalprod = totalQuantity();


		return (
    <>
		<div className='flex'>
			<div className='material-icons'>shopping_cart</div>
			<div className='spanCarrito'>{totalprod}</div>
		</div>
	</>);
};



