var toggle_current=0;
var current_margin=0;
collection_all=document.querySelectorAll('.goods-block__toggle');
for(i=0;i<collection_all.length;i++){
 collection_all[i].querySelectorAll('div')[0].style.background="#4fb1f6";
 collection_all[i].querySelectorAll('div')[0].style.border="1px solid #4fb1f6";
}
function toggle(value){
 width=document.querySelectorAll('.active-area .goods-block__slider-column div')[0].offsetWidth;  
 window.s3=document.querySelectorAll('.active-area .goods-block__toggle i:first-Child')[0];
 window.s4=document.querySelectorAll('.active-area .goods-block__toggle i:last-Child')[0];
 window.slider = document.querySelectorAll('.active-area .goods-block__slider-column')[0];
 collection=document.querySelectorAll('.active-area .goods-block__toggle')[0].querySelectorAll('div');
 collection[toggle_current].style.background="#4fb1f6";
 collection[toggle_current].style.border="1px solid #4fb1f6";
 toggle_current=toggle_current+value;
 marginLeft=0;
 if(document.body.clientWidth>768)
  marginLeft=30;
 if(toggle_current<0 || toggle_current>2){
  toggle_current-=value;
  return false;
 }
 if(value==1){
  current_margin=current_margin-width-marginLeft;
  window.slider.style.marginLeft=current_margin+'px';
 }
 else{
  current_margin=current_margin+width+marginLeft;
  window.slider.style.marginLeft=current_margin+'px';
 }
 for(i=0;i<collection.length;i++){
  if(i!=toggle_current){
   collection[i].style.background="transparent";
   collection[i].style.border="1px solid #4a4a4a";
  }
  else{
   collection[toggle_current].style.background="#4fb1f6";
   collection[toggle_current].style.border="1px solid #4fb1f6";
  }
 }
 if(toggle_current>0)
  window.s3.style.background="url('optimized/img-min/button_group-2.png')";
 else 
  window.s3.style.background="url('optimized/img-min/button_group-2.png') 0px bottom";
 if(toggle_current<2)
  window.s4.style.background="url('optimized/img-min/button_group-2.png') 20px 0px";
 else 
  window.s4.style.background="url('optimized/img-min/button_group-2.png') 20px bottom";
}
var button_group = document.querySelectorAll('#radio_group input');
for(i=0;i<button_group.length;i++){
 button_group[i].addEventListener('change',function(event){
  toggle_current=0;
  current_margin=0;
  if(window.slider)
   window.slider.style.marginLeft=0;
  collection=document.querySelectorAll('.active-area .goods-block__toggle')[0].querySelectorAll('div');
  for(i=1;i<collection.length;i++){
   collection[i].style.background="transparent";
   collection[i].style.border="1px solid #4a4a4a";
  }
  collection[0].style.background="#4fb1f6";
  collection[0].style.border="1px solid #4fb1f6";
  if(window.s3)
   window.s3.style.background="url('optimized/img-min/button_group-2.png') 0px bottom";
  if(window.s4)
   window.s4.style.background="url('optimized/img-min/button_group-2.png') 20px 0px";
  aries = document.querySelectorAll('.goods-block__area');
  for(i=0;i<aries.length;i++){
   aries[i].style.display="none";
   aries[i].classList.remove('active-area');
  }
  document.getElementById(this.value).style.display="block";
  document.getElementById(this.value).classList.add('active-area');
  });
} 
if(document.body.offsetWidth<768){
 collection = document.querySelectorAll('.goods-block__toggle');
 for(i=0;i<collection.length;i++){
  clone = collection[i].cloneNode(true);
  collection[i].parentNode.insertBefore(clone,collection[i].parentNode.children[2]);
  collection[i].parentNode.removeChild(collection[i]);
 }
}
window.onresize = function(){
 if(document.body.offsetWidth<768){
  collection = document.querySelectorAll('.goods-block__toggle');
  for(i=0;i<collection.length;i++){
   clone = collection[i].cloneNode(true);
   collection[i].parentNode.insertBefore(clone,collection[i].parentNode.children[2]);
   collection[i].parentNode.removeChild(collection[i]);
  }
 }
 else{
  collection = document.querySelectorAll('.goods-block__toggle');
  for(i=0;i<collection.length;i++){
   clone = collection[i].cloneNode(true);
   collection[i].parentNode.insertBefore(clone,collection[i].parentNode.children[0]);
   collection[i].parentNode.removeChild(collection[i]);
  }
 }
 if(document.body.offsetWidth<=768){
  toggle_current=0;
  current_margin=0;
  if(window.slider)
   window.slider.style.marginLeft=0;
  collection=document.querySelectorAll('.active-area .goods-block__toggle')[0].querySelectorAll('div');
  for(i=1;i<collection.length;i++){
   collection[i].style.background="transparent";
   collection[i].style.border="1px solid #4a4a4a";
  }
  collection[0].style.background="#4fb1f6";
  collection[0].style.border="1px solid #4fb1f6";
  if(window.s3)
   window.s3.style.background="url('optimized/img-min/button_group-2.png') 0px bottom";
  if(window.s4)
   window.s4.style.background="url('optimized/img-min/button_group-2.png') 20px 0px";
 }
}