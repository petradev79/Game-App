import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GamesContextProvider from './store/games-context';
import Home from './pages/Home';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <GamesContextProvider>
      <Header />
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </GamesContextProvider>
  );
}

export default App;
