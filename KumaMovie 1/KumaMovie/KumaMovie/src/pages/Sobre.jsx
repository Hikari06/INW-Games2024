import data from '../../articles.json'
import banner from '../../articles.json'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';



function Sobre() {
    const videoUrl = 'https://example.com/my-video.mp4';
    const [filmes, setFilmes] = useState([])
    console.log(data)
    return (
    <main className='bg-primary-claro'>
    <div className="flex flex-col items-center">
        <div className="h-200 w-300 bg flex justify-center">
        <img src="../../BannerGarfield.png" alt="" className='w-full'/>
        <img src="../../public/Capa.png" className="absolute top-60 left-1/2 transform -translate-x-1/2" alt="" />
        </div>

        <h1 className="m-auto mt-5 text-xl font-bold text-primary-ocre">Garfield: Fora de Casa</h1>
        <p className='flex justify-center text-wrap mr-10 ml-10'>
        Garfield, o gato preguiçoso que odeia segundas-feiras e ama lasanha, se depara com uma aventura selvagem ao ar livre! Após um reencontro inesperado com seu pai há muito perdido, o maltrapilho gato de rua Vic, Garfield e seu amigo canino Odie são forçados a deixar suas vidas mimadas para se juntarem a Vic em um assalto hilário e arriscado.
        </p>
        
        <video width="650" height="370" className="mt-10 mb-5 flex justify-center " controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div> 

<footer className="bg-primary-ocre w-full max-w-screen-xl  shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
                <img src="../../KumaMovieLogo.png" className="h-20 mr-5 ml-5" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KumaMovie</span>
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




export default Sobre;