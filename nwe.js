
const hero= document.querySelector("#hero");
const start =document.querySelector("#start");
const con1= document.querySelector("#con1");
const con2= document.querySelector("#con2");
const buttons= document.querySelector("#buttonCon");
const try1 = document.querySelector("#try");
const game=()=>{
    con1.style.display="none";
    con2.style.display="block";
}
start.addEventListener("click", game);

const tryfun=()=>{
  con1.style.display="block";
  con3.style.display="none";
  con2.style.display="none";
}

try1.addEventListener("click", tryfun);

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



const check =(e)=>{
  series=series.filter((element, index)=>{ 
    console.log(e.target.class);
  
 if (element[0]==e.target.class){
   
  //  Borders.append(e.target.class);
  }
  })
// else{

  // const body = document.querySelector("body");
  // const img=document.createElement('img');
  // button.remove();
  // img.src = "./pic2";
  //  body.append(img);
  //  img.style.position="none"; 
  //  img.style.position="block"; 
  //  img.src = "./pic3";
}
//  else ---- attach img of hangman number of tries = 6 
 //and remove unused button 
 // create img tag with position hide


// }

  array.forEach((element , index) => {

    const buttons = document.createElement("button");
    buttons.innerText = element;
    hero.append(con2);
    con2.append(buttonCon);
    buttonCon.append(buttons)
    buttons.class=element;
    buttons.style.color = "red";
    buttons.style.width = "30px";
   

  })
   buttons.addEventListener("click", check)
  //! array for series to become randomly

let series = ["vikings", "banshee"];
const random = Math.floor(Math.random() * series.length);
console.log(random);
series.forEach((element ,) => {
  element.split("");
  console.log( element.split(""));
  
  // create a p tag to put element
  const p = document.createElement("p");
  
  p.innerText = element;
  p.class = "ele";
  con2.append(p);
//  p.style.display = "none";
//  p.style.display = "block";
console.log(p);
  //! create border tag to contain each letter ??????
  //  element.length=Borders
  // console.log(Borders);  
  
for (let i = 0; i < element.length; i++) { 
 
 const  Borders = document.createElement('border')
 const con2 = document.querySelector("body");
 Borders.class="lines"
  Borders.innerText="_____ ";
  con2.append(Borders)
  // Borders.style.display="none"
  // Borders.style.display="block"
}
 });