import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import  SignUp  from './Pages/SignUp'
import  SignIn  from './Pages/SignUp'
import Profile from './Pages/Profile'
export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>    
      <Route path='/about' element={<About/>}/>    
      <Route path='/sign-up' element={<SignUp/>}/>    
      <Route path='/sign-in' element={<SignIn/>}/>    
      <Route path='/profile' element={<Profile/>}/>    
    </Routes>
    
    </BrowserRouter>
  )
}
