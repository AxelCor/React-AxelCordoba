import React,{useState, useEffect} from 'react'
import {ItemList} from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import ScaleLoader from 'react-spinners/ScaleLoader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../index';
import '../ItemDetail/ItemDetail.css'

const ItemListContainer = () => {

	const [productList, setProductList] = useState([])
	const [isLoading, setIsLoading] = useState(true);
	const {categoryId} = useParams();

	useEffect(()=>{
		setIsLoading(true);
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
            .finally(() => {
                setIsLoading(false);
            });
            
    }, [categoryId]);
		return (
			<>
			{isLoading ? (
                <> <div className='loading'><ScaleLoader color="black" height={80} margin={20} width={25} radius={4} /></div>
                </>
            ) : (
                <>
                    <ItemList productList={productList}/>
                </>
            )}
           </>
			);
};

export default ItemListContainer;