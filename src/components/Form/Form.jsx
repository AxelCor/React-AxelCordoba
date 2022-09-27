import {addDoc,collection,serverTimestamp} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../index';

const Form = ({ cart, total, clearCart, codCompra }) => {
    const [nombre, setNombre] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, phone: phone, email: email },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            codCompra(res.id);
            clearCart();
            
        });
    };


    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Phone..."
                    name="phone"
                    value={phone}
                    onChange={handleChangePhone}
                />
                <input
                    type="text"
                    placeholder="Email..."
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <button>Finalizar Pedido</button>
            </form>
        </div>
    );
};

export default Form;
