import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const serachInput = document.querySelector('.ssearch-input');
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
function showNotification(status) {
  if (status) {
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
  return;
}
