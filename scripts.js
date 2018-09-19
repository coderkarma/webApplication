//If you put all the image paths into an array, the rest of the code gets much simpler
const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg","images/image4.jpg","images/image5.jpg","images/image6.jpg","images/image7.jpg"];

function getRandomInt() {
  // No longer need min and max parameters, just the length of the array
  return Math.floor(Math.random() * images.length);
}

function nextBackground(){
  $("body").css("background-image", "url(" +images[getRandomInt()] + ")");
}
// For a continuously running timer, user setInterval, instead of setTimeout
setInterval(nextBackground, 3000);


// const img = document.querySelector("body");
// const urls = ["images/beach.jpg", "images/haven.jpg"];

// function getRandom() {
//      return Math.floor(Math.random() * urls.length);
//  }

//  function changeImage() {
//     img.body = urls[getRandom()];
//  }

//  setInterval(changeImage, 2000);