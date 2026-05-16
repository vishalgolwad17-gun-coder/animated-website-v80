import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Stairs from './components/common/stairs.jsx'
import Navbar from './components/common/Navbar.jsx'
import Navprovider from './components/context/Navcontext.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Navprovider>
    <Stairs>
      <Navbar>
        <App />
      </Navbar>
    </Stairs>
    </Navprovider>
    </BrowserRouter>
 
)
