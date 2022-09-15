import React from 'react';
import {createContext, useState} from 'react';


export const CartContext = createContext();


export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const addToCart = (productoList, cantidad) => {
		if (isInCart(productoList.id)){
			
			sumarCantidad (productoList, cantidad);
		} else {
			setCart([...cart, {...productoList, cantidad}]);
		}
	};

	const isInCart = (id) => {
		return cart.some ((prod) => prod.id === id)
	};

	const sumarCantidad = (productoList, cantidad) =>{
		const carritoNew = cart.map((prod)=>{
			if (prod.id === productoList.id) {
				const productoActualizado = {
					...prod,
					cantidad: prod.cantidad + cantidad,
				};
				return productoActualizado;
			} else {
				return prod;
			}
		});
		setCart(carritoNew);
	};


	const eliminarProd = (id) => {
		const carritoFiltrado = cart.filter((prod)=> prod.id !== id);
		setCart(carritoFiltrado); 
	};

const clearCart = () => {
	setCart([]);
};

return (
		<CartContext.Provider value={{cart, addToCart, clearCart, eliminarProd}}>
		 {children}
		 </CartContext.Provider>

	);
};
		
