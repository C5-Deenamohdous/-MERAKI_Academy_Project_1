const hero = document.querySelector("#hero");
const start = document.querySelector("#start");
const con1 = document.querySelector("#con1");
const con2 = document.querySelector("#con2");
const buttons = document.querySelector("#buttonCon");
const try1 = document.querySelector("#try");
const img = document.querySelector("#first");
const con = document.querySelector(".second");
const con3 = document.querySelector("#con3");
const p4 = document.querySelector("#p4");
const about = document.querySelector("#about");

let series = [
  "vikings",
  "banshee",
  "friends",
  "new amsterdam",
  "the good doctor",
  "dark",
  "chernobyl",
  "breaking bad",
  "when they see us",
  "unbelievable",
  "lupin",
];

const random = () => {
  return series[Math.floor(Math.random() * series.length)];
};
const word = random();
const game = () => {
  console.log(word);

  con1.style.display = "none";
  con2.style.display = "block";
  p4.style.display = "none";
  word.split("").forEach((element, index) => {
    if(element !== " "){
      const span = document.createElement("span");
      span.innerText = " ___ ";
      span.id = index;
      con.append(span);
    } else {
      const span = document.createElement("span");
      span.innerText = " ";
      span.id = index;
      con.append(span);
      counTrue++
    }

  });
};
start.addEventListener("click", game);

const tryfun = () => {
  con1.style.display = "block";
  con3.style.display = "none";
  con2.style.display = "none";
  p4.style.display = "none";
};

try1.addEventListener("click", tryfun);

const about1 = () => {
  con1.style.display = "none";
  con3.style.display = "none";
  con2.style.display = "none";
  p4.style.display = "block";
};
about.addEventListener("click", about1);

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
  { img1: "./pic1.png", id: 0 },
  { img1: "./pic2.png", id: 1 },
  { img1: "./pic3.png", id: 2 },
  { img1: "./pic4.png", id: 3 },
  { img1: "./pic5.png", id: 4 },
  { img1: "./pic6.png", id: 5 },
  { img1: "./pi8.jpg", id: 6 },
  
];

let count = 0;
let counTrue=0
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
      const span = document.querySelectorAll("span")
      console.log("span",span.length)
    // span[word.indexOf(e.target.id)].innerText=(e.target.id);
    for (let i = 0; i <word.length; i++) {
        if (e.target.id===word[i]){
          console.log("span[i]",span[i],span)
          span[i].innerText=e.target.id;
          counTrue++;
        }
    }
    if(counTrue===word.length){
      img.innerText = "";
      const image1 = document.createElement("img");
      image1.src="./p9.webp"
      img.append(image1);
    }
     
    } else {
      img.innerText = "";
      const image = document.createElement("img");
      image.src = imgArr[count].img1;
      img.append(image);
      count++;
      
    }
  });
});

let isPlaying=false;
 const music=document.querySelector("#music");
const track=document.createElement('audio');
const playSound=()=>{
   isPlaying=true;
   
  track.play()
  // src="https://www.youtube.com/watch?v=WJ3-F02-F_Y&t=53s"
 
}
music.addEventListener('click',playSound)

