import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-20'>
                <Link to ="/"><img  src="../../KumaMovieLogo.png" className='h-10 flex-row-start mr-50' alt="" /></Link>
                <li><Link to ="/"> Home</Link></li>
                <li><Link to ="filmes"> Filmes </Link></li>
                <li><Link to ="blog"> Blog </Link></li>
                <li><Link to ="contato"> Contato </Link></li>
                <li><Link to="login">Login</Link></li>
                <Link to ="login"><img  src="../../Usuario.png" className='h-10 flex-row-end ml-50' alt="" /></Link>
            </ul>
        </nav>
        );
}

export default Navbar ;