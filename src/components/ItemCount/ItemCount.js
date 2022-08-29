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
          <div>
          <h3>Juegos</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Cantidad: {contador}</p>
            <p>Stock: {stock}</p>
            <button onClick={onAdd}>Agregar al carrito</button>
            
          </div>    

        </>

			);
  };

export default ItemCount;