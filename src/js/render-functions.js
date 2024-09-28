// import getImage from './pixabay-api';

// export default createMarcupGallery;

// function createMarkquitupGallery(images) {
//   return images
//     .map(
//       element =>
//         `<li class="gallery-item">
//           <div class="gallery-image-tumb">
//             <a class="gallery-link" href="${element.largeImageURL}">
//                 <img class="gallery-image" src="${element.webformatURL}" alt="${element.tags}" />
//             </a>
//           </div>
//             <ul class="image-info">
//               <li class="image-info-item">
//                 <h4 class="image-info-item-title">Likes</h4>
//                 <p class="image-info-item-text">${element.likes}</p>
//               </li>
//               <li class="image-info-item">
//                 <h4 class="image-info-item-title">Views</h4>
//                 <p class="image-info-item-text">${element.views}</p>
//               </li>
//               <li class="image-info-item">
//                 <h4 class="image-info-item-title">Comments</h4>
//                 <p class="image-info-item-text">${element.comments}</p>
//               </li>
//               <li class="image-info-item">
//                 <h4 class="image-info-item-title">Downloads</h4>
//                 <p class="image-info-item-text">${element.downloads}</p>
//               </li>
//             </ul>
//         </li>`
//     )
//     .join('');
// }

// //========
// // import SimpleLightbox from 'simplelightbox';
// // import 'simplelightbox/dist/simple-lightbox.min.css';

// export function createImages(data) {
//   const lightbox = new SimpleLightbox('.gallery-list a', {
//     captions: true,
//     captionsData: 'alt',
//     captionsDelay: 250,
//   });

//   const galleryList = document.querySelector('.gallery-list');

//   let images = data.hits
//     .map(
//       image =>
//         `<div class="image-wrapper">
//     <a href="${image.largeImageURL}">
//     <img class="gallery-img" src="${image.webformatURL}" alt="${image.tags}"></img>
//     </a>
//     <div class="text-wrapper">
//     <div class="text-item"><h5 class="text-header">Likes</h5><p class="text-paragraph">${image.likes}</p></div>
//     <div class="text-item"><h5 class="text-header">Views</h5><p class="text-paragraph">${image.views}</p></div>
//     <div class="text-item"><h5 class="text-header">Comments</h5><p class="text-paragraph">${image.comments}</p></div>
//     <div class="text-item"><h5 class="text-header">Downloads</h5><p class="text-paragraph">${image.downloads}</p></div>
//     </div>
//     </div>`
//     )
//     .join('');

//   galleryList.insertAdjacentHTML('beforeend', images);
//   lightbox.refresh();
// }

// export function clearImages() {
//   const galleryList = document.querySelector('.gallery-list');
//   galleryList.innerHTML = '';
// }
