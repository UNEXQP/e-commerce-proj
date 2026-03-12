import { useEffect, useState } from "react"
import "../index.css"



export const ProductPage = () => {

    const [products, setProducts] = useState([])
    const [message, setMessage] = useState("")
    const [cart, setCart] = useState([])
    const [page, setPage] = useState("products")

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItems = prevCart.find((item) => item.id === product.id)

            if (existingItems) {

                return prevCart.map((item) => {
                    return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                })

            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }

        })
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setProducts(data)

            } catch (error) {
                if (!res.ok) {
                    setMessage("Failed to fetch products")
                }
            }
        }
        getProducts()
    }, [])

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <>


            {page === "cart" && (
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex justify-between mb-3">
                                <span>{item.title} × {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))
                    )}

                    <button
                        onClick={() => setPage("products")}
                        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Back to Shopping
                    </button>
                </div>
            )}

            {page === "products" && (
                <div>
                    <div className="flex items-center justify-center mt-3" onClick={() => setPage("cart")}>
                        <h1>Cart({cartCount})</h1>
                    </div>

                    <div className="flex items-center justify-center flex-wrap gap-6 ">
                        {
                            products.map((product) => (
                                <div key={product.id} className="w-60 bg-white shadow-md border-none rounded hover:shadow-xl transition ">

                                    <img src={product.image} alt="" className="h-40 w-full object-contain bg-gray-200" />

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h1 className="flex text-center justify-center items-center px-2 py-2 ">{product.title}</h1>
                                            <h1 className="flex text-center justify-center items-center px-2 py-2 ">{product.price}</h1>
                                        </div>

                                        <div className="flex justify-center border-none bg-green-900 rounded-2xl w-25 m-auto text-white">
                                            <button onClick={() => addToCart(product)}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}


        </>
    )
}