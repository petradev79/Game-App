import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import ImageType from '../types/image';
import './GameSlider.css';

const GameSlider: React.FC<{
  data: ImageType[];
  settings: {};
  forList: boolean;
}> = ({ data, settings, forList }) => {
  const [isForList, setIsForList] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsForList(forList);
  }, []);

  const chosenGameHandler = (id: number) => {
    if (!isForList) return;
    navigate(`/game/:${id}`);
  };

  return (
    <div className='slider-wrapper'>
      <Slider {...settings} className='slider'>
        {data.map((item) => (
          <div key={item.id} onClick={chosenGameHandler.bind(null, item.id)}>
            <img src={item.thumbnail} alt={item.title} />
            {isForList && <p className='slide-name'>{item.title}</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameSlider;
