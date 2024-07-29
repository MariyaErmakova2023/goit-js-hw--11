import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//===============================================================================

import { searchPhotos } from './js/pixabay-api.js';
import { createGalleryMarkup } from './js/render-functions.js';

//==============================================================================

import createMarcupGallery from './js/render-functions';
import getImage from './js/pixabay-api';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showMessageError() {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    maxWidth: '432px',
    position: 'topRight',
    messageSize: 16,
    backgroundColor: '#ef4040',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
    theme: 'dark',
  });
}

function showGallery(searchQuery) {
  if (searchQuery) {
    showLoader();
    form.reset();
    gallery.innerHTML = '';
    //    searchImages(searchQuery)
    getImage(searchQuery)
      .then(data => {
        const arrayImages = data.hits;
        if (arrayImages.length) {
          gallery.innerHTML = createMarcupGallery(arrayImages);
          lightbox.refresh();
        } else {
          showMessageError();
        }
      })
      .catch(error => console.log(error))
      // .catch((error) => showMessageError(error))
      .finally(() => hideLoader());
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = event.target.elements.search.value;
  showGallery(searchQuery);
});
