import React from "react";
import { createContext, useState } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    // const removeFromCart = (name, price, category) => {
    //     setItems((prevState) => prevState.filter(item => !(item.name===name && item.price===price && item.category=== category)))
    // }

    const removeFromCart = (id) => {
        let item = items.find(item => item.id === id)
        console.log(item.quantity)
        if (item.quantity > 1) {
            setItems((prevState) => {
                return prevState.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
            })
        } else {
            setItems(prevState => prevState.filter(item => item.id !== id))
        }
    }

    const addToCart = (id, name, price, category) => {
        if (items.find(item => item.id === id)) {
            setItems((prevState) => {
                return prevState.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            })
            // 
        } else {
            setItems((prevState) => [...prevState, { id, name, price, category, quantity: 1 }])
        }

    }
    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    );
}