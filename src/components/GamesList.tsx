import { useContext } from 'react';
import { GamesContext } from '../store/games-context';
import GameItem from './GameItem';

const GamesList: React.FC = () => {
  const gamesCtx = useContext(GamesContext);

  if (gamesCtx.loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (gamesCtx.errorMessage) {
    return (
      <section>
        <p>{gamesCtx.errorMessage}</p>
      </section>
    );
  }

  return (
    <div className='game-list'>
      {gamesCtx.data.map((game) => (
        <GameItem key={game.id} {...game} />
      ))}
    </div>
  );
};

export default GamesList;
