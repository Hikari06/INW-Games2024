import {Outlet} from "react-router-dom"
import Header from "./componentes/Header/Header"
function App() {

  return (
    
    <main>
     <Header/>
     <Outlet/>
     </main>

  )
}

export default App
