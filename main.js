// Macula.uy main scripts
// by Fabricio Ceppi

// setting the video displayers

function display(disp, vid) {
  let displayer = document.getElementById(disp);
  let video = document.getElementById(vid);

  displayer.onclick = function() {
    displayer.style.display = 'none';
    video.style.display = 'block';
  }
}

// mobile menu button function

const menuButton = document.getElementById('menu-button');
const closeMenu = document.getElementById('close-menu');
const menuModal = document.querySelector('nav');

menuButton.addEventListener('click', function() {
  menuModal.classList.add('opened');
});

closeMenu.addEventListener('click', function() {
  menuModal.classList.remove('opened');
});

// works modal check

const gallery = document.querySelector('.works-modal');
const closeGallery = document.getElementById('close-gallery');
const imageSet = document.querySelectorAll('.gallery-item>img');
const image = document.createElement('img');
const prev = document.getElementById('previous');
const next = document.getElementById('next');

let pos = 0;

// initialize modal

for (let i = 0; i < imageSet.length; i++) {
  imageSet[i].addEventListener('click', function() {
    gallery.classList.add('active');
    image.src = imageSet[i].src;
    pos = i;
  });
}

// move through the images

next.addEventListener('click', function() {
  if (pos < imageSet.length -1) {
    pos++;
  } else {
    pos = 0;
  }
  image.src = imageSet[pos].src;
});

prev.addEventListener('click', function() {
  if (pos > 0) {
    pos--;
  } else {
    pos = imageSet.length -1;
  }
  image.src = imageSet[pos].src;
});





gallery.appendChild(image);

closeGallery.addEventListener('click', function() {
  gallery.classList.remove('active');
});


// borrador

/*

crear una matriz con todas las imagenes de la pagina

agregar a cada elemento de la matriz un evento de click que active el menuModal

setear la src de la imagen dentro del modal para que iguale la src de la imagen clickeada

agregar a los botones una funcion que al hacer click mueva la posicion dentro de la matriz y reajuste el src de la imagen modal

*/
