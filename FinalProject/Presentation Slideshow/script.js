var myImages = 
 [
  
"https://user-images.githubusercontent.com/114317977/205435821-d284335b-cea5-4ef8-965d-d9ea5ca7e94a.JPG",

"https://user-images.githubusercontent.com/114317977/205435837-f3e7a032-2f62-4a3b-a8fd-3e932a85bf9d.JPG",
  
     
"https://user-images.githubusercontent.com/114317977/205435845-9a883e90-dedb-4c37-9b80-ab1c1158cd6d.JPG",
  
  "https://user-images.githubusercontent.com/114317977/205435889-04e1b5d8-a5e0-41b7-8616-a4693beb8c90.JPG",
  
  "https://user-images.githubusercontent.com/114317977/205435897-ffc5866d-48c3-49a3-8d8a-84aa8408ff32.JPG",
  
  "https://user-images.githubusercontent.com/114317977/205435935-b4d5265d-64ae-4938-97c2-977c3eb1fd03.JPG",
  
  "https://user-images.githubusercontent.com/114317977/205435943-26811176-f4c6-4108-852e-dfa414dbdadd.JPG",
  
 

 
 ];


var captionImages =["Home","About","Coursework","Artifact","Module Assignment", "Contact Me", "My Creative Pge"];

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
