import React, {useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [address, setAddress] = useState([]);
    return(
        <CartContext.Provider value={[cart, setCart, address, setAddress]}>
        {props.children}
        </CartContext.Provider>
    )
}