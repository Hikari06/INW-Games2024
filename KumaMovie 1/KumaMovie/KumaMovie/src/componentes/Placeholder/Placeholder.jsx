import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import articlesData from '..//..//..//articles.json';

function Placeholder() {
  const [filmes, setFilmes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // Initialize filmes state with data from articles.json
  useEffect(() => {
    setFilmes(articlesData);
  }, []);

  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    if (searchTerm.length > 0) {
      const filteredSuggestions = filmes.filter(filme =>
        filme.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
      <input 
        className="border-transparent px-6 m-6 p-2 bg-clarinho rounded-full border-3 placeholder-white" 
        type="text"
        name="buscar" 
        id="buscar" 
        value={searchInput}
        placeholder="Digite sua busca"
        onChange={handleInputChange}
      />
     
      {searchInput && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg mt-2 absolute w-full max-w-lg">
          {suggestions.length > 0 ? (
            suggestions.map(filme => (
              <Link
                to={`${filme.id}`}
                className="block px-4 py-2 hover:bg-gray-200"
                key={filme.id}
              >
                <div className="flex items-center">
                  <img 
                    src={`${filme.image}`} 
                    alt={filme.title}
                    className="w-16 h-24 object-cover mr-4"
                  />
                  <span>{filme.title}</span>
                </div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-2">Filme não encontrado 😓</p>
          )}
        </div>
      )}

      <hr className="h-px m-2 border-0 bg-roxinho p-0" />

      <h1 className='font-bold text-roxinho text-xl p-3 pt-7 m-3 ms-8'>Filmes Populares</h1>
      <div className="container mx-auto p-4">
        <div className="listaFilmes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filmes.length > 0 ? (
            filmes.map(filme => (
              <Link to={`${filme.id}`} className="card-filme relative overflow-hidden rounded-lg shadow-lg group block w-full" key={filme.id}>
                <div style={{backgroundImage: `url(${filmes.image})`}} src={filmes.image} alt={filmes.title} className=" h-80 group mt-4 w-full rounded-md bg-cover bg-center shadow-lg cursor-pointer">
                                <div className="flex flex-col-reverse  bg-black justify-center bg-opacity-0 p-4 w-full h-full hover:bg-gradient-to-b from-transparent to-primary-ocre  transition-all duration-1000 text-white">
                                    <Link to='sobre'  className="mt-60  item-center mr-5 ml-0 h-8 w-40 rounded-xl wrounded-xl bg-primary-ocre text-white opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}>
                                    <div className='text-center'>Assista Agora<div/></div>
                                    </Link> 

                                </div>

                            </div> 
              </Link>
            ))
          ) : (
            <p className="text-white mb-5">Nenhum filme encontrado 😓</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Placeholder;
