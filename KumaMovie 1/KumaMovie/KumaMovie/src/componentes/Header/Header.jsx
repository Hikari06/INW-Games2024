import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-primary-ocre text-zinc-50 p-4">
            <span>Olá, visitante!</span>
            <Navbar/>
        </header>
     );
}




export default Header ;