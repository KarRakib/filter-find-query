import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AddContext = createContext();

const ProductContext = ({ children }) => {
    const [user, setUser] = useState({ email: 'kar' });
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const addToCart = (product, quantity) => {
        if (user?.email) {
            const alreadyAddedProduct = cartItems.find(cart => cart._id === product._id);
            const updatedTotalPrice = totalPrice + parseInt(product.price) * quantity;
            setTotalPrice(updatedTotalPrice);
            setTotalQuantity(prevQuantity => prevQuantity + quantity);

            if (alreadyAddedProduct) {
                const updatedCartItems = cartItems.map(cartProduct => {
                    if (cartProduct._id === product._id) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + quantity,
                        };
                    }
                    return cartProduct;
                });
                setCartItems(updatedCartItems);
            } else {
                product.quantity = quantity;
                setCartItems([...cartItems, { ...product }]);
            }

            toast.success(`${quantity} ${product.title}`, {
                position: toast.POSITION.TOP_RIGHT,
            });

            // Update localStorage here
            localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
        } else {
            toast.error('Please login or Register');
        }
    };

    const removeCart = (product) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this item?');
        if (confirmDelete) {
            foundProduct = cartItems.find(item => item._id === product._id);
            const newCartItems = cartItems.filter(item => item._id !== product._id);
            setTotalPrice(prevPrice => prevPrice - foundProduct.price * foundProduct.quantity);
            setTotalQuantity(prevQuantity => prevQuantity - foundProduct.quantity);
            setCartItems(newCartItems);
        }
    };

    const toggleCartQuantity = (id, value) => {
        foundProduct = cartItems.find(item => item._id === id);
        index = cartItems.findIndex(product => product._id === id);
        const newCartItems = cartItems.filter(item => item._id !== id);

        if (value === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice(prevTotalPrice => prevTotalPrice + parseInt(foundProduct.price));
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity + 1);
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
                setTotalPrice(prevTotalPrice => prevTotalPrice - parseInt(foundProduct.price));
                setTotalQuantity(prevQuantity => prevQuantity - 1);
            }
        }
    };

    const incQty = () => {
        setQty(prevQty => prevQty + 1);
    };

    const decQty = () => {
        setQty(prevQty => (prevQty - 1 < 1 ? 1 : prevQty - 1));
    };

    const resetCart = () => {
        setCartItems([]);
        setTotalQuantity(0);
        setTotalPrice(0); // Set to 0 instead of an empty string
    };

    const cartInfo = {
        showCart,
        setShowCart,
        cartItems,
        resetCart,
        totalPrice,
        totalQuantity,
        qty,
        incQty,
        decQty,
        addToCart,
        toggleCartQuantity,
        removeCart,
    };

    return (
        <AddContext.Provider value={cartInfo}>
            {children}
        </AddContext.Provider>
    );
};

export default ProductContext;
