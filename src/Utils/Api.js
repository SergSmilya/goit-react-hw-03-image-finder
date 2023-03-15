import axios from 'axios';

const settingsUrl = {
  API_KEY: '33022988-27197d7be627ee112ee97c311',
  URL: 'https://pixabay.com/api/',
  image_type: 'photo',
  orientation: 'horizontal',
  page: 1,
  per_page: 12,
};

async function search(values) {
  const { API_KEY, URL, image_type, orientation, page, per_page } = settingsUrl;

  try {
    const response = await axios(
      `${URL}?key=${API_KEY}&q=${values}&image_type=${image_type}&orientation=${orientation}&page=${page}&per_page=${per_page}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export { search };
