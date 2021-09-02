const navSlide = () =>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelector('.nav-links li');

	burger.addEventListener('click', () =>  {
		nav.classList.toggle('nav-active');
	});

	navLinks.forEach((link, index)=>{
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1 }s`;
	});




} 
navSlide(); 

window.addEventListener("scroll", function(){
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
})



