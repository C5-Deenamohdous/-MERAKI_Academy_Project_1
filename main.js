/* START CODE UNDER THIS LINE */
//from  container 1  press start to begin the game
// it will take you to container 2 (link start  button with con 2 )
//  make an array with movies ele
// array wieh letter
//  loop ---> creat button <ele>(id)
// append button in body

const array = [
  "A",
  "B",
  " C",
  " D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// [''vikings'', '“'friends”, “New Amsterdam”, “the good doctor” , “dark” , “Chernobyl”, “breaking bad” , “when they see us “ , “banshee”, “Unbelievable”, “lupin”


// determine number of livves 
const showLives = document.getElementById("mylives");

//! arrayfor each button
array.forEach((element) => {
  const button = document.createElement("button");
  button.innerText = element;

  //    console.log(button);

  const body = document.querySelector("body");
  body.append(button);
  body.class = "third";
  button.style.color = "red";
  button.style.width = "30px";
  //    button.style.alignItems
});
//! array for series to become randomly
const series = ["vikings", "banshee"];
//make new array called series
// every element in array is come randomly
const random = Math.floor(Math.random() * series.length);
console.log(random);

//loop ------length of ele = numbers of bottom borders
// convert ele to split array

series.forEach((element) => {
  element.split("");
  console.log( element.split(""));
  
  // create a p tag to put element
  const p = document.createElement("p");
  const body = document.querySelector("body");
  p.innerText = element;
  p.class = "ele";
  body.append(p);
//  p.style.display = "none";

//   console.log(p);

  // //! create border tag to contain each letter ??????
   // element.length=Borders
//   console.log(Borders);  
   
for (let i = 0; i < element.length; i++) { 
 
 const  Borders = document.createElement('border')
 const body = document.querySelector("body");
 Borders.class="lines"
  Borders.innerText="_____ ";
  body.append(Borders)

 
}
 });

 
const press =() => {
 for (let i = 0; i < series.length; i++) { 
  
     console.log(series[i]);
 if (button ===series[i] ) {
 
// make loop in every char in ele
//  choosing button of letter if  letter === one of char in element
    button.style.opacity = "0.2";
    // drag the letter  in border in right place &&&& low the opacity of the button
  } else {
    // else ---- attach img of hangman number of tries = 6 
    //and remove unused button 
    // so i have aloop here 
    // create img tag with position hide
     const body = document.querySelector("body");
   const img=document.createElement('image');
    button.remove();
   // img.src = "./pic2";
   //  body.append(img);
   //  img.style.position="hide"; 
   //  img.src = "./pic3";
   
    }
   }
    button.addEventlistener("click", press);
  };
  press();


  





