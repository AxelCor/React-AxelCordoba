import React,{useState, useEffect} from 'react'
import {productos} from '../../mock/productos'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

	const [productoList, setProductoList] = useState({})
	const {itemId} = useParams();
	

	useEffect(()=>{
		const getProducto = () =>
		 new Promise ((res, eject) =>{
		 	const Producto = productos.find((prod)=> prod.id === itemId)
		setTimeout(()=>
			{res(Producto)} ,1)
	})
		getProducto()
		.then(producto => setProductoList(producto))
		.catch(error => alert('ERROR'))
	},[itemId])
		return (
				
           
            <ItemDetail productoList={productoList}/>

			);
};

export default ItemDetailContainer;