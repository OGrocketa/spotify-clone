import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumCard from './components/AlbumCard/AlbumCard'

const chuj = {
  "id": 5,
  "title": "Swimming",
  "artistId": 3,
  "releaseDate": "2018-08-03",
  "type":"album",
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
        <AlbumCard albumdata={chuj} />
      </Router>
    </>
  );
}

export default App;


