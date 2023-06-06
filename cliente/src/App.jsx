import {BrowserRouter ,Routes,Route,Navigate } from 'react-router-dom'
import {ClientePage} from './pages/ClientePage'
import { ClienteFormPage } from './pages/ClienteFormPage'
import {Navigation} from './components/Navigation'
import {Toaster} from 'react-hot-toast'

 function App(){
  return(
    <BrowserRouter>
     <div className="container mx-auto">
     <Navigation/>
      <Routes>
      <Route path="/" element={<Navigate to="/cliente_crud"/>}/>
         <Route path="/cliente_crud" element={<ClientePage/>}/>
         <Route path="/cliente_crud-create" element={<ClienteFormPage/>}/>
         <Route path="/cliente_crud/:id" element={<ClienteFormPage/>}/>
      </Routes>
      <Toaster/>
     </div>
    </BrowserRouter>
  )
}
export default App