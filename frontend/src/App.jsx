import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import ArtistProfile from './pages/ArtistProfile/ArtistProfile.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import MusicPlayer from './components/MusicPlayer/MusicPlayer.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

function App() {
  
  return (

        <div className='spotify-clone'>
          <BrowserRouter>
          <div className='search-bar-container'>
            <SearchBar/>
          </div>
          <div className='main-window'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path="/artist/:artist_id" element={<ArtistProfile />} />
              <Route path="/album/:album_id" element={<AlbumProfile />} />
              <Route path="/song/:song_id" element={<SongProfile />} />
            </Routes>
          </div>
            
            <div>
              <MusicPlayer/>
            </div>
          </BrowserRouter>
        </div>
          
      
  );
}

export default App;


