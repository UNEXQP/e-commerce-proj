import "../index.css"



export const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-10 py-4 bg-white border-b border-zelux-border shadow-sm">
                <h1 className="font-serif text-2xl font-extrabold tracking-widest">
                    <span className="text-zelux-dark">ZE</span>
                    <span className="text-zelux-accent">LUX</span>
                </h1>

                <div className="flex gap-8 items-center">
                    {["MEN", "WOMEN", "KIDS", "ACCESSORIES", "SHOES"].map(link => (
                        <a key={link} href="#" className="text-1xl tracking-widest text-zelux-muted hover:text-zelux-dark transition">
                            {link}
                        </a>
                    ))}
                </div>

                <div className="bg-zelux-accent text-white text-xs px-4 py-2 rounded-full tracking-wide cursor-pointer">
                    Cart (0)
                </div>
            </div>
        </>
    )
}

