import data from '../../articles.json'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
    console.log(data)
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFilmIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000); 
        return () => clearInterval(interval); 
    }, []); 

    const handlePrevClick = () => {
        setCurrentFilmIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const handleNextClick = () => {
        setCurrentFilmIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const [Filmes, setFilmes] = useState([])

    useEffect( () => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))

    },[])


    return ( 
        

        <main className='bg-primary-claro'>

            <div className="relative w-full h-96 overflow-hidden rounded-lg"> 
                
                <div className="absolute inset-0 flex items-center justify-center">
                    {data.map((Filmes, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentFilmIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${Filmes.banner})` }}
                        >
                            
                            {/* Optional: Add content on top of the image */}
                            <div className=''>  
                                <img src="../../public/Rectangle 25.png" alt="" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className='h-15 w-7 absolute left-20'><h2 className="text-primary-ocre font-bold text-4xl text-alight-center text-wrap flex-row">{Filmes.title}</h2></div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
                    <button onClick={handlePrevClick} className="bg-primary-ocre text-white rounded-full p-2 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={handleNextClick} className="bg-primary-ocre text-white rounded-full p-2 ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

                    

            <div className='grid grid-cols-5 gap-5 mt-10'>
                {
                    data.map( (Filmes, index) => (
                        <div key={index}>
                            <div className='card flex flex-col  justify-center items-center relative mr-5 ml-5  h-90 w-50 overflow-hidden sm:aspect-h-10 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-100'>
                                
                                <div style={{backgroundImage: `url(${Filmes.image})`}} src={Filmes.image} alt={Filmes.title} className=" h-80 group mt-4 w-full rounded-md bg-cover bg-center shadow-lg cursor-pointer">
                                <div className="flex flex-col-reverse  bg-black justify-center bg-opacity-0 p-4 w-full h-full hover:bg-gradient-to-b from-transparent to-primary-ocre  transition-all duration-1000 text-white">
                                    <Link to='sobre'  className="mt-60 flex flex-col justify-center mr-5 ml-3 h-8 w-40 rounded-xl wrounded-xl bg-primary-ocre text-white opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}>
                                    <div className='text-center'>Assista Agora<div/></div></Link> 
                                    <div></div>
                                                
                                </div>
                                
                            </div>                            
                                <h2 className='absolute right-60 text-wrap text-center text-sm font-bold text-primary-ocre'>{Filmes.title}</h2>
                            <div className='tags my-2'>
                                {Filmes.tags.map( (tag, index) => (
                                    <span className="bg-primary-ocre p-1 my-1 mr-1 ml-1 rounded-xl" key={index}>{tag}</span>
                                ))}
                                </div>
                                

<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0.387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0.387-1.575Z"/>
    </svg>
</div>

                        </div>
                    </div>
                ))
            }
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
    );
}

export default Home ;

/* <div className='card'>
    <h1>Titulo do Filmes</h1>
    <img src="/" alt="" />
    <div className='tag'>

    </div>

</div> */