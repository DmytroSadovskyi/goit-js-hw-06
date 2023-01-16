const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// отримуємо доступ до порожнього списку
const listOfImages = document.querySelector('.gallery');

// створюємо функцію для розмітки галереї

const makeGalleryMarkup = image => {
  const { url, alt } = image;

  return `<li class = 'gallery__item'><img src = ${url} alt = ${alt} width = '400' height = '200'></li>`;
};

const makeGallery = images.map(makeGalleryMarkup).join('');

//  додаємо розмітку в список
listOfImages.insertAdjacentHTML('afterbegin', makeGallery);
