import { useEffect, useState } from "react"
import "../index.css"

export const ProductPage = () => {

    const [products, setProducts] = useState([])
    const [message, setMessage] = useState("")
    const [cart, setCart] = useState([])
    const [page, setPage] = useState("products")
    const [activeCategory, setActiveCategory] = useState("All")

    const categories = ["All", "men's clothing", "jewelry", "electronics", "women's clothing"]

    const filtered = activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItems = prevCart.find((item) => item.id === product.id)
            if (existingItems) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
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
                setMessage("Failed to fetch products")
            }
        }
        getProducts()
    }, [])

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <div className="bg-zelux-cream min-h-screen">

            {/* category + cart bar */}
            <div className="flex items-center justify-between px-10 py-4 bg-white border-b border-zelux-border">
                <div className="flex gap-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-xs tracking-widest uppercase pb-1 transition border-b-2 cursor-pointer ${
                                activeCategory === cat
                                    ? "text-zelux-dark border-zelux-accent"
                                    : "text-zelux-muted border-transparent hover:text-zelux-dark"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setPage(page === "cart" ? "products" : "cart")}
                    className="bg-zelux-accent text-white text-xs px-4 py-2 rounded-full tracking-wide cursor-pointer"
                >
                    Cart ({cartCount})
                </button>
            </div>

            {/* cart page */}
            {page === "cart" && (
                <div className="max-w-xl mx-auto px-6 py-12">
                    <p className="text-zelux-accent text-xs tracking-widest uppercase mb-2">Your order</p>
                    <h2 className="font-serif text-4xl font-semibold text-zelux-dark mb-8">Shopping Cart</h2>

                    {cart.length === 0 ? (
                        <p className="text-zelux-hint text-sm">Your cart is empty.</p>
                    ) : (
                        <div>
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center py-4 border-b border-zelux-divider">
                                    <span className="text-sm text-zelux-body max-w-xs">{item.title} × {item.quantity}</span>
                                    <span className="text-sm font-semibold text-zelux-dark">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}

                            <div className="flex justify-between items-center pt-6">
                                <span className="text-xs tracking-widest uppercase text-zelux-muted">Total</span>
                                <span className="font-serif text-2xl font-semibold text-zelux-dark">${cartTotal.toFixed(2)}</span>
                            </div>

                            <button className="mt-8 w-full bg-zelux-dark text-zelux-cream text-xs tracking-widest uppercase py-4 rounded-sm cursor-pointer">
                                Checkout
                            </button>
                        </div>
                    )}

                    <button
                        onClick={() => setPage("products")}
                        className="mt-4 text-zelux-muted text-sm underline cursor-pointer bg-transparent border-none"
                    >
                        Continue shopping
                    </button>
                </div>
            )}

            {/* products page */}
            {page === "products" && (
                <div className="px-10 py-10">

                    {message && (
                        <p className="text-center text-sm text-red-500 mb-4">{message}</p>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filtered.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-sm border border-zelux-border hover:shadow-md transition group"
                            >
                                <div className="h-52 bg-zelux-card flex items-center justify-center p-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-full object-contain"
                                    />
                                </div>

                                <div className="p-4 space-y-3">
                                    <p className="text-xs tracking-widest uppercase text-zelux-hint">{product.category}</p>
                                    <p className="text-sm text-zelux-dark leading-snug line-clamp-2">{product.title}</p>

                                    <div className="flex items-center justify-between pt-1">
                                        <span className="font-serif text-lg font-semibold text-zelux-dark">${product.price}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-zelux-dark text-zelux-cream text-xs px-4 py-2 rounded-sm tracking-wide cursor-pointer hover:bg-zelux-accent transition"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}