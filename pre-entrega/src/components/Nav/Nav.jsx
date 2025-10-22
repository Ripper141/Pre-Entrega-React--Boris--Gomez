// src/components/Nav/Nav.jsx

import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext/useCartContext";
import { FaShoppingCart } from "react-icons/fa";
import './Nav.css';

export const Nav = () => {

    const { getTotalItems } = useCartContext();
    const totalItems = getTotalItems();

    return (

        <nav className="navbar">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/mousepad"}>Mousepads</Link>
                </li>
                <li>
                    <Link to={"/category/mouse"}>Mouses</Link>
                </li>
                <li>
                    <Link to={"/category/monitor"}>Monitores</Link>
                </li>
                <li>
                    <Link to={"/category/teclado"}>Teclados</Link>
                </li>


                <li className="cart-li">

                    <Link to="/cart" className="cart-widget">
                        <FaShoppingCart />
                        <span>Carrito</span>

                        {totalItems > 0 && (
                            <span className='in-cart'>{totalItems}</span>
                        )}
                    </Link>
                </li>

            </ul>
        </nav >
    );
}