


images = document.querySelectorAll('.clicker');


function setupLightbox(images) {

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const close = document.getElementById('close');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      lightbox.classList.remove('hidden');
      lightboxImg.src = img.src;
      caption.textContent = img.getAttribute('data-caption');
      currentIndex = index;
    });
  });

  close.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });

  const showImage = (index) => {
    currentIndex = (index + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].getAttribute('data-caption');
  };

  prev.addEventListener('click', () => showImage(currentIndex - 1));
  next.addEventListener('click', () => showImage(currentIndex + 1));
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      if (e.key === 'Escape') lightbox.classList.add('hidden');
    }
  });
}

console.log(images);
setupLightbox(images);




