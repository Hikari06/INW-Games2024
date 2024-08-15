import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex grid-cols-1 gap-10'>
                <Link to ="/"><img  src="../../KumaMovieLogo.png" className='w-20 mt-5 mb-5 mr-5 ml-5' alt="" /></Link>
                <input
                type="search"
                id="default-search"
                className=" w-xl  h-10 p-4 ps-10 mt-5 mb-5 mr-5 ml-5 text-sm text-primary-claro border border-primary-ocre rounded-full bg-white "
                placeholder="Search Mockups, Logos..."
                required
                />
                <li className='mt-5 mb-5 mr-5 ml-5'><Link to ="/"> Home</Link></li>
                <li className='mt-5 mb-5 mr-5 ml-5'><Link to ="filmes"> Filmes </Link></li>
                <li className='mt-5 mb-5 mr-5 ml-5'><Link to ="blog"> Blog </Link></li>
                <li className='mt-5 mb-5 mr-5 ml-5'><Link to ="contato"> Contato </Link></li>
                <li className='mt-5 mb-5 mr-5 ml-5'><Link to="login">Login</Link></li>
                <Link to ="login"><img  src="../../Usuario.png" className='w-10 flex-end mt-5 mb-5 mr-5 ml-5' alt="" /></Link>
            </ul>
        </nav>
        );
}

export default Navbar ;