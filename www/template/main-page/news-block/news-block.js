var current=0;
s1=document.getElementById('switch_1');
s2=document.getElementById('switch_2');
function switcher(value){
  current=current+value;
  if(current<0 || current>2){
    current-=value;
    return false;
  }
  if(current>0)
    s1.style.background="url('optimized/img-min/button_group.png')";
  else 
    s1.style.background="url('optimized/img-min/button_group.png') 0px bottom";
  if(current<2)
    s2.style.background="url('optimized/img-min/button_group.png') 20px 0px";
  else 
    s2.style.background="url('optimized/img-min/button_group.png') 20px bottom";
    
  x=document.getElementById('news').querySelectorAll('div>a')[current];
  newElem=x.cloneNode(true);
  newElem.id="target";
  document.getElementById('main_news').replaceChild(newElem,document.getElementById('target'));
}