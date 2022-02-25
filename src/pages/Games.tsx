import HeaderTitle from '../UI/HeaderTitle';
import GamesList from '../components/GamesList';
import requests from '../helper/requests';
import './Games.css';

const title = {
  title: 'Find your favorite',
  subtitle:
    'I believe it is easy to guess which is my favorite game, check out our lists of games',
};

const Games: React.FC = () => {
  return (
    <main className='games'>
      <section className='header games-header'>
        <HeaderTitle title={title.title} subtitle={title.subtitle} />
        <div className='big-desccription big-desccription--games container'>
          <h2>The Witcher 3: Wild Hunt</h2>
          <p>
            It is an action role-playing game developed by CD Projekt Red, takes
            place in a fictional fantasy world based on Slavic mythology.
            Players control Geralt of Rivia, a monster slayer for hire known as
            a Witcher.
          </p>
        </div>
      </section>
      <section className='games-lists'>
        <GamesList
          title='Games for Windows PC'
          requestUrl={requests.fetchByPlatformPC}
        />
        <GamesList
          title='Games for Browser Web'
          requestUrl={requests.fetchByPlatformBrowser}
        />
        <GamesList
          title='Games category Shooter'
          requestUrl={requests.fetchByCategoryShooter}
        />
        <GamesList
          title='Games category Strategy'
          requestUrl={requests.fetchByCategoryStrategy}
        />
        <GamesList
          title='Games category Racing'
          requestUrl={requests.fetchByCategoryRacing}
        />
        <GamesList
          title='Games category Sports'
          requestUrl={requests.fetchByCategorySports}
        />
        <GamesList
          title='Open world Games'
          requestUrl={requests.fetchByTagOpenWorld}
        />
        <GamesList
          title='Survival Games'
          requestUrl={requests.fetchByTagSurvival}
        />
        <GamesList title='Anime Games' requestUrl={requests.fetchByTagAnime} />
        <GamesList
          title='First person Games'
          requestUrl={requests.fetchByTagFirstPerson}
        />
        <GamesList
          title='Third person Games'
          requestUrl={requests.fetchByTagThirdPerson}
        />
      </section>
    </main>
  );
};

export default Games;
