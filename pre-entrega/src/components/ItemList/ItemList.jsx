// src/components/ItemList/ItemList.jsx

import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ list }) => {
    return (
        <div className="product-list-grid">
            {
                list.length ? (
                    list.map((product) => (

                        <Link to={`/detail/${product.id}`} key={product.id}>


                            <Item product={product} />

                        </Link >
                    ))
                ) : (
                    <p>No hay productos</p>
                )
            }
        </div>
    );
};