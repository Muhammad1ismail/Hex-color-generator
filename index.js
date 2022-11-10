const colors = ["red","green","blue","orange","beigue","grey","yellow"];

const button = document.querySelector(".click-me");
const color = document.querySelector(".color-text");


button.addEventListener("click",()=>{
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor]
})


const getRandomColor = () =>{
    return Math.floor(Math.random() * colors.length);
}