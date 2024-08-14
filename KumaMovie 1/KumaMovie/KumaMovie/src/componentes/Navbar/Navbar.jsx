import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex grid-cols-1 gap-20'>
                <Link to ="/"><img  src="../../KumaMovieLogo.png" className='w-5/12 m-auto' alt="" /></Link>
                <input
                type="search"
                id="default-search"
                className=" w-xl  h-15 p-4 ps-10 mt-5 mb-5 mr-5 ml-5 text-sm text-primary-claro border border-primary-ocre rounded-full bg-white "
                placeholder="Search Mockups, Logos..."
                required
                />
                <li className='mt-5 mb-5 '><Link to ="/"> Home</Link></li>
                <li className='mt-5 mb-5 '><Link to ="filmes"> Filmes </Link></li>
                <li className='mt-5 mb-5 '><Link to ="blog"> Blog </Link></li>
                <li className='mt-5 mb-5 '><Link to ="contato"> Contato </Link></li>
                <li className='mt-5 mb-5 '><Link to="login">Login</Link></li>
                <Link to ="login"><img  src="../../Usuario.png" className='h-10 flex-end ml-50' alt="" /></Link>
            </ul>
        </nav>
        );
}

export default Navbar ;