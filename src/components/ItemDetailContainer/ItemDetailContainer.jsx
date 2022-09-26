import React,{useState, useEffect} from 'react'
// import {productos} from '../../mock/productos'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../index';

const ItemDetailContainer = () => {

	const [productoList, setProductoList] = useState({});
	const {itemId} = useParams();


	useEffect(()=>{
		 const itemCollection = collection(db, 'items');
        const ref = doc(itemCollection, itemId);
        getDoc(ref).then((res) => {
            setProductoList({ id: res.id, ...res.data() });
        });
    }, [itemId]);


	
		return (
				
           
            <ItemDetail productoList={productoList}/>

			);
};

export default ItemDetailContainer;



// 	const getProducto = () =>
	// 	 new Promise ((res, eject) =>{
	// 	 	const Producto = productos.find((prod)=> prod.id === itemId)
	// 	setTimeout(()=>
	// 		{res(Producto)} ,1)
	// })
	// 	getProducto()
	// 	.then(producto => setProductoList(producto))
	// 	.catch(error => alert('ERROR'))
	// },[itemId])