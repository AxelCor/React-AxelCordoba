import React, {useState} from 'react'

const ItemCount = ({stock, inicial, onAdd}) => {

  const [contador, setContador] = useState(1)


  const sumar = () => {
    contador < stock && setContador(contador + 1);

  };
  const restar = () => {
   
   contador > inicial && setContador(contador - 1);
  };
		return (
				<>
          <div className='ItemCount'>
            <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            </div>
            <p>Cantidad: {contador}</p>
            <p>Stock: {stock}</p>
            <button onClick={onAdd}>Agregar al carrito</button>
            
          </div>    

        </>

			);
  };

export default ItemCount;