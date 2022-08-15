// import { Category } from "Category";
import React, { useEffect, useState } from "react";
import s from './style.module.css';
import { CartContext } from "CardContext";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Product = (name, price, category) => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/api/products';

        const fetchNum = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/products');
                const json = await response.json();
                console.log(json);

                setProducts(json.map(item => ({
                    id: uuidv4(),
                    ...item
                })));
            } catch (error) {
                console.log('error', error);
            }
        }
        fetchNum();
    }, []);

    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <table>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                {products.map((details) => {
                    return (
                        <tr >
                            <td>{details.category.name}</td>
                            <td>{details.name}</td>
                            <td>${details.price}</td>
                            <td>
                                <button className={s.prodBtnS}>Select</button>
                                <button className={s.prodBtn} onClick={() => addToCart(details.id, details.name, details.price, details.category.name)}>+</button></td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
};

