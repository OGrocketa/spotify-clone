export async function fetchAlbum(albumId) {
  const url = `http://localhost:8000/albums/${albumId}`;

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
}

export async function fetchSong(songId) {
  const url = `http://localhost:8000/songs/${songId}`;

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
    console.error('Failed to fetch song: ',error); 
  }
}

export async function fetchArtist(artistId) {
  const url = `http://localhost:8000/artists/${artistId}`;

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

