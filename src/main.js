import './js/pixabay-api';
import './js/render-functions';
import { updateUi, getUserValue } from './js/render-functions';

const refs = {
  searchInput: document.querySelector('#search-input'),
  searchButton: document.querySelector('button'),
};
let userSearchRequestValue = '';

refs.searchInput.addEventListener('input', event => {
  userSearchRequestValue = getUserValue(event);
});
refs.searchButton.addEventListener('click', () => {
  fetchImageData(userSearchRequestValue);
});

function fetchImageData(serachRequest) {
  const apiRequestURL = `https://pixabay.com/api/?key=20858658-55430aeeed6a37ac1f56d3c0c&q=${serachRequest}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(apiRequestURL)
    .then(response => {
      if (!response.ok) {
        return;
      }
      return response.json();
    })
    .then(data => {
      const images = data.hits;
      updateUi(images);
    });
}
