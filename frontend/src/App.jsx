import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import ArtistProfile from './pages/ArtistProfile/ArtistProfile.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';



function App() {
  
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/artist/:artist_id" element={<ArtistProfile />} />
          <Route path="/album/:album_id" element={<AlbumProfile />} />
          <Route path="/song/:song_id" element={<SongProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


