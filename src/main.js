import './js/pixabay-api';
import { fetchImageData } from './js/pixabay-api';
import './js/render-functions';
import {
  updateUi,
  getUserValue,
  showLoader,
  addLightbox,
} from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.search-bar-form'),
  searchInput: document.querySelector('#search-bar'),
  searchButton: document.querySelector('button'),
  galleryList: document.querySelector('.gallery-list'),
};
let userSearchRequestValue = '';

refs.searchInput.addEventListener('input', event => {
  userSearchRequestValue = getUserValue(event);
});
// TODO: Fire function when pressed "enter"
refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  fetchImageData(userSearchRequestValue);
});
