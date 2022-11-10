const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const button = document.querySelector(".click-me");
const color = document.querySelector(".color-text");

button.addEventListener("click",()=>{
  let hex = "#";
  for(let x = 0; x < 6; x++){
    hex += hexColors[getRandomNumber()];
    color.textContent = hex;
    document.body.style.backgroundColor = hex;
    
  }
  
})

const getRandomNumber = () =>{
  return Math.floor(Math.random()*hexColors.length);
}

