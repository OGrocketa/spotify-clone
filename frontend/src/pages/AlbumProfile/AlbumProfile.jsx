import React, { useState, useEffect } from 'react';
import "./AlbumProfile.css"
import SongsList from '../../components/SongsList/SongsList';
import { LuClock3 } from "react-icons/lu";
import PlayAlbumLine from '../../components/PlayAlbumLine/PlayAlbumLine';
import AlbumHeader from '../../components/AlbumHeader/AlbumHeader';
import { fetchAlbum,fetchArtist,fetchSongsFromAlbum} from '../../api';
import { useParams } from 'react-router-dom';
import useAlbumProfile from '../../hooks/useAlbumProfile';




const AlbumProfile = () => {
  const {album_id} = useParams();
  const{album, artist, songs, loading} = useAlbumProfile(album_id);

  if (!album || !artist || songs.length === 0) {
    return <p>Loading...</p>;
  }
  
  const release_date = new Date(album.release_date);
  const release_year = release_date.getFullYear();

  const labels = album.label ? album.label.split("℗") : ["", ""];
  const firstLabel = labels[0].trim();
  const secondLabel = `℗ ${labels[1].trim()}`;

  return (
    <>
      <div className='album-page-container'>
          <AlbumHeader album={album} artist={artist} />

          <div className='play-album'>
              <PlayAlbumLine />
          </div>

          <div className='song-list-header'>
              <span className='header-index'>#</span>
              <span className='header-title'>Title</span>
              <LuClock3 className='header-clock-icon' />
          </div>

          <hr />

          <SongsList songs={songs} artistName={artist.name} />
      </div>
      <div className='copyright-container'>
        <p>{`${release_date.getDate()} ${release_date.toLocaleString('default', { month: 'long' })} ${release_year}`}</p>

        <div className='labels-container'>
          <p>{firstLabel}</p>
          <p>{secondLabel}</p>
        </div>
        
    </div>
    </>
      
  );
}

export default AlbumProfile;
