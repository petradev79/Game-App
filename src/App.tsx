import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import fetch from './helper/fetch';
import requests from './helper/requests';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import ImageType from './types/image';
import './App.css';

function App() {
  const [games, setGames] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch.get(requests.fetchAllGames);
      setGames(response.data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar suggestions={games} />
      <Routes>
        <Route path='/' element={<Home games={games} />} />
        <Route path='games' element={<Games />} />
        <Route path='game/:id' element={<GameDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
