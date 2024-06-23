import {Outlet} from "react-router-dom"
import Header from "./componentes/Header/Header"
import Footer from "./componentes/Footer/Footer"
function App() {

  return (
    
    <main>
      <Header/>
      <Outlet/>
      <Footer/>
      </main>

  )
}

export default App
