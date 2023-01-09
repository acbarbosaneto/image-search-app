import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Isuq64N1Nvoi7uD15FTftC0a750REQkLydaIInHmCuA',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
