import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const serachInput = document.querySelector('.search-input');
const tempPromise = true;

iziToast.settings({
  timeout: 5000,
  titleColor: '#fff',
  position: 'topRight',
  messageColor: '#fff',
  icon: '',
  close: false,
});

// Function: show notification
export function showNotification() {
  iziToast.error({
    message: `Sorry, there are no images matching your search query. Please try again!`,
    class: 'error-notification',
    timeout: 5000,
    iconUrl: '/img/bi_x-octagon.svg',
    titleColor: '#fff',
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    progressBarColor: '#B51B1B',
    close: true,
  });
}

// Update UI
export function updateUi(arrayImages) {
  if (arrayImages.length <= 0) {
    showNotification();
  }
  const gallery = document.querySelector('.gallery-list');
  const markup = arrayImages
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="image-card">
              <img src="${webformatURL}" width="360" height="200" class="image-card__thumb" alt="${tags}">
              <ul class="image-card__footer">
                <li>
                    <p>Likes</p>
                    <p>${likes}</p>
                </li>
                <li>
                    <p>Views</p>
                    <p>${views}</p>
                </li>
                <li>
                    <p>Comments</p>
                    <p>${comments}</p>
                </li>
                <li>
                    <p>Downloads</p>
                    <p>${downloads}</p>
                </li>
              </ul>
          </li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markup);
}

// Check user input
export function getUserValue(event) {
  const button = document.querySelector('button');
  const value = event.target.value;

  if (value) {
    button.classList.remove('is-disable');
    button.removeAttribute('disabled', '');
    return value;
  } else {
    button.classList.add('is-disable');
    button.setAttribute('disabled', '');
  }
  return;
}
