import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Category } from './Category'
import { Navbar } from '../components/Navbar'



export const Pages = () => {
  return (
    <div>
      <Router>
          <Navbar />
            <Routes>
                <Route exact path= '/' Component={Home}/>
                <Route exact path= '/category/:category' Component={Category}/>
            </Routes>
        </Router>
    </div>
  )
}
