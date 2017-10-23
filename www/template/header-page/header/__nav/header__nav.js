$(document).ready(function(){
	 clone=$(".header__nav").clone().addClass('nav-clone').css({
	 	position:"fixed",
	 	width:"100%",
	 	left:0,
	 	padding:"10px 2%",
	 	boxSizing:"border-box",
	 	background:"white",
	 	top:"-150px",
	 	boxShadow:"0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
	 }).appendTo("body");
    $(window).scroll(function(){
     if($(this).scrollTop()>$('main').offset().top+100)
      $('.nav-clone').css({top:0});
     else{
      $('.nav-clone').css({top:"-150px"});
     }
	 });
});