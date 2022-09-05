import React,{useState, useEffect} from 'react'
import {productos} from '../../mock/productos'
import {ItemList} from '../ItemList/ItemList'

const ItemListContainer = () => {

	const [productList, setProductList] = useState([])

	const getProductos = () => new Promise ((res, eject) =>{
		setTimeout(()=> res(productos) ,2000)
		
	})

	useEffect(()=>{
		getProductos()
		.then(productos => setProductList(productos))
		.catch(error => alert('ERROR'))
	},[])
		return (
				
           
            <ItemList productList={productList}/>

			);
};

export default ItemListContainer;