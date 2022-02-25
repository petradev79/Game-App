import GameType from '../types/game';
// import ItemHeaderCard from '../UI/ItemHeaderCard';
// import {
//   faCheck,
//   faBookmark,
//   faAsterisk,
//   faFire,
// } from '@fortawesome/free-solid-svg-icons';
import './GameItem.css';

const GameItem: React.FC<{ data: GameType }> = ({ data }) => {
  console.log(data);

  return (
    <div className='game-item'>
      <div className='flex flex-justify-between'>
        <div className='game-item__img'>
          <img src={data.thumbnail} alt={data.title} />
          <div className='flex flex-justify-between'>
            <span>Game publisher:</span>
            <p>{data.publisher}</p>
          </div>
          <div className='flex flex-justify-between'>
            <span>Game developer:</span>
            <p>{data.developer}</p>
          </div>
        </div>
        <div className='game-item__system_req'>
          <h3>Minimum System Requirements</h3>
          <p>
            <span>Operating system:</span>
            {data.minimum_system_requirements.os}
          </p>
          <p>
            <span>Graphics:</span>
            {data.minimum_system_requirements.graphics}
          </p>
          <p>
            <span>Memory:</span>
            {data.minimum_system_requirements.memory}
          </p>
          <p>
            <span>Processor:</span>
            {data.minimum_system_requirements.processor}
          </p>
          <p>
            <span>Storage:</span>
            {data.minimum_system_requirements.storage}
          </p>
        </div>
      </div>
      <div className='game-item__footer'>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default GameItem;
