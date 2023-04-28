import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '60caa9671fe348f0b6fd230bcf3b472a',
  },
});
