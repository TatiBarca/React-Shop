import React from "react";
import { Product } from "Products";
import s from './style.module.css';
import { Category } from "Category";
import { BrowserRouter,  Switch, Route } from "react-router-dom";
import { CartProvider } from "CardContext";
import { Nav } from "Nav/nav";

export const App = () => {
    return (
        <div className={s.main}>
        <CartProvider>
        <BrowserRouter>
        <Nav />
            <Switch>
                <Route path='/product'><Product /></Route>
                <Route path='/category'><Category /></Route>
            </Switch>
        </BrowserRouter>
        </CartProvider>
        </div>
    )
};