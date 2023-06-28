

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
  match.addEventListener("click", function () {
    console.log("Clicked!");
    modal.style.display = "block";
    modalImg.src = this.src;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  })
})


modal.addEventListener('click', function(e){   
  if (modalImg.contains(e.target)){

  } else{
    console.log("Clicked outside!");
    modal.style.display = "none"
  }
});

