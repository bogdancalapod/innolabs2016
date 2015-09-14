window.onload = teamsPageInit();

function teamsPageInit(){
  'use strict';
  
  
  var i;
  var list = document.getElementById('yearsNav');
  var bg = document.getElementsByClassName('bg')[0];
  var li = list.childNodes;
  console.log(li[1]);
  li[1].addEventListener('click',function(e){selectElement(e, 1);});
  li[1].addEventListener('mouseover',function(e){expandBgLine(e,1);});
  li[1].addEventListener('mouseout',function(e){resetBgLine(e,1);});
    
  li[3].addEventListener('click',function(e){selectElement(e, 3);});
  li[3].addEventListener('mouseover',function(e){expandBgLine(e,3);});
  li[3].addEventListener('mouseout',function(e){resetBgLine(e,3);});
    
  li[5].addEventListener('click',function(e){selectElement(e, 5);});
  li[5].addEventListener('mouseover',function(e){expandBgLine(e,5);});
  li[5].addEventListener('mouseout',function(e){resetBgLine(e,5);});
    
  li[7].addEventListener('click',function(e){selectElement(e, 7);});
  li[7].addEventListener('mouseover',function(e){expandBgLine(e,7);});
  li[7].addEventListener('mouseout',function(e){resetBgLine(e,7);});

}

function selectElement(e, pos){
  'use strict';
  
  var element = e.srcElement;
  
  var selectedElement = document.getElementById('selected');
  
  selectedElement.id = '';
  element.id = 'selected';
  
  window.selectedPos = pos;
}

function expandBgLine(e, pos){
  'use strict';
  
  var element = e.srcElement;
  var bg = document.getElementsByClassName('bg')[0];
  var width = element.offsetLeft + element.offsetWidth + 10;
  
  resetLiClasses(pos);
  
  bg.style.width = width +  'px';
  
}

function resetBgLine(e, pos){
  'use strict';
  
  console.log(e);
  
  var selected = document.getElementById('selected');
  var bg = document.getElementsByClassName('bg')[0];
  var width = selected.offsetLeft + selected.offsetWidth + 10;
  
  if(e == 'pageLoad')
    width += 10;
  
  resetLiClasses();
  
  bg.style.width = width + 'px';
}

function resetLiClasses(pos){
    pos = window.selectedPos;
  
  var listChildren = document.getElementById('yearsNav').childNodes;
  
  for(var i = 0; i < pos; i++)
   listChildren[i].className = 'faded';
  
  for(var i = pos; i < listChildren.length; i++)
    listChildren[i].className = '';
}
