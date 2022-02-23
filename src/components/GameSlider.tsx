import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import GameType from '../types/game';
import './GameSlider.css';

const GameSlider: React.FC<{
  data: GameType[];
  settings: {};
  forList: boolean;
}> = ({ data, settings, forList }) => {
  const [isForList, setIsForList] = useState(false);

  useEffect(() => {
    setIsForList(forList);
  }, []);

  const chosenGameHandler = (item: GameType) => {
    if (isForList) {
      console.log(item);
    }
  };

  return (
    <div className='slider-wrapper'>
      <Slider {...settings} className='slider'>
        {data.map((item) => (
          <div key={item.id} onClick={chosenGameHandler.bind(null, item)}>
            <img src={item.thumbnail} alt={item.title} />
            {isForList && <p className='slide-name'>{item.title}</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameSlider;
