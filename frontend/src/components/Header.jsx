import gordon from "../assets/gordon-wagner.jpg"


export const Header = () => {


  return (
    <header className="flex  bg-zelux-cream py-10 items-center justify-center">


      <div className="space-y-4 px-3.5">

        <h1 className="text-zelux-accent ">NEW SEASON-2026</h1>

        <div>
          <h1 className="text-6xl font-bold text-zelux-dark font-serif">DRESS UP</h1>
          <h1 className="text-6xl font-bold text-zelux-accent font-serif">YOUR LOOK</h1>
        </div>

        <p className="max-w-sm text-gray-800">
          discover curated pieces that blend timeless elegance
          with modern edge style that speaks before you say a
          word
        </p>

        <div className="flex gap-3">


          <button className=" bg-zelux-dark text-white px-4 py-2 rounded-2xl border border-gray-400 ">
            Shop Now
          </button>

          <button className=" text-black px-4 py-2 rounded-2xl border border-gray-400">
            Explore lookbook
          </button>


        </div>
        <hr className="w-70 border-zelux-divider" />

        <div className="flex gap-6">

          <div>
            <h1 className="text-3xl font-bold">4.2k+</h1>
            <p className="text-zelux-hint">pieces </p>
            <p className="text-zelux-hint">available</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold">98%</h1>
            <p className="text-zelux-hint">happy </p>
            <p className="text-zelux-hint">customers</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold">Free</h1>
            <p className="text-zelux-hint">Returns </p>
            <p className="text-zelux-hint">always</p>
          </div>

        </div>

      </div>

      <div className="flex">
        <div>
          <img src={gordon} alt="" srcset="" className="h-80 w-70 object-cover rounded-sm"/>
        </div>
        <div className="ml-8">
           <img src={gordon} alt="" srcset="" className="h-40 mb-1 object-cover rounded-sm" />
          <img src={gordon} alt="" srcset="" className="h-40 object-cover rounded-sm" /> 
        </div>
      </div>
    </header>
  )
}