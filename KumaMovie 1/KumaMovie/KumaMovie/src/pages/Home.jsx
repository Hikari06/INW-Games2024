import data from '../../articles.json'
import {Link} from 'react-router-dom';

function Home() {
    console.log(data)
    return ( 
        <main className='bg-primary-claro'>
        
        <input
        type="search"
        id="default-search"
        className=" w-xl  h-15 p-4 ps-10 mt-5 mb-5 text-sm text-primary-claro border border-#A79277 rounded-full bg-white border-#A79277"
        placeholder="Search Mockups, Logos..."
        required
        />

       <div className='grid grid-cols-5 gap-5 '>
          {data.map(filme => (
            <div key={filme.title}>
              <div
                className='card flex flex-col items-center relative m-5  h-80 w-50 overflow-hidden sm:aspect-h-10 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-100'
              >
                {/* <img
                  src={filme.image}
                  alt={filme.title}
                /> */}
                <div style={{backgroundImage: `url(${filme.image})`}} className=" h-80 group my-4 w-full rounded-md bg-cover bg-center shadow-lg cursor-pointer">
                <div className="bg-black bg-opacity-0 p-4 w-full h-full hover:bg-gradient-to-b from-transparent to-primary-ocre  transition-all duration-1000 text-white">
                <Link to={`${filme.id}`} className="flex flex-col items-center rounded-xl bg-primary-ocre text-white opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>Assista Agora</Link>                </div>
              </div>

                <h2 className='text-center'>{filme.title}</h2>
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

