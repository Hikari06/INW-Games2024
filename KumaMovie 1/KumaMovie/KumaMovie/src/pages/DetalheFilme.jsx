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
        <div className="listaFilmes flex flex-row gap-3 w-200 h-100">
            
           
        </div>
        </>

     );
}

export default DetalhesFilmes;