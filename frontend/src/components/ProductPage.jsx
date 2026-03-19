import { useState, useEffect } from "react";
import "../index.css"
import { useCart } from "../context/CreateContext";


export const ProductPage = () => {

    const { addToCart } = useCart()
    const [products, setProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState("All")
    const categories = ["All", "men's clothing", "jewelery", "electronics", "women's clothing"]
    const [page, setPage] = useState("product")
    const filtered = activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                console.log(data)

                setProducts(data)
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [])

    return (
        <>



            <div className="flex justify-around p-6 text-zelux-accent bg-white border-b border-zelux-border">
                {categories.map((cat) => (
                    <div key={cat}>
                        <button onClick={() => setActiveCategory(cat)} className="border-none cursor-pointer">{cat}</button>
                    </div>
                ))}
            </div>

            {page === "product" && (
                <div className="">

                    {products.length === 0 ? (
                        <p>loading....</p>
                    ) : (
                        <div className="grid grid-cols-4  gap-6 p-6 bg-zelux-cream ">
                            {filtered.map((product) => (
                                <div key={product.id} className="bg-white rounded-sm border border-zelux-border hover:shadow-md">
                                    <div className="flex items-center justify-center">
                                        <img src={product.image} alt="" srcset="" className="h-40 w-40 p-2" />
                                    </div>

                                    <div className="p-4 space-y-3 ">
                                        <p className="text-zelux-hint">{product.category}</p>
                                        <p className="text-zelux-accent leading-snug line-clamp-2">{product.title}</p>

                                        <div className="flex items-center justify-between pt-1">
                                            <button >${product.price}</button>
                                            <button className="bg-zelux-dark text-zelux-cream tracking-wide border rounded px-4 py-2 hover:shadow-md cursor-pointer " onClick={()=> addToCart(product)}>add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}