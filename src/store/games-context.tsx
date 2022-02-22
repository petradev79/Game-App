import { useState, useEffect, createContext } from 'react';
import GameType from '../types/game';
import fetch from '../helper/fetch';

type GamesContextObject = {
  data: GameType[];
  errorMessage: string;
  loading: boolean;
  fetchData: (fetchUrl: string) => void;
};

export const GamesContext = createContext<GamesContextObject>({
  data: [],
  errorMessage: '',
  loading: false,
  fetchData: () => {},
});

const GamesContextProvider: React.FC = (props) => {
  const [games, setGames] = useState<GameType[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (fetchUrl: string) => {
    setIsLoading(true);
    try {
      const response = await fetch.get(fetchUrl);
      if (response.status !== 200) throw new Error('Something went wrong!');
      console.log(response);
      setGames(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData('games');
  }, []);

  const contextValue: GamesContextObject = {
    data: games,
    errorMessage: error,
    loading: isLoading,
    fetchData: fetchData,
  };

  return (
    <GamesContext.Provider value={contextValue}>
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
