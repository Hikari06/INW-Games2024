import Navbar from "../Navbar/Navbar";


function Header() {
    return ( 
        <>
        <div className="bg-primary-claro">
        <header className="flex justify-around bg-primary-ocre text-zinc-50 p-4">
            <Navbar/>
        </header>
        
        </div>
        </>
        );
}




export default Header ;