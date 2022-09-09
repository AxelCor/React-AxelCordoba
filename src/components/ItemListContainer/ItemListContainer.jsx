import React,{useState, useEffect} from 'react'
import {productos} from '../../mock/productos'
import {ItemList} from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

	const [productList, setProductList] = useState([])
	const {categoryId} = useParams();

	

	useEffect(()=>{
		const getProductos = () =>
		 new Promise ((res, eject) =>{
		 	const prodFiltrados = productos.filter(
		 		(prod) => prod.category === categoryId
		 		);
		 	const resProd = categoryId ? prodFiltrados : productos;

		setTimeout(()=> {res(resProd)
			;}, 1)
	})

		getProductos()
		.then(productos => setProductList(productos))
		.catch(error => alert('ERROR'))
	},[categoryId])
		return (
				
           
            <ItemList productList={productList}/>

			);
};

export default ItemListContainer;