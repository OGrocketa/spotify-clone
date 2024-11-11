import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumCard from './components/AlbumCard/AlbumCard.jsx'
import ArtistCard from './components/ArtistCard/ArtistCard.jsx'
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import PlayerBar from './components/PlayerBar/PlayerBar.jsx'
import ArtistProfile from './pages/ArtistProfile/ArtistProfile.jsx'
import {fetchAlbum, fetchArtist,fetchSong,fetchSongsFromAlbum} from './api/index.js'

// const artist = await fetchArtist('99770812-4218-46cd-86d1-e65d06a7ddc1');
// const album = await fetchAlbum('1e4fbdec-6df7-4e96-be84-7c4b113230b8')
let circles = '1e4fbdec-6df7-4e96-be84-7c4b113230b8';
let swimming = '1f693a7f-6054-4ff6-a8a9-bd8341274c36';
let artist_id = '99770812-4218-46cd-86d1-e65d06a7ddc1';
// const songs = await fetchSongsFromAlbum('1e4fbdec-6df7-4e96-be84-7c4b113230b8');
// const song = await fetchSong('0e3098e2-9876-11ef-999d-512ce8086d0d');


function App() {

  return (
    <>
      <Router>
        {/* <ArtistCard artistData={artist}/> */}
        {/* <AlbumCard albumData={album}/> */}
        {/* <AlbumProfile album_id={swimming}/>  */}
        {/* <SongProfile artist={artist} song={song} />  */}
        <ArtistProfile artist={artist_id}/>
      </Router>

    </>
  );
}

export default App;


