import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header>
        <div className="flex justify-around bg-primary-ocre text-zinc-50 p-4">
            <Navbar/>
            
        </div>
        <input
        type="search"
        id="default-search"
        className=" w-xl  h-15 p-4 ps-10 mt-5 mb-5 text-sm text-primary-claro border border-#A79277 rounded-full bg-white border-#A79277"
        placeholder="Search Mockups, Logos..."
        required
        />
        </header>
     );
}




export default Header ;