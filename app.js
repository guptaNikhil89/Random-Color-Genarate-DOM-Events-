let btn = document.querySelector('button');
let heading = document.querySelector('h3')

btn.addEventListener("click", function(){
    
    heading.innerText = generateColor();
    let div = document.querySelector('div');
    div.style.backgroundColor = heading.innerText;
})

let generateColor = function(){
    let red = Math.floor(Math.random()* 255) ;
    let green = Math.floor(Math.random()* 255) ;
    let blue = Math.floor(Math.random()* 255) ;
    
   return `rgb(${red}, ${green}, ${blue})`
    
}
