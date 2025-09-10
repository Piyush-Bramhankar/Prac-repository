let btn = document.querySelector('#btn');
let autotyped = document.querySelector('.auto-typed');
let sidebar = document.querySelector('.sidebar');
let icons = document.querySelectorAll('.icons')
const slides = document.querySelectorAll(".slide")

btn.onclick = function(){
    sidebar.classList.toggle("active");
};

// typing effect code 

var typed = new Typed(".auto-typed", {
    strings : ["Programmer", "Web Designer", "Web Developer"],
    typeSpeed : 100,
    backSpeed : 100, 
    loop : true
});



// education7

const track = document.querySelector('.slider-track');
const slidesx = document.querySelectorAll('.slide-item');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slidesx.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slidesx.length) % slidesx.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
});




