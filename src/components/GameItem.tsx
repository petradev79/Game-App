import GameType from '../types/game';

const GameItem: React.FC<GameType> = (props) => {
  return (
    <div className='GameItem' key={props.id}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default GameItem;
