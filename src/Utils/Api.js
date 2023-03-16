import axios from 'axios';

const settingsUrl = {
  API_KEY: '33022988-27197d7be627ee112ee97c311',
  URL: 'https://pixabay.com/api/',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export default class GalleryApi {
  constructor() {
    this.value = '';
    this.page = 1;
  }

  async search() {
    const { API_KEY, URL, image_type, orientation, per_page } = settingsUrl;

    try {
      const response = await axios(
        `${URL}?key=${API_KEY}&q=${this.value}&image_type=${image_type}&orientation=${orientation}&page=${this.page}&per_page=${per_page}`
      );
      this.incrementPage();
      return response;
    } catch (error) {
      return error;
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get readValue() {
    return this.value;
  }

  set writeValue(newQuery) {
    this.value = newQuery;
  }
}
