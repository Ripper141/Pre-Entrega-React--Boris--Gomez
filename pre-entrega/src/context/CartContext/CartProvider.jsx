
import { useState, useEffect } from "react";


import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {

    const getInitialCart = () => {
        const storedCart = localStorage.getItem('cart');

        return storedCart ? JSON.parse(storedCart) : [];
    };


    const [cart, setCart] = useState(getInitialCart);


    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);




    const exists = (id) => {
        const exist = cart.some(p => p.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);


        alert(`${item.nombre} agregado`);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {

        return cart.length;
    };

    const values = {
        cart,
        addItem,
        clearCart,
        getTotalItems,
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};