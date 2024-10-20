import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumCard from './components/AlbumCard/AlbumCard'
import ArtistCard from './components/ArtistCard/ArtistCard'
import AlbumProfile from './pages/AlbumProfile/AlbumProfile'
import SongProfile from './pages/SongProfile/SongProfile'
import PlayerBar from './components/PlayerBar/PlayerBar'
import { chuj, chuj1, chuj2, chuj3 } from './testData.js';
function App() {

  return (
    <>
      <Router>
        {/* <ArtistCard artistData={chuj}/> */}
        {/* <AlbumCard albumData={chuj2}/> */}
        {/* <AlbumProfile/>  */}
        
        <SongProfile artist={chuj1} song = {chuj3}/> 
       
      </Router>

    </>
  );
}

export default App;


