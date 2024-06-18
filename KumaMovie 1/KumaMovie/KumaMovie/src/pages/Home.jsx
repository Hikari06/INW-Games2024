import data from '../../articles.json'
import {Link} from 'react-router-dom';

function Home() {
    console.log(data)
    return ( 
        <main className='bg-primary-claro'>
        <input 
        className="input-field" 
        type="text" 
        name="busca" 
        id="buscar" 
        placeholder="Digite aqui sua busca " 
        />
        
<form className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


    
        <div className='grid grid-cols-5 gap-10 '>
          {data.map(filme => (
            <div key={filme.title}>
              <div
                className='card flex flex-col items-center relative  h-80 w-full overflow-hidden sm:aspect-h-10 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-100'
              >
                <img
                  src={filme.image}
                  alt={filme.title}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'brightness(50%)';
                    const button = document.createElement('button');
                    button.textContent = 'Assista agora';
                    button.style.textAlign = 'center';
                    button.style.justifyContent = 'center';
                    button.style.display = 'flex';
                    button.style.alignItems = 'center';
                    button.style.width = '150px';
                    button.style.height = '35px';
                    button.style.borderRadius = '50px';
                    button.style.padding = '10px';
                    button.style.background = ' #A79277 100%';
                    button.style.color = 'white';
                    button.style.position = 'absolute';
                    button.style.top = '80%';
                    button.style.left = '50%';
                    button.style.transform = 'translate(-50%, -50%)';
                    button.onmouseover = () => {
                      e.target.style.filter = 'brightness(50%)';
                    };
                    button.onmouseout = () => {
                      button.remove();
                      e.target.style.filter = 'brightness(100%)';
                    };
                    e.target.parentNode.appendChild(button);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'brightness(100%)';
                    const button = e.target.parentNode.querySelector('button');
                    if (button) {
                      button.remove();
                    }
                  }}
                />
                <h2 className='text-center'>{filme.title}</h2>
                <Link to="/Sobre" />
              </div>
            </div>
          ))}
        </div>
      </main>
     );
}
    
        
export default Home ;

/* <div className='card'>
    <h1>Titulo do filme</h1>
    <img src="/" alt="" />
    <div className='tag'>

    </div>

</div> */

