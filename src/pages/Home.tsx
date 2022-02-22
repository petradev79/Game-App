import GameSlider from '../components/GameSlider';
import GamesList from '../components/GamesList';
import ArticleCard from '../UI/ArticleCard';
import {
  faComputerMouse,
  faCalendarCheck,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import freetogameLogo from '../assets/freetogame-logo.png';
import './Home.css';

const Home = () => {
  return (
    <main className='home'>
      <section className='home-header'>
        <div className='header-title'>
          <h1>Your favorite game</h1>
          <p>
            With Game App, you can find games by deferent platform, game
            category and release date.
          </p>
        </div>
        <GameSlider />

        <div className='home-powered container'>
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
          <ArticleCard title='Games by platform' icon={faKeyboard} />
          <ArticleCard title='Games by category' icon={faComputerMouse} />
          <ArticleCard title='Games by date' icon={faCalendarCheck} />
        </div>
      </section>

      <GamesList />
    </main>
  );
};

export default Home;
