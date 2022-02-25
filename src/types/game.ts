type GameType = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  status: string;
  minimum_system_requirements: {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
  };
  screenshots: {
    id: number;
    image: string;
  }[];
};

export default GameType;
