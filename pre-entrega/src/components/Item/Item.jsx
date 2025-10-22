

import "./Item.css";

import { useCartContext } from "../../context/CartContext/useCartContext";


export const Item = ({ product }) => {


    const { addItem } = useCartContext();


    const handleAddToCart = (e) => {

        e.preventDefault();
        e.stopPropagation();


        addItem(product);
    };


    const { nombre, precio, description, imageUrl } = product;

    return (
        <article className="product-item">
            <img src={imageUrl} alt={description} />

            <h2 className="product-title">{nombre}</h2>

            <p>Precio: ${precio}</p>
            <p>Descripción: {description}</p>


            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Añadir al carrito
            </button>
        </article>
    );
};