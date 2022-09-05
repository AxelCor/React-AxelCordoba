import React from 'react'
import {Detail} from './Detail'
import './ItemDetail.css'

export const ItemDetail = ({productoList}) => {


		return (
				 <div className='x'>{
				 	<Detail key={productoList.id}
				 		img={productoList.img}
				 	title={productoList.title}
				 	stock={productoList.stock}
				 	price={productoList.price}
				 	description={productoList.description}
				 	category={productoList.category}/>
				 }</div>

			)
}

