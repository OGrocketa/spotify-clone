import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumCard from './components/AlbumCard/AlbumCard'
import ArtistCard from './components/ArtistCard/ArtistCard'
import AlbumProfile from './pages/AlbumProfile/AlbumProfile'
import SongProfile from './pages/SongProfile/SongProfile'

const chuj = {
  "id": 1,
  "name": "Eminem",
  "bio": "Marshall Bruce Mathers III, known professionally as Eminem.",
  "albums": [1, 2],
  "avatar": "public/artists/eminem/eminem.jpg",
  "type":"Artist"
};

const chuj2 =     {
  "id": 5,
  "title": "Swimming",
  "artistId": 3,
  "artistName":"Mac Miller",
  "releaseDate": "2018-08-03",
  "type":"album",
  "tracksCount":"2",
  "timeLength": "9:51",
  "label":"© 2018 Warner Records Inc.",
  "songs": [
    {
      "title": "Self Care",
      "duration": "5:45",
      "filePath": "public/artists/mac miller/albums/swimming/songs/Mac Miller - Self Care.mp3"
    },
    {
      "title": "Hurt Feelings",
      "duration": "4:06",
      "filePath": "public/artists/mac miller/albums/swimming/songs/Mac Miller - Hurt Feelings .mp3"
    }
  ],
  "cover": "public/artists/mac miller/albums/swimming/cover.jpg"
}

function App() {
  return (
    <>
      <Router>
        {/* <ArtistCard artistData={chuj}/>
        <AlbumCard albumData={chuj2}/> */}
        {/* <AlbumProfile/> */}
      </Router>
    </>
  );
}

export default App;


