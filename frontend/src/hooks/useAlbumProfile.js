import { useState, useEffect } from 'react';
import { fetchAlbum } from '../api/albums';
import { fetchArtist } from '../api/artists';
import { fetchSongsFromAlbum } from '../api/songs';

//Load album data by id of the album
const useAlbumProfile = (album_id) => {
  const [album, setAlbum] = useState(null);
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [album_id]);

  return { album, artist, songs, loading };
};

export default useAlbumProfile;
