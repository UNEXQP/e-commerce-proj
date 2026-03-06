import "../index.css"

export const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-5 py-2">
                <div>
                   <h1><span>ZE</span>LUX</h1>
                </div>

                <div className="flex gap-6 items-center">
                <a href="#">men</a>
                <a href="#">women</a>
                <a href="#">kids</a>
                <a href="#">accessories</a>
                <a href="#">shoe</a>
                </div>

                <div>
                    <h1>hello</h1>
                </div>

            </div>
        </>
    )
}

