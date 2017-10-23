$(document).ready(function(){
 $('.main-slider').slick({
  accessibility: false,
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true
 });
 ul = document.querySelectorAll('.slick-dots')[0];
 prev =document.createElement('div');
 prev.classList.add('slicks-toggle');
 prev.classList.add('slicks-left');
 prev.innerHTML=".";
 prev.setAttribute("onClick","$('.main-slider').slick('slickPrev');");
 next =document.createElement('div');
 next.classList.add('slicks-toggle');
 next.classList.add('slicks-right');
 next.innerHTML=".";
 next.setAttribute("onClick","$('.main-slider').slick('slickNext');");
 ul.insertBefore(prev,ul.firstChild);
 ul.appendChild(next);
 $('.slick-dots li').unbind('click');
});