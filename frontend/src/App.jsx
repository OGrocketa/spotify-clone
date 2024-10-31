import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AlbumCard from './components/AlbumCard/AlbumCard.jsx'
import ArtistCard from './components/ArtistCard/ArtistCard.jsx'
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import PlayerBar from './components/PlayerBar/PlayerBar.jsx'
import { chuj, chuj1, chuj2, chuj3 } from './testData.js';


async function fetchArtist(artistId) {
  const url = `http://localhost:8000/artists/${artistId}`;

  try{
    const response = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    });

    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();
    return data;

  }catch (error){
    console.error('Failed to fetch song: ',error);
  }
}

async function fetchAlbum(albumId) {
  const url = `http://localhost:8000/albums/${albumId}`;

  try{
    const response = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    });

    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();
    return data;
  }catch(error){
    console.error('Failed to fetch album: ',error); 
  }
}

async function fetchSong(songId) {
  const url = `http://localhost:8000/songs/${songId}`;

  try{
    const response = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    });

    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();
    return data;
  }catch(error){
    console.error('Failed to fetch song: ',error); 
  }
}

// const song = await fetchSong('38c1ff6b-f68d-4e4a-9ceb-6d8fbc666ddd');
// console.log(song);
// const album = await fetchAlbum(song.album_id);
// console.log(album);

// const artist = await fetchArtist(album.artist_id);
// console.log(artist);



function App() {

  return (
    <>
      <Router>
        {/* <ArtistCard artistData={chuj}/> */}
        {/* <AlbumCard albumData={chuj2}/> */}
        {/* <AlbumProfile/>  */}
        <SongProfile artist={chuj1} song={chuj3} /> 
       
      </Router>

    </>
  );
}

export default App;


