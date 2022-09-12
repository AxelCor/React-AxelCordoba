import React, {useState} from 'react'

const ItemCount = ({stock, inicial, onAdd}) => {

  const [contador, setContador] = useState(0)


  const sumar = () => {
    contador < stock && setContador(contador + 1);

  };
  const restar = () => {
   
   contador > inicial && setContador(contador - 1);
  };
		return (
				<>
          <div className='ItemCount'>
          <p>Cantidad: {contador}</p>
            <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            </div>
            <p>Stock: {stock}</p>
            <button onClick={()=>onAdd(contador)}>Agregar al carrito</button>
            
          </div>    

        </>

			);
  };

export default ItemCount;