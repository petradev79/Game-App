import axios from 'axios';
const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/';
const API_KEY = 'd9ef5aaa7amsh567eff444943417p1e6940jsnd77b531aa76d';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-rapidapi-key': API_KEY },
});

export default instance;
