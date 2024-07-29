const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43997901-59e2ef8a5969ad3162d77619c';

export const searchPhotos = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
export default getImage;

function getImage(image) {
  const API_KEY = '44666739-d0cf1ddb18f9d30146fa54081';
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  console.log(searchParams.toString());
  return fetch(`${BASE_URL}?${searchParams}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
