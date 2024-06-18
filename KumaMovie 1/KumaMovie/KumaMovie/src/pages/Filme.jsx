import data from '../../articles.json'
import {Link} from 'react-router-dom';

function Filme() {
    console.log(data)
    return ( 
        <main className='bg-primary-claro'>
        <input className='h-10px' type="text" name="busca" id="buscar" placeholder="Digite aqui sua busca " />
        
        <div className='grid grid-cols-5 gap-10'>
          {data.map(filme => (
            <div key={filme.title}>
              <div
                className='card flex flex-col items-center relative  h-80 w-full overflow-hidden sm:aspect-h-10 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-100'
              >
                <h2 className='text-center'>{filme.title}</h2>
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
                <Link to="/Sobre" />
              </div>
            </div>
          ))}
        </div>
      </main>
     );
}

export default Filme ;