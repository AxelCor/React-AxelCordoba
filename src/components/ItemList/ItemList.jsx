import React from 'react'
import {Item} from '../Item/Item'
import '../Item/Card.css'

export const ItemList = ({productList}) => {


		return (
				 <div className='divCard'>
				 {
				 	productList.map(item =>
				 	 <Item
				 	key={item.id}
				 	id={item.id}
				 	img={item.img}
				 	title={item.title}
				 	stock={item.stock}
				 	price={item.price}
				 	description={item.description}
				 	category={item.category}/>)
				 }
				 </div>

			);
};

