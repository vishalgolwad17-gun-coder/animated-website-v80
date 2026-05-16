
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import Home from './pages/Home'


const App = () => {

  return (
    <div className='overflow-x-hidden'>
      
      {<Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/agence' element={<Agence/>}/>
      </Routes>}
      
      </div>
  ) 
}

export default App