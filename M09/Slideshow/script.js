
var myImages = 
 [
  
"https://user-images.githubusercontent.com/114317977/202786371-1ad040c6-5d9d-4e1d-9b9c-98e1b5e3dc02.JPG",

"https://user-images.githubusercontent.com/114317977/202786343-71a51f5d-2c09-433a-8b90-97120606bd04.JPG",
  
     
"https://user-images.githubusercontent.com/114317977/202786178-467f6c9f-292c-4c49-a5a3-aa9a377f3f21.JPG",
  
  "https://user-images.githubusercontent.com/114317977/202807096-ce4437e5-4b37-4a94-8a11-9094071a5ba3.JPG",
  
  "https://user-images.githubusercontent.com/114317977/202786327-711ccace-75f4-46fc-a7b2-c9bbae098889.JPG",
  
 

 
 ];


var captionImages =["Webpage","Resume","Chessboard","Rhombus","Form Validation"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next