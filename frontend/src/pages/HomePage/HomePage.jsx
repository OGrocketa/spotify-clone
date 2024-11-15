import React from 'react';
import './HomePage.css'; 
import { useEffect,useState } from 'react';
import { fetchAllArtists } from '../../api';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { Link } from 'react-router-dom';
import MyAudioPlayer from '../../AudioPlayer/AudioPlayer';




const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllArtists()
      .then(artists =>{
        setArtists(artists);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch artists', error)
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>

  return (
   <div className='hompage-container'>
    <h1>Artists</h1>
    <div className='artists-grid'>
      {artists.map(artist => (
          <Link to={`/artist/${artist.id}`} className='link-no-style' key={artist.id}>
            <span className='single-artist'> <ArtistCard  artist={artist} /></span>
          </Link>
            
          ))}
    </div>
    <MyAudioPlayer song_id={'adc8dc3c-a016-11ef-a0ab-cc607d4f1785'}/>
   </div>

  );
};

export default HomePage;
