import Slider from 'react-slick';
import { useContext } from 'react';
import { GamesContext } from '../store/games-context';
import './GameSlider.css';

const GameSlider = () => {
  const gamesCtx = useContext(GamesContext);
  console.log(gamesCtx.data);

  const settings = {
    Infinity: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    centerPadding: '0',
  };

  return (
    <div className='slider-wrapper'>
      <Slider {...settings} className='slider'>
        {gamesCtx.data.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameSlider;
