import { showLoader, updateUi } from './render-functions';

export function fetchImageData(serachRequest) {
  const apiRequestURL = `https://pixabay.com/api/?key=20858658-55430aeeed6a37ac1f56d3c0c&q=${serachRequest}&image_type=photo&orientation=horizontal&safesearch=true`;

  showLoader(true);

  // Use setTimeout method to simulate of slow network delay
  setTimeout(() => {
    fetch(apiRequestURL)
      .then(response => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then(data => {
        const images = data.hits;
        updateUi(images);
        showLoader(false);
      })
      .catch(error => console.log(error));
  }, 1000);
}
