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
}

export async function fetchSong(song_id) {
  const url = `http://localhost:8000/songs/${song_id}`;

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

export async function fetchSongsFromAlbum(albumId) {
  const url = `http://localhost:8000/albums/${albumId}/songs`;

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
    return data; // This should be the list of songs
  } catch (error) {
    console.error('Failed to fetch songs: ', error);
    return [];
  }
}
