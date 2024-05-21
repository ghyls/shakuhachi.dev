

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

