import GameType from '../types/game';
import './GameGallery.css';

const GameGallery: React.FC<{ data: GameType }> = ({ data }) => {
  return (
    <div className='game-gallery'>
      {data.screenshots.map((item) => (
        <div key={item.id} className='game-gallery__img'>
          <img src={item.image} alt={`image-${item.id}`} />
        </div>
      ))}
    </div>
  );
};

export default GameGallery;
