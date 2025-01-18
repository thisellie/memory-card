import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'

const clientId = import.meta.env.VITE_CLIENT_ID
const clientSecret = import.meta.env.VITE_CLIENT_SECRET

function App() {
  const [albumCovers, setAlbumCovers] = useState([])
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 
            "grant_type=client_credentials" +
            `&client_id=${clientId}` +
            `&client_secret=${clientSecret}`
        });

        const data = await response.json();
        setAccessToken(data.access_token);

      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    fetchAccessToken();
  }, []);

  // get Laufey Album Covers 🤩
  useEffect(() => {
    const getAlbumCovers = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(`https://api.spotify.com/v1/artists/7gW0r5CkdEUMm42w9XpyZO/albums?limit=12`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        const albumCovers = data?.items.map((album) => ({
          id: album.id,
          image: album.images[0].url,
          name: album.name,
          artist: album.artists[0].name,
        }));

        setAlbumCovers(albumCovers);

      } catch (error) {
        console.error('Error fetching album covers:', error);
      }
    };

    getAlbumCovers();
  }, [accessToken]);

  return (
    <>
      <Nav />
      <main>
        {albumCovers.map((albumCover) => (
          <Card key={albumCover.id} card={albumCover}/>
        ))}
      </main>
    </>
  )
}

export default App
