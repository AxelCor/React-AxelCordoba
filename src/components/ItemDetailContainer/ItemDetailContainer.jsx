import React,{useState, useEffect} from 'react'
import {producto} from '../../mock/productos'
import {ItemDetail} from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

	const [productoList, setProductoList] = useState({})

	const getProducto = () => new Promise ((res, eject) =>{
		setTimeout(()=> res(producto) ,2000)
		
	})

	useEffect(()=>{
		getProducto()
		.then(producto => setProductoList(producto))
		.catch(error => alert('ERROR'))
	},[])
		return (
				
           
            <ItemDetail productoList={productoList}/>

			);
};

export default ItemDetailContainer;