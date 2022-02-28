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
import './Home.css';

const title = {
  title: 'Your favorite game',
  subtitle:
    'With Game App, you can find games by deferent platform, game category and release date.',
};

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
        <AboutGame />
      </section>
    </main>
  );
};

export default Home;
