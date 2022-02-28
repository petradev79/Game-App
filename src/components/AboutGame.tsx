import Button from '../UI/Button';
import './AboutGame.css';

const AboutGame: React.FC<{ title: string; text: string; imgUrl: string }> = ({
  title,
  text,
  imgUrl,
}) => {
  return (
    <div className='about-game'>
      <div className='about-game__content'>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button
          className='btn btn--full btn--full-w'
          title='Get Game'
          targetURL='#'
        />
      </div>
      <div className='about-game__img'>
        <img src={imgUrl} alt='cyberpunk' />
      </div>
    </div>
  );
};

export default AboutGame;
