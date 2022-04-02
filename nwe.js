const hero = document.querySelector("#hero");
const start = document.querySelector("#start");
const con1 = document.querySelector("#con1");
const con2 = document.querySelector("#con2");
const buttons = document.querySelector("#buttonCon");
const try1 = document.querySelector("#try");
const img = document.querySelector("#first");
const con = document.querySelector(".second");

let series = ["vikings", "banshee"];
const random = () => {
  return series[Math.floor(Math.random() * series.length)];
};
const word = random();
const game = () => {
  console.log(word);

  con1.style.display = "none";
  con2.style.display = "block";
  word.split('').forEach((element ,index) => {
    const span  = document.createElement('span')
    span.innerText = '*'
    span.id =index
    con.append(span)
  })

  // Borders.innerText="*";
  // con2.append(Borders)

};
start.addEventListener("click", game);

const tryfun = () => {
  con1.style.display = "block";
  // con3.style.display = "none";
  con2.style.display = "none";
};

try1.addEventListener("click", tryfun);

const array = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let imgArr = [
  { img1: "./pic1.png", id: 1 },
  { img1: "./pic2.png", id: 1 },
  { img1: "./pic3.png", id: 2 },
  { img1: "./pic4.png", id: 3 },
  { img1: "./pic5.png", id: 4 },
  { img1: "./pic6.png", id: 5 },
  { img1: "./pic7.png", id: 6 },
];

let count = 0;
array.forEach((element, index) => {
  const buttons = document.createElement("button");
  buttons.innerText = element;
  hero.append(con2);
  con2.append(buttonCon);
  buttonCon.append(buttons);
  buttons.id = element;
  buttons.style.color = "red";
  buttons.style.width = "30px";
  buttons.addEventListener("click", (e) => {
    if (word.indexOf(e.target.id) !== -1) {
      buttons.style.backgroundColor = "blue";
      

    } else {
      img.innerText = "";
      const image = document.createElement("img");
      image.src = imgArr[count].img1;
      img.append(image);
      count++;
    }
  });
});

//! array for series to become randomly


// console.log(random);
// series.forEach((element ,) => {
//   element.split("");
//   console.log( element.split(""));

//   // create a p tag to put element
//   const p = document.createElement("p");

//   p.innerText = element;
//   p.class = "ele";
//   con2.append(p);
// //  p.style.display = "none";
// //  p.style.display = "block";
// console.log(p);
//! create border tag to contain each letter ??????
//  element.length=Borders
// console.log(Borders);

// for (let i = 0; i < element.length; i++) {

//   // Borders.style.display="none"
//   // Borders.style.display="block"
// }
// //  });
