import React from 'react'
import { Route, Routes, Link } from 'react-router-dom' // Add Link import
import Home from './pages/Home'
import Agents from './pages/Agent'
import Projects from './pages/projects'

const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/agents' element ={<Agents/>}/>
        <Route path ='/projects' element ={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
