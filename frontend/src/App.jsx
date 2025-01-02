import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import ArtistProfile from './pages/ArtistProfile/ArtistProfile.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';

import Layout from '../Layout.jsx';

function App() {
  
  return (
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path="/artist/:artist_id" element={<ArtistProfile />} />
              <Route path="/album/:album_id" element={<AlbumProfile />} />
              <Route path="/song/:song_id" element={<SongProfile />} />
          </Route>
        </Routes>
      
  );
}

export default App;


