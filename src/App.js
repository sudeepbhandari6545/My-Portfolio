import React from 'react'
//react router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//components
import NavMenu from './components/NavMenu'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Project from './components/pages/Project'
import Contact from './components/pages/Contact'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
