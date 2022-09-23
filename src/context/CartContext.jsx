import React from 'react';
import { useEffect } from 'react';
import {createContext, useState} from 'react';


export const CartContext = createContext();


export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const [unidades, setUnidades] = useState(0);

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

	const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };

    const totalQuantity = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad;
        });
        return acumulador;
    };
    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };
    useEffect(() => {
        totalQuantity();
       
    }, [cart]);

return (
		<CartContext.Provider
		value={{
			cart,
			addToCart,
			clearCart,
			eliminarProd,
			totalPrice,
			totalQuantity,
			getProductQuantity
			}}>
		 {children}
		 </CartContext.Provider>

	);
};
		
