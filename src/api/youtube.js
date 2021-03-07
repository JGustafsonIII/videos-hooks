import axios from 'axios';
const KEY = 'AIzaSyDpavlWBNbSZRfre1bQUeHeHDq-khSzxeg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: KEY },
});
