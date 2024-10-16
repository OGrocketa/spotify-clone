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



const chuj1 = {
  "id": 2,
  "name": "Mac Miller",
  "bio": "Malcolm James McCormick, known professionally as Mac Miller.",
  "albums": [3, 4],
  "avatar": "public/artists/mac miller/mac miller.jpg",
  "type": "Artist"
};

const chuj2 =     {
  "id": 5,
  "title": "Swimming",
  "artistId": 3,
  "artistName":"Mac Miller",
  "releaseDate": "2018-08-03",
  "type":"album",
  "tracksCount":"2",
  "albumLength": "9:51",
  "label":"© 2018 Warner Records Inc.",
  "songs": [
    {
      "title": "Self Care",
      "type":"Song",
      "albumLength": "5:45",
      "filePath": "public/artists/mac miller/albums/swimming/songs/Mac Miller - Self Care.mp3"
    },
    {
      "title": "Hurt Feelings",
      "type":"Song",
      "albumLength": "4:06",
      "filePath": "public/artists/mac miller/albums/swimming/songs/Mac Miller - Hurt Feelings .mp3"
    }
  ],
  "cover": "public/artists/mac miller/albums/swimming/cover.jpg"
}

const chuj3 = {
    "artistName":"Mac Miller",
    "title": "Self Care",
    "duration": "5:45",
    "filePath": "public/artists/mac miller/albums/swimming/songs/Mac Miller - Self Care.mp3",
    "cover": "public/artists/mac miller/albums/swimming/cover.jpg",
    "type":"Song",
    "albumLength": "5:45",
    "releaseDate": "2018-08-03",
    "lyrics":""
}


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


