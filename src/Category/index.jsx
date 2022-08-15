import React from "react";
import s from './style.module.css';
import { useContext } from "react";
import { CartContext } from "CardContext";


export const Category = () => {
    const { items } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
    const { addToCart } = useContext(CartContext)

    const getTotalPrice = () => {
        return items.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    }


    return (
        <div>
            <table>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                {items.map((item) => {
                    return (
                        <tr>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>
                                <button className={s.cartBtn} onClick={() => removeFromCart(item.id, item.name, item.price, item.category)}>-</button>
                                <button className={s.cartBtnS}>Select</button>
                                <button className={s.cartBtn} onClick={() => addToCart(item.id, item.name, item.price, item.category.name)}>+</button>
                            </td>
                        </tr>
                    )

                })
                }

            </table>
            <tr className={s.total}>
                <b>Total:
                    ${getTotalPrice()}
                </b>
            </tr>
        </div>

    )
}
