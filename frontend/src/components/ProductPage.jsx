import { useEffect, useState } from "react"
import "../index.css"



export const ProductPage = () => {

    const [products, setProducts] = useState([])
    const [message, setMessage] = useState("")

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

    return (

        <>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
                {products.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition hover:shadow-xl"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-40 object-contain mb-4"
                        />

                        <h2 className="text-sm font-semibold text-gray-800 text-center  mb-2">
                            {item.title}
                        </h2>

                        <p className="text-lg font-bold text-gray-900 mb-3">
                            ${item.price}
                        </p>

                        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>

    )
}