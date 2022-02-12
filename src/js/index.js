const $previusBtn = document.querySelector('.switch__btn--left');
const $nextBtn = document.querySelector('.switch__btn--right');

// Photos section
const trackPhoto = document.querySelector('.carousel__track--photo');
const slidesPhotos = Array.from(trackPhoto.children);
const slidePhotowidth = slidesPhotos[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => slide.style.left = `${slidePhotowidth * index}px`;
slidesPhotos.forEach(setSlidePosition);

// testimonial
const trackTesti = document.querySelector('.carousel__track--testi');
const slidesTesti = Array.from(trackTesti.children);
const slideTestiWidth = slidesTesti[0].getBoundingClientRect().width;

const setSlidePositionTesti = (slide, index) => slide.style.left = `${slideTestiWidth * index}px`;
slidesTesti.forEach(setSlidePositionTesti);

// name
const trackName = document.querySelector('.carousel__track--name');
const slidesName = Array.from(trackName.children);
const slideNameWidth = slidesName[0].getBoundingClientRect().width;

const setSlidePositionName = (slide, index) => slide.style.left = `${slideNameWidth * index}px`;
slidesName.forEach(setSlidePositionName);

// role
const trackRole = document.querySelector('.carousel__track--role');
const slidesRole = Array.from(trackRole.children);
const slideRoleWidth = slidesRole[0].getBoundingClientRect().width;

const setSlidePositionRole = (slide, index) => slide.style.left = `${slideRoleWidth * index}px`;
slidesRole.forEach(setSlidePositionRole);





const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('carousel__slide--current');
  targetSlide.classList.add('carousel__slide--current');
}
const carruselEl = (type) => {
  let targetSlides = [];
  const tracks = document.querySelectorAll('.carousel__track');
  const currentSlides = [tracks[0].querySelector('.carousel__slide--current'),
                        tracks[1].querySelector('.carousel__slide--current'),
                        tracks[2].querySelector('.carousel__slide--current'),
                        tracks[3].querySelector('.carousel__slide--current')];
  if (type === 'next') {
    targetSlides = [currentSlides[0].nextElementSibling, currentSlides[1].nextElementSibling,
                    currentSlides[2].nextElementSibling, currentSlides[3].nextElementSibling]
  } else {
    targetSlides = [currentSlides[0].previousElementSibling, currentSlides[1].previousElementSibling,
                    currentSlides[2].previousElementSibling, currentSlides[3].previousElementSibling]
  }
  return [currentSlides, targetSlides]
}



$nextBtn.addEventListener('click', () => {
  const [currentSlides, nextSlides] = carruselEl('next');

  moveToSlide(trackPhoto, currentSlides[0], nextSlides[0]);
  moveToSlide(trackTesti, currentSlides[1], nextSlides[1]);
  moveToSlide(trackName, currentSlides[2], nextSlides[2]);
  moveToSlide(trackRole, currentSlides[3], nextSlides[3]);
})

$previusBtn.addEventListener('click', () => {
  const [currentSlides, prevlSides] = carruselEl('previous');

  moveToSlide(trackPhoto, currentSlides[0], prevlSides[0]);
  moveToSlide(trackTesti, currentSlides[1], prevlSides[1]);
  moveToSlide(trackName, currentSlides[2], prevlSides[2]);
  moveToSlide(trackRole, currentSlides[3], prevlSides[3]);
})