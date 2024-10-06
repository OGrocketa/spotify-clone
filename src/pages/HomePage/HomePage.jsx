import React from 'react';
import { featuredPlaylists } from '../../mock-data';
import './HomePage.css'; 
import SongProfilePage from '../../components/SongProfile/SongProfile';

const HomePage = () => {
  const song = "Stan";

  return (
    <>
    <div className="home-page">
      <SongProfilePage songTitle={song} />
      {/* <h1>Featured Playlists</h1> */}
      {/* <div className="playlists-container">
        {featuredPlaylists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <img src={playlist.image} alt={playlist.name} className="playlist-image" />
            <div className="playlist-info">
              <h2>{playlist.name}</h2>
            </div>
          </div>
        ))}
      </div> */}
    </div>
    </>

  );
};

export default HomePage;
