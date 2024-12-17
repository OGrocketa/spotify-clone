export async function fetchAlbum(album_id) {
    const url = `http://localhost:8000/albums/${album_id}`;
  
    try{
      const response = await fetch(url,{
        method:'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      });
  
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
  
      const data = await response.json();
      return data;
    }catch(error){
      console.error('Failed to fetch album: ',error); 
    }
};

export async function fetchAlbumsByartist_id(artist_id) {
    const url = `http://localhost:8000/artists/${artist_id}/albums`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data; // This should be the list of albums
    } catch (error) {
      console.error('Failed to fetch songs: ', error);
      return [];
    }
};