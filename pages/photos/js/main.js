

var modal = document.getElementById('myModal');

//var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
//img.onclick = function(){
//  modal.style.display = "block";
//  modalImg.src = this.src;
//  captionText.innerHTML = this.alt;
//}



const matches = document.querySelectorAll(".clicker");

matches.forEach(match => {
  //match.addEventListener("click", function () {
    match.addEventListener("click", function () {
    console.log("Clicked!");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  })
})


$(modal).click(function(event){
  if (modalImg.contains(event.target)){

  } else{
    console.log("Clicked outside!");
    modal.style.display = "none"
  }
})

$(document).keydown(function(e) {
  if (e.key === "Escape") {
    modal.style.display = "none"
  }
});



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






