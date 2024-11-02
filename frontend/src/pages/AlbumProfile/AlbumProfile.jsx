import React, { useState, useEffect } from 'react';
import "./AlbumProfile.css"
import SongsList from '../../components/SongsList/SongsList';
import { LuClock3 } from "react-icons/lu";
import PlayAlbumLine from '../../components/PlayAlbumLine/PlayAlbumLine';
import AlbumHeader from '../../components/AlbumHeader/AlbumHeader';
import { fetchAlbum,fetchArtist,fetchSongsFromAlbum} from '../../api';



const AlbumProfile = ({album_id}) => {
  const [album, setAlbum] = useState(null);
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const album_data = await fetchAlbum(album_id);
        setAlbum(album_data);

        const artist_data = await fetchArtist(album_data.artist_id);
        setArtist(artist_data);

        const songs_data = await fetchSongsFromAlbum(album_data.id);
        setSongs(songs_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [album_id]);

  if (!album || !artist || songs.length === 0) {
    return <p>Loading...</p>;
  }
  
  const release_date = new Date(album.release_date);
  const release_year = release_date.getFullYear();

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
        <p>{`${release_date.getDay()} ${release_date.toLocaleString('default', { month: 'long' })} ${release_year}`}</p>
        <p>{album.label}</p>
    </div>
    </>
      
  );
}

export default AlbumProfile;
