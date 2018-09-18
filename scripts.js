//If you put all the image paths into an array, the rest of the code gets much simpler
const images = ["images/beach.jpg", "images/haven.jpg"];

function getRandomInt() {
  // No longer need min and max parameters, just the length of the array
  return Math.floor(Math.random() * images.length);
}

function nextBackground(){
  $("body").css("background-image", "url(" + images[getRandomInt()] + ")");
}
// For a continuously running timer, user setInterval, instead of setTimeout
setInterval(nextBackground, 1250);


// const img = document.querySelector("body");
// const urls = ["images/beach.jpg", "images/haven.jpg"];

// function getRandom() {
//      return Math.floor(Math.random() * urls.length);
//  }

//  function changeImage() {
//     img.body = urls[getRandom()];
//  }

//  setInterval(changeImage, 2000);