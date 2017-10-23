function menu_func(){
 menu=document.getElementById('menu');
 if(menu.classList.contains('header__nav_menu-in')){
  menu.classList.add('header__nav_menu-out');
  menu.classList.remove('header__nav_menu-in');
 }
 else{
  menu.classList.add('header__nav_menu-in');
  menu.classList.remove('header__nav_menu-out');
 }
}