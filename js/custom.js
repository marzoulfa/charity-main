const humburger = document.querySelector('.collapse');
const menuLinks = document.querySelector('.menu-links');

humburger.addEventListener('click',function(){
   menuLinks.classList.toggle("open");
});
