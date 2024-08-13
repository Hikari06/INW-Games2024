import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Login() {
    
  const [name, setName] = useState(""); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [movieFile, setMovieFile] = useState(null);
  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  };

  const handleSubmit = (event, setTitle) => {
    event.preventDefault();
    alert(`The description you entered was: ${title}`)
  };

  const handleSubmit = (event, setDescription) => {
    setDescription();
    alert(`The description you entered was: ${description}`)
  };

  const handleFileChange = (event, setMovieFile) => {
    setMoiveFile(event.target.files[0]);
  };
  
    return (
    <main className='bg-primary-claro'>
        
    <form onSubmit={handleSubmit} className='flex flex-col items-center bg-primary-claro'>
        

    <form class="max-w-sm mx-auto">
    <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
    </div>
    <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
        <div className='mt-5 mb-5'>
        <label htmlFor="coverImage">Capa do Filme:</label>
        <input 
        type="file"  
        id="coverImage" 
        accept="image/*" 
        onChange={(event)=> handleFileChange(event, setCoverImage)} 
        className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" // Add the class here
        />
        </div>

        <div className='mt-5 mb-5'> 
        <label htmlFor="movieFile">Arquivo do Filme:</label>
    
        <input
        type="file"
        id="movieFile"
        accept="video/*"
        onChange={(event) => handleFileChange(event, setMovieFile)}
        className="  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" // Add the class here
        />
        </div>
        
    <button type="submit" class="text-white bg-primary-ocre hover:bg-primary-ocr focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Postar</button>
</form>

        
        
        </form >
        <footer className="bg-primary-ocre max-w-screen-xl  mt-10 shadow dark:bg-gray-900 ">
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
export default Login ;