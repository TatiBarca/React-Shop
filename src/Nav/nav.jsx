import React from "react";
import { Link } from "react-router-dom";
import s from './Nav.module.css';
import { useContext } from "react";
import { CartContext } from "CardContext";

export const Nav = () => {
    const { items } = useContext(CartContext);

    return (
        <div>
            <div className={s.nav}>
                <Link to='/product' className={s.navLinks}>Products</Link>
                <div><span className={s.navLinks}>Shop Bag {items.reduce((acc, item) => acc += item.quantity, 0)}</span></div>
                <Link to='/category' className={s.navLinks}>Categories</Link>
            </div>
        </div>

    )
}