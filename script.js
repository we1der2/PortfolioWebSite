let burgerBtn = document.querySelector('.burger_btn');
let navigationList = document.querySelector('.navigation')
let navigationItems = Array.from(document.getElementsByClassName('nav'))
let greeting = document.getElementById('greeting');

navigationItems.forEach(el=>el.addEventListener('click', btnToggle))
burgerBtn.addEventListener('click', btnToggle)
document.body.addEventListener('click', removeNavList);

function btnToggle(e){
        e.stopPropagation()
        return navigationList.classList.toggle('flex_navigation')
}

function removeNavList (){
    return navigationList.classList.contains('flex_navigation') ? navigationList.classList.remove('flex_navigation')
    : null
}

// function randomSpeed(speed){
//     return Math.random()*speed
// }

function greet(name){
    let greetingString = `Hello, World! My name is ${name.toUpperCase()}. And I am a frontend developer...`
    let totalString = '';
    let i = 0;
    let timer;
    while (i<greetingString.length){
        
    return timer=setInterval(()=>{
            totalString= totalString+greetingString[i];
            greeting.textContent= totalString;
         i++;   
         if (greeting.textContent.length === greetingString.length) {
            clearInterval(timer)
         }  
        },150)
}
}

greet('Zahar')


