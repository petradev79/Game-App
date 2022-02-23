import { useState, useEffect } from 'react';
import fetch from '../helper/fetch';
import GameSlider from '../components/GameSlider';
import GameType from '../types/game';
import './GamesList.css';

const settings = {
  Infinity: true,
  slidesToShow: 6,
  slidesToScroll: 6,
};

const GamesList: React.FC<{ title: string; requestUrl: string }> = ({
  title,
  requestUrl,
}) => {
  const [games, setGames] = useState<GameType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch.get(requestUrl);
      setGames(response.data);
    };
    fetchData();
  }, [requestUrl]);

  return (
    <div className='game-list'>
      <h2>{title}</h2>
      <GameSlider data={games} settings={settings} forList={true} />
    </div>
  );
};

export default GamesList;
