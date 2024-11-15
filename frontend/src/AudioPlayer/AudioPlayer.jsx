import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-modern-audio-player';
import { fetchSong,fetchAlbum,fetchArtist } from '../api';

const PlayerBar = ({song_id}) => {
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        if (song_id) {
            fetchSong(song_id).then(song => {
                setSong(song); // Assume `song` has an `albumId`x
                return fetchAlbum(song.album_id); // Chain the next fetch here
            })
            .then(albumData => {
                setAlbum(albumData); // Set the album data
                return fetchArtist(albumData.artist_id); // Chain the artist fetch
            })
            .then(artistData => {
                setArtist(artistData); // Finally set the artist data
            })
            .catch(error => console.error('Failed to fetch data', error));
        }
    }, [song_id]);

  if(!song || !album || !artist) return <p>Loading...</p>

  const playList = [
    {
      name: song.title,
      img: album.cover_url,
      src: song.file_url,
      writer:artist.name,
      id: 1,
    }
  ]
  const initialState = {
    volume: 0.8,
    isMuted: false,
    isLoop: false,
    playbackRate: 1.0,
  };

  const activeUI = {
    all: true,              // Enable all components
    playButton: true,       // Show play button
    playList: "unSortable",   // Display playlist as sortable
    prevNnext: true,        
    volume: true,           
    volumeSlider: true,     
    repeatType: true,       
    trackTime: true,       
    trackInfo: true,       
    artwork: true,     
    progress: "bar"    
  };

  const placement = {
    player: "bottom",
    playList: "right",
    interface: "center",
    volumeSlider: "top",
  };
  
  

  return (
    <div>
        <AudioPlayer playList={playList}
                    activeUI={activeUI}
                    initialState={initialState}
                    placement={placement}/>
                    
                    
    </div>
);
};

export default PlayerBar;
