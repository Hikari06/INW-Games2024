import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PaginasFilmes(){

    const {id} = useParams();
    const [filmes, setFilmes] = useState([])

    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    


    useEffect( ()=> {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-br`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))
    },[])

    return(
        <>
        <h1> Detalhes do Filme</h1>
        <img src={`${urlImg}${filmes.backdrop_path}`}/>
         <p>{filmes.title}</p>
         <p>{filmes.overview}</p>
        </>
    );
}

export default PaginasFilmes;
