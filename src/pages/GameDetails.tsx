import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetch from '../helper/fetch';
import GameItem from '../components/GameItem';
import GameGallery from '../components/GameGallery';
import GameType from '../types/game';
import DeatailsHeaderCard from '../UI/DetailsHeaderCard';
import Button from '../UI/Button';
import {
  faCheck,
  faBookmark,
  faAsterisk,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import './GameDetails.css';

const GameDetails: React.FC = () => {
  const [game, setGame] = useState<GameType>();
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch.get(`game?id=${id}`);
      setGame(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className='game-details'>
      {game && (
        <div className='container'>
          <div className='big-desccription big-desccription--details'>
            <h2>{game.title}</h2>
            <p>{game.short_description}</p>
            <div className='flex flex-justify-center'>
              <Button
                className='btn btn--ghost'
                title='Show More'
                targetURL={game.freetogame_profile_url}
              />
              <Button
                className='btn btn--full'
                title='Get Game'
                targetURL={game.game_url}
              />
            </div>
          </div>
          <div className='game-details__header'>
            <DeatailsHeaderCard
              title='Release date'
              data={game.release_date}
              icon={faFire}
            />
            <div
              className='flex flex-justify-center'
              style={{ ['--gap-space' as any]: '30px' }}
            >
              <DeatailsHeaderCard
                title='Game Status'
                data={game.status}
                icon={faCheck}
              />
              <DeatailsHeaderCard
                title='Game Platform'
                data={game.platform}
                icon={faBookmark}
              />
              <DeatailsHeaderCard
                title='Game Genre'
                data={game.genre}
                icon={faAsterisk}
              />
            </div>
          </div>
          <div className='flex flex-justify-between'>
            <GameItem data={game} />
            <GameGallery data={game} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetails;
