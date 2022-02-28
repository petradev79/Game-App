import GameSlider from '../components/GameSlider';
import HeaderTitle from '../UI/HeaderTitle';
import ArticleCard from '../UI/ArticleCard';
import ImageType from '../types/image';
import AboutGame from '../components/AboutGame';
import {
  faWandSparkles,
  faDice,
  faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import freetogameLogo from '../assets/freetogame-logo.png';
import cyberpunk from '../assets/cyberpunk.jpg';
import assassin from '../assets/assassin.jpg';
import gta from '../assets/gta.jpg';
import './Home.css';

const title = {
  title: 'Your favorite game',
  subtitle:
    'With Game App, you can find games by deferent platform, game category and release date.',
};

const aboutGameData = [
  {
    title: 'Cyberpunk 2077',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid earum dolorum enim iure. Quibusdam magnam, culpa suscipit labore consectetur nemo architecto hic aliquid et a cumque natus necessitatibus nostrum.',
    imgUrl: cyberpunk,
  },
  {
    title: "Assassin's Creed",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid earum dolorum enim iure. Quibusdam magnam, culpa suscipit labore consectetur nemo architecto hic aliquid et a cumque natus necessitatibus nostrum.',
    imgUrl: assassin,
  },
  {
    title: 'Grand Theft Auto',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid earum dolorum enim iure. Quibusdam magnam, culpa suscipit labore consectetur nemo architecto hic aliquid et a cumque natus necessitatibus nostrum.',
    imgUrl: gta,
  },
];

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

const Home: React.FC<{ games: ImageType[] }> = ({ games }) => {
  return (
    <main className='home'>
      <section className='home-header header'>
        <HeaderTitle title={title.title} subtitle={title.subtitle} />
        <GameSlider data={games} settings={settings} forList={false} />

        <div className='big-desccription big-desccription--home container'>
          <span>Powered by</span>
          <img src={freetogameLogo} alt='Logo' />
          <p>
            Access programmatically the best free-to-play games and free MMO
            games! The Free-To-Play Games Database API (Aka FreeToGame API) is
            available for everyone to use without any restrictions.
          </p>
        </div>
        <div
          className='flex container'
          style={{ ['--gap-space' as any]: '50px' }}
        >
          <ArticleCard title='Games by platform' icon={faDiceD20} />
          <ArticleCard title='Games by category' icon={faWandSparkles} />
          <ArticleCard title='Games by tag' icon={faDice} />
        </div>
      </section>
      <section className='home-body'>
        <div className='home-body__title container'>
          <h2>About game app</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            accusamus expedita cum soluta voluptatum sequi aperiam, ab maxime
            provident excepturi non quaerat explicabo natus itaque, perspiciatis
            fugiat nam repellat, nihil ut error odio laborum dolore. Vitae
            tempore nihil molestias architecto, asperiores, et sunt iusto nam
            amet earum dolore, deserunt delectus?
          </p>
        </div>
        <div className='home-body__content container'>
          {aboutGameData.map((item) => (
            <AboutGame
              title={item.title}
              text={item.text}
              imgUrl={item.imgUrl}
              key={item.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
