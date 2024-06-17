import { useState, useEffect } from "react";
import {Link} from "react-router-dom"


function DetalhesFilmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect( ()=> {
        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))
    }, [])

    return ( 
        <>
        <h1>Filmes</h1>
        <div className="listaFilmes flex flex-row gap-3">
            {
                filmes.map(
                    filmes => (
                        <div className="card-filme" key={filmes.id}>
                            <img className=" w-600px h-200px" src={`${urlImg}${filmes.poster_path}`}/>
                            <h1>{filmes.title}</h1>
                            <Link className="bg-blue-500 " to={`filme/:${filmes.id}`}>Saber Mais</Link>
                        </div>
            
                    )
                )
            }
           
        </div>
        </>

     );
}

export default DetalhesFilmes;