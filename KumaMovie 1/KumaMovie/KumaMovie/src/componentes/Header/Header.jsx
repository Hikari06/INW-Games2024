import Navbar from "../Navbar/Navbar";


function Header() {
    return ( 
        <>
        <div className="bg-primary-claro">
        <header className="flex justify-around bg-primary-ocre text-zinc-50 p-4">
            <Navbar/>
        </header>
        
        <input
        type="search"
        id="default-search"
        className=" w-xl  h-15 p-4 ps-10 mt-5 mb-5 mr-5 ml-5 text-sm text-primary-claro border border-primary-ocre rounded-full bg-white "
        placeholder="Search Mockups, Logos..."
        required
        />
        </div>
        </>
        );
}




export default Header ;