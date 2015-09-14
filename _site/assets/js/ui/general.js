
function showSearchBox(){
  'use strict';
  
  document.getElementById('searchBox').style.width = '150px';
  document.getElementById('searchBox').parentNode.className = 'expanded';
}

function hideSearchBox(){
  'use strict';
  
  document.getElementById('searchBox').style.width = '0px';
  document.getElementById('searchBox').parentNode.className = '';
}

function toggleSearchBox(){
  'use strict';

  var searchBox = document.getElementById('searchBox');

  if(searchBox.style.width == '150px'){
    hideSearchBox();
  } else {
    showSearchBox();
  }
}


