// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

// 1. Создание и рендер разметки
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"/>
      </a>`;
    })
    .join('');
}
let lightbox = new SimpleLightbox('.gallery a', {
  // captions: true,
  // captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
