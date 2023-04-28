$(document).ready(function () {
   $('.anim').hide(); 
   $('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.anim').slideToggle();
    
   });
});
