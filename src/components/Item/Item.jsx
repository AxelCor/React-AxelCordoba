import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'

export const Item = ({

	
		title = 'asd',
		img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEPk2oPCL3lf3wOu2f1TYczcbXWQqVghhLw&usqp=CAU',
		price= 600,
		description='text',
		category='text',
		stock=10}) => {

			const onAdd = () =>{
		      
		          alert('PRODUCTO AGREGADO !');
		    return () => {};
  }
	
	
		return (
				 <div className='cardContainer'>
					 <h4>{title}</h4>
					 <div><img className='img'src={img} alt='Imagen-Producto'/></div>
					 <h6>{category}</h6>
					 <p>{description}</p>
					 <p className='price'>$ {price}</p>
					 <ItemCount stock={stock} inicial={1} onAdd={onAdd}/>
				 </div>

			)
}

