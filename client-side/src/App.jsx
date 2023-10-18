import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import NotFound from './pages/NotFound'

import Layout from './components/layout/Layout'



function App() {
  return (
   
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
           
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
  )
}

export default App