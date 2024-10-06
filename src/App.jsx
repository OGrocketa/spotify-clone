import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import PlayerBar from './components/PlayerBar/PlayerBar'
import HomePage from './pages/HomePage/HomePage'
import Sidebar from './components/SideBar/SideBar'


function App() {

  return (
    <>
      <Router>
        <Sidebar/>
          <Switch>
            <Route path="/" exact component={HomePage} >
            </Route>
          </Switch>
          <PlayerBar/>
      </Router>
        
    </>
  )
}

export default App
