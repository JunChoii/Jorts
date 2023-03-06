let addImageBox = document.querySelector(".newPicture");
let buttonAddImage = document.querySelector(".buttonAddImage");
let addButton = document.querySelector(".addPicture buttonApproveAdd");


buttonAddImage.addEventListener("click", (e) => {
  e.preventDefault();

  let boxDisplay = window.getComputedStyle(addImageBox).display;

  if (boxDisplay === "block") {
    addImageBox.style.display = "none";
  } else {
    addImageBox.style.display = "block";
  }
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  let picUrl = document.querySelector(src="");

  if (picUrl) {
    
  }

})


  //clicking add button will pass the image to the html <main></main>
  

