
export async function fetchArtist(artist_id) {
    const url = `http://localhost:8000/artists/${artist_id}`;
  
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
  
    }catch (error){
      console.error('Failed to fetch song: ',error);
    }
}
  
export async function fetchAllArtists() {
    const url = `http://localhost:8000/all_artists`;
  
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
  
    }catch (error){
      console.error('Failed to fetch song: ',error);
    }
}
  
