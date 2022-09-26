import React,{useState, useEffect} from 'react'
import {productos} from '../../mock/productos'
import {ItemList} from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../index';

const ItemListContainer = () => {

	const [productList, setProductList] = useState([])
	const {categoryId} = useParams();


	

	useEffect(()=>{

		const itemCollection = collection(db, 'items');

		const referencia = categoryId
            ? query(itemCollection, where('category', '==', categoryId))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setProductList(products);
            })
            .catch((error) => {
                console.log(error);
            })
            
    }, [categoryId]);

	// 	const getProductos = () =>
	// 	 new Promise ((res, eject) =>{
	// 	 	const prodFiltrados = productos.filter(
	// 	 		(prod) => prod.category === categoryId
	// 	 		);
	// 	 	const resProd = categoryId ? prodFiltrados : productos;

	// 	setTimeout(()=> {res(resProd)
	// 		;}, 1)
	// })

	// 	getProductos()
	// 	.then(productos => setProductList(productos))
	// 	.catch(error => alert('ERROR'))
	// },[categoryId])
		return (
				
           
            <ItemList productList={productList}/>

			);
};

export default ItemListContainer;