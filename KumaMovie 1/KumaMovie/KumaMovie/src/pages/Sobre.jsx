



function Sobre() {
  const videoUrl = 'https://example.com/my-video.mp4';

  return (
    <div className="flex flex-col items-center">
      <div className="h-200 w-300 bg flex justify-center">
        <img src="../../public/Banner.png" alt="" />
        <img src="../../public/Capa.png" className="absolute top-28 left-1/2 transform -translate-x-1/2" alt="" />
        
      </div>
      <h1 className="m-auto text-xl font-bold text-primary-ocre">Garfield: Fora de Casa</h1>
      <video width="650" height="370" className="mt-10 mb-5 flex justify-center " controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

<footer className="bg-primary-ocre w-full max-w-screen-xl  shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
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
        <span className="block text-sm text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  
    
  );
}




export default Sobre;