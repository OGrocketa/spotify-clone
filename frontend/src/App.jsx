import './App.css'
import {Routes, Route } from 'react-router-dom';
import AlbumProfile from './pages/AlbumProfile/AlbumProfile.jsx'
import SongProfile from './pages/SongProfile/SongProfile.jsx'
import ArtistProfile from './pages/ArtistProfile/ArtistProfile.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import PersistLogin from './components/PersistLogin.jsx'
import Layout from '../Layout.jsx';
import RequireAuth from './components/RequireAuth.jsx';
import User_Profile from './pages/UserProfile/UserProfile.jsx';

const Roles = {
    'User' : 0,
    "Moderator" : 1,
    "Admin" : 2
  }


function App() {
  
  return (
        <Routes>
          <Route path='/' element={<Layout/>}>
              {/* Public routes */}
              <Route path='/' element={<HomePage/>}/>
              <Route path="/artist/:artist_id" element={<ArtistProfile />} />
              <Route path="/album/:album_id" element={<AlbumProfile />} />
              <Route path="/song/:song_id" element={<SongProfile />} />
              
              <Route element={<PersistLogin/>}>
              {/* Private routes */}
                <Route element ={<RequireAuth allowedRoles={[Roles.User, Roles.Moderator, Roles.Admin]}/>} >
                  <Route path="/user" element={<User_Profile/>}/>
                </Route>
              </Route>
              
          </Route>
        </Routes>
      
  );
}

export default App;
