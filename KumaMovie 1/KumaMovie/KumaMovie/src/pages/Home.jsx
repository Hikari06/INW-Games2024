import data from '../../articles.json'
import {Link} from 'react-router-dom';

function Home() {
    console.log(data)
    return ( 
        <main className='bg-primary-claro'>
            <input className=' h-10px' type="text" name="busca" id="buscar" placeholder="Digite aqui sua busca " />
            <div className='grid grid-cols-5 gap-10'>
                {
                    
                data.map(filme => (
                    <div className='card flex flex-col items-center' key={filme.title}>
                    <h2 className='text-center'>{filme.title}</h2>
                    <img src={filme.image} alt={filme.title} />
                    <Link to='./Filmes.jsx'></Link>

                    <div className='texto text-center'>
                        {filme.text.map(texto => (
                            <p key={texto}>{texto}</p>
                        ))}
                    </div>
                    


                    <div className='tag'>
                        {filme.tags.map(tag => (
                            <span key={tag} className='text-cyan-600 text-center'> {tag} </span>
                        ))}
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

