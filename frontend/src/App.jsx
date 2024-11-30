import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import ArtistProfile from './pages/ArtistProfile/ArtistProfile.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import MusicPlayer from './components/MusicPlayer/MusicPlayer.jsx';


const song_id = 'adc8dc3c-a016-11ef-a0ab-cc607d4f1785';
function App() {
  
  return (
    <div className='spotify-clone'>
      <div className='main-window'>
        <div className='main-window-info'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path="/artist/:artist_id" element={<ArtistProfile />} />
              <Route path="/album/:album_id" element={<AlbumProfile />} />
              <Route path="/song/:song_id" element={<SongProfile />} />
            </Routes>
            
            <div className='main-window-music-player'>
              <MusicPlayer/>
            </div>
          </BrowserRouter>
        </div>
       
        
      </div>
      
    </div>
   
  );
}

export default App;


