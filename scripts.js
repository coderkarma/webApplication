
const body = document.querySelector('body');
let i = 1;

setInterval(()=>{
  body.style.backgroundImage = `url(images/image${i}.jpg)`;
  i++;
	if (i === 8) {
		i = 1;
  }
  
},3000)


