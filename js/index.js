// Your code goes here

// font-family: 'Turret Road', cursive;
// font-family: 'Notable', sans-serif;
// font-family: 'Underdog', cursive;

const header = document.querySelector ('header');
const body = document.querySelector ('body');
const nav = document.querySelector ('.nav');
const navLink = document.querySelectorAll ('.nav-link');
const cont = document.querySelector ('.container');
const contSect = document.querySelector ('.content-section');
const contImg = document.querySelector ('.img-content');
const h2 = document.querySelector ('h2');
const destinationBtn = document.querySelector ('.btn');
const intImg = document.querySelector ('.intro img');
const contSectImg = document.querySelector ('.content-section img');
const invContImg = document.querySelector ('.inverse-content img');
const destinationImg = document.querySelector ('.content-destination img');

// * [ ] `mouseover`
//mouseover the nav and the whole page design changes.

nav.addEventListener('mouseover', () => {
        navLink[0].style.color = "red";
        navLink[1].style.color = "red";
        navLink[2].style.color = "red";
        navLink[3].style.color = "red";
        navLink[0].style.opacity = "1";
        navLink[1].style.opacity = "1";
        navLink[2].style.opacity = "1";
        navLink[3].style.opacity = "1";
        event.preventDefault();
     });


// * [ ] `click`
contSectImg.addEventListener("click", () => {
    contSectImg.src = "img/jacko.jpg";
     invContImg.src = "img/green.jpg";
     destinationImg.src = "img/bats.jpeg";
})

// * [ ] `wheel`
//wheel becomes the whole page spins around
// GREENSOCK
// window.addEventListener('wheel', () => {
//     GREENSOCK;
//   })


// * [ ] `drag / drop`
intImg.addEventListener ("drag", () => {
    intImg.style.opacity = "0";
});
        
// * [ ] `load`
// start up some music on the load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    navLink[0].style.color = "orange";
        navLink[1].style.color = "purple";
        navLink[2].style.color = "white";
        navLink[3].style.color = "green";
        navLink[0].style.fontFamily = "underdog";
        navLink[1].style.fontFamily = "underdog";
        navLink[2].style.fontFamily = "underdog";
        navLink[3].style.fontFamily = "underdog";
        body.style.backgroundColor = "black";
        header.style.backgroundColor = "black";
        body.style.fontFamily = "underdog";
        body.style.color = "orange";
        intImg.src = "img/purple.jpg";
  });
// * [ ] `click`
destinationBtn.addEventListener('click', () => {
    destinationBtn.style.background = 'red';   
    
  });
// * [ ] `resize`
//maybe play the sound of a horn
window.addEventListener('resize', () => {
intImg.src = "img/jacko.jpg"
})

// * [ ] `scroll`
window.addEventListener('scroll', () => {
    header.style.opacity=".2";
    })
// * [ ] `copy`
body.addEventListener('copy', () => {
    body.style.opacity = '0';
});
// * [ ] `dblclick`
h2.addEventListener("dblclick", () => {
  h2.style.color =  'purple';
  h2.style.fontFamily =  'Turret Road';
})