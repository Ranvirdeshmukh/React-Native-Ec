import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyB7dcS8hNzkMcVlPw6ICvNkbMlOgVSVdIY';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

const youtubeSearch = async (query) => {
  const response = await axios.get(ROOT_URL, {
    params: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 15,
    },
  });

  return response.data.items;
};

export default youtubeSearch;
