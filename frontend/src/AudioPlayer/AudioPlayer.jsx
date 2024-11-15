import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-modern-audio-player';
import { fetchSong,fetchAlbum,fetchArtist } from '../api';

const MyAudioPlayer = ({song_id}) => {
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        if (song_id) {
            fetchSong(song_id).then(song => {
                setSong(song); // Assume `song` has an `albumId`
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
      name: artist.name,
      img: album.cover_url,
      src: song.file_url,
      id: 1,
    }
  ]
  


  return (
    <div>
        <AudioPlayer playList={playList}
                    activeUI={true}/>
    </div>
);
};

export default MyAudioPlayer;
