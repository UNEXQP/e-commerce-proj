import { useCart } from "../context/CreateContext"
import "../index.css"

export const Cart = () => {

    const { cart, increment, decrement, addToCart } = useCart()
    const cartTotal = cart.reduce((t, i) => t + (i.price * i.quantity), 0)

    return (
        <>
            {cart.length === 0 ? (
                <div>
                    <h1>no items yet</h1>
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen bg-zelux-cream">
                    <div className="w-xl  py-6 p-4 border-none rounded-2xl bg-white">
                        <div>
                            <h1 className="text-xl tracking-widest  text-zelux-accent">Your Order</h1>
                            <h1 className="text-zelux-dark font-extrabold text-4xl font-serif mb-8">Shopping Cart</h1>
                        </div>
                        <div>
                            {cart.map(item => (

                                <div key={item.id} className="p-2 border-b border-zelux-divider">
                                    <div >

                                        <div className="flex justify-between items-center">
                                            <p className="leading-snug line-clamp-2">{item.title}</p>
                                            <div className="flex gap-1.5 items-center justify-center">
                                                <button className="flex items-center justify-center text-white bg-zelux-dark  border-none rounded-full w-6 h-6 cursor-pointer hover:bg-zelux-accent transition" onClick={() => increment(item)}>+</button>
                                                <p>{item.quantity}</p>
                                                <button className="flex items-center justify-center text-white bg-zelux-dark border-none rounded-full w-6 h-6 cursor-pointer hover:bg-zelux-accent transition" onClick={() => decrement(item)}>-</button>
                                                <p className="font-serif font-semibold text-zelux-accent ml-2">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>



                                    </div>

                                </div>


                            ))}
                            <div className="flex justify-between font-serif mt-5">
                                <p className="font-bold font-serif text-2xl text-zelux-dark">Total</p>
                                <p className="font-bold font-serif text-2xl text-zelux-accent">${cartTotal.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="text-white bg-zelux-accent mt-4 border-none p-1 rounded-2xl w-80 hover:bg-zelux-dark cursor-pointer">CheckOut</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}