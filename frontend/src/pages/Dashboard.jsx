
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { ProductPage } from "../components/ProductPage"
import UserDetails from "./UserDetails"

const Dashboard = () => {
    return (
        <>
            <div>
             <Navbar/>
             <Header/>
             <ProductPage/>
            </div>
        </>
    )
}

export default Dashboard