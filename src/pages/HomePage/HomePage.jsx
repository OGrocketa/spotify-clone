import React from 'react';
import { featuredPlaylists } from './mock-data.js'; 
import './HomePage.css'; 

const HomePage = () => {
  return (
    <>
    <div className="home-page">
      <h1>Featured Playlists</h1>
      <div className="playlists-container">
        {featuredPlaylists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <img src={playlist.image} alt={playlist.name} className="playlist-image" />
            <div className="playlist-info">
              <h2>{playlist.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default HomePage;
