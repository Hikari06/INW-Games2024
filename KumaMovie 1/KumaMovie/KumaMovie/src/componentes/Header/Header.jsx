import Navbar from "../Navbar/Navbar";
import Placeholder from "../Placeholder/Placeholder";



function Header() {
    return ( 
        <>
        <div className="bg-primary-claro">
        <header className="flex justify-around bg-primary-ocre text-zinc-50 p-4">
            <Navbar/>
        </header>
        <Placeholder></Placeholder>
        </div>
        </>
        );
}




export default Header ;