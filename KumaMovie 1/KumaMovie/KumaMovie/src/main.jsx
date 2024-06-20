import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound.jsx'
import Filmes from './pages/Filme.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import Home from './pages/Home.jsx'
import PaginasFilmes from './pages/PaginasFilmes.jsx'
import Serie from './pages/Serie.jsx'
import PgPostConteudo from './pages/PgPostConteudo.jsx'
import DetalheFilme from './pages/DetalheFilme.jsx'



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/> },
        {path: "filmes", element: <Filmes/>},
        {path: 'filmes/:id', element: <PaginasFilmes/>},
        {path: "sobre", element: <Sobre/>},
        {path: "contato", element: <Contato/>},
        {path: "Serie", element: <Serie/>},
        {path: "POST", element: <PgPostConteudo/>},
        {path: "Detalhe", element: <DetalheFilme/>},
        {path: "*", element: <PageNotFound/>}

      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
