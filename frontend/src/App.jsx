import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumCard from './components/AlbumCard/AlbumCard.jsx'
import ArtistCard from './components/ArtistCard/ArtistCard.jsx'
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import PlayerBar from './components/PlayerBar/PlayerBar.jsx'
import ArtistProfile from './pages/ArtistProfile/ArtistProfile.jsx'
import { chuj, chuj1, chuj2, chuj3 } from './testData.js';
import {fetchArtist} from './api/index.js'

console.log(await fetchArtist('99770812-4218-46cd-86d1-e65d06a7ddc1'))

function App() {

  return (
    <>
      <Router>
        <ArtistCard artistData={chuj}/>
        {/* <AlbumCard albumData={chuj2}/> */}
        {/* <AlbumProfile/>  */}
        {/* <SongProfile artist={chuj1} song={chuj3} />  */}
        {/* <ArtistProfile artist={chuj1}/> */}
      </Router>

    </>
  );
}

export default App;


