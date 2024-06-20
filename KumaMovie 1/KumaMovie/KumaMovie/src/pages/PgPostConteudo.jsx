import React, { useState } from 'react'

function PgPostConteudo() {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [movieFile, setMovieFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleFileChange = (event, setFile) => {
    setFile(event.target.files[0]);
  };
  
    return (

        
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        

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

        
        
      </form>
    );
  }
export default PgPostConteudo ;