const start =document.querySelector("#start");
const hero= document.querySelector("#hero");
const con1= document.querySelector("#con1");
const con2= document.querySelector("#con2");

// const game=()=>{
//     con1.style.display="none";
//     con2.style.display="block";
// }
// start.addEventListener("click", game);
// game();

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

  array.forEach((element , index) => {
      
    const buttons = document.createElement("button");
    buttons.innerText = element;
    hero.append(con2);
    con2.append(buttons);
    buttons.class=index;
    buttons.style.color = "red";
    buttons.style.width = "30px";

  })