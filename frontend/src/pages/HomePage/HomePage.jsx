import React from 'react';
import './HomePage.css'; 
import { useEffect,useState } from 'react';
import { fetchAllArtists } from '../../api';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { Link } from 'react-router-dom';




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
   </div>

  );
};

export default HomePage;
