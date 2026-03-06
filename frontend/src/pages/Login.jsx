import {Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMesssage] = useState(true)
    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/api/user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            })
            const data = await response.json()

            if (!response.ok) {
                setMesssage(data.message || "login failed")
            } else {
                setMesssage("welcome home")
                navigate("/")
            }


        } catch (error) {
            setMessage("Something went wrong")
        }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-96 bg-white px-8 py-10 shadow-lg rounded-lg">

                    <form onSubmit={handleRegister} noValidate>
                        <h2 className="text-2xl text-center font-bold mb-6">
                            Register
                        </h2>

                        {/* Accessible status message */}
                        {message && (
                            <div
                                role="alert"
                                aria-live="assertive"
                                className={`mb-4 text-sm text-center ${status === "error" ? "text-red-600" : "text-green-600"
                                    }`}
                            >
                                {message}
                            </div>
                        )}

                        {/* Name */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                minLength={6}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        >
                            Register
                        </button>

                        <p className="text-sm text-center mt-4">
                            don't have an account?{" "}
                            <Link to="/" className="text-blue-600 underline">
                                 Register here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login