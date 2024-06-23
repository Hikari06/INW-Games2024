import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect( () => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))

    },[])


    return ( 

        <main className="bg-primary-claro">
        <div className="listaFilmes  grid-cols-5 gap-5  flex flex-row flex-wrap justify-center bg-primary-claro"> 
            {
                filmes.map(
                    filme => (
                        <main className='bg-primary-claro' key={filme.id}>
                            <div className="card flex flex-col  justify-center items-center relative mr-5 ml-5  h-90 w-50 overflow-hidden sm:aspect-h-10 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-100">
                            <div> 
                            <div className="card-filme flex flex-col-reverse bg-cover group rounded-xl bg-black justify-center bg-opacity-0 p-4 w-full h-full hover:bg-gradient-to-b from-transparent to-primary-ocre  transition-all duration-1000 text-white">
                                
                                <h1>{filmes.title}</h1>
                            <Link to={`${filme.id}`} className="bg-primary-ocre rounded-xl mt-5"  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}><div className="flex justify-center my-1">Saiba Mais</div></Link>
                            <img  src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} className=" h-80  group mt-4 w-full rounded-md bg-cover bg-center shadow-lg cursor-pointer"  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}/>
                            </div>
                            </div>  
                            </div>
                            

                            <footer className="bg-primary-ocre max-w-screen-xl  shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
                <img src="../../KumaMovieLogo.png" className="h-20 mr-5 ml-5" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">KumaMovie</span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">© 2024 <a href="https://flowbite.com/" className="hover:underline">KumaMovie™</a>. All Rights Reserved.</span>
    </div>
</footer>

                        </main>

                        

                    )
                )
            }
           
        </div>
        </main>

     );
}

export default Filmes ;