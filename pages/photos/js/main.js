




document.addEventListener('DOMContentLoaded', () => {
  let myBtns=document.querySelectorAll('.button');
  myBtns.forEach(function(btn) {
      btn.addEventListener('click', () => {
        console.log('clicked');
        // add active class to the button that was clicked
        myBtns.forEach(b => b.classList.remove('active'));
      });
  });
});



function hideAll(){
  var bw = document.getElementById("infrared");
  var col = document.getElementById("colour");
  var ir = document.getElementById("bw");

  bw.style.display = "none";
  col.style.display = "none";
  ir.style.display = "none";

  // undo all buttons border
  var button_colour = document.getElementsByClassName("button_colour");
  button_colour[0].style.border = "2px solid #ffffff";
  var button_ir = document.getElementsByClassName("button_ir");
  button_ir[0].style.border = "2px solid #ffffff";
  var button_bw = document.getElementsByClassName("button_bw");
  button_bw[0].style.border = "2px solid #ffffff";
}


function showColor(){
  var x = document.getElementById("colour");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }

  // change page hash to colour
  history.pushState(null, null, '#colour');

  // change button_colour border
  var button_colour = document.getElementsByClassName("button_colour");
  button_colour[0].style.border = "2px solid #0064e6";

  images = document.querySelectorAll('#colour .clicker');
  setupLightbox(images);

}

function showBlackAndWhite(){
  var x = document.getElementById("bw");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }

  // change page hash to bw
  history.pushState(null, null, '#bw');

  // change button_bw border
  var button_bw = document.getElementsByClassName("button_bw");
  button_bw[0].style.border = "2px solid #000000";

  images = document.querySelectorAll('#bw .clicker');
  setupLightbox(images);
}

function showInfrared(){
  var x = document.getElementById("infrared");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }

  // change page hash to ir
  history.pushState(null, null, '#ir');

  // change button_ir border
  var button_ir = document.getElementsByClassName("button_ir");
  button_ir[0].style.border = "2px solid #6d0000";

  images = document.querySelectorAll('#infrared .clicker');
  setupLightbox(images);
}

window.onload = function() {

  // check url for hash
  if (window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    if (hash == "bw") {
      hideAll();
      showBlackAndWhite();
    } else if (hash == "ir") {
      hideAll();
      showInfrared();
    } else {
      hideAll();
      showColor();
    }
  }
  else {
    // default
    hideAll();
    showColor();
  }

  // go to top of page

  window.scrollTo(0, 0);
}





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

