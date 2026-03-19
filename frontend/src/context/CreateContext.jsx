import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart")
        return saved ? JSON.parse(saved)
            : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItems = prevCart.find((item) => item.id === product.id)
            console.log("existing:", existingItems) // add this temporarily
            console.log("cart:", prevCart)

            if (existingItems) {
                return prevCart.map((item) =>
                    item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 } :
                        item
                )
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })

    }

    const increment = (item) => {
        setCart(prevCart => {

            return prevCart.map((product) => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + 1 }
                } else {
                    return product
                }
            })
        })
    }

    const decrement = (item) => {
        setCart(prevCart => {

            return prevCart.map((product) => {
                if (product.id === item.id) {
                    return { ...product, ...item, quantity: product.quantity - 1 }
                } else {
                    return product
                }
            }).filter((product) => product.quantity > 0)
        })
    }

    const clearCart = (products) => {
        return setCart([])
    }

    const cartCount = cart.reduce((t, i) => t + i.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, increment, decrement,clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

