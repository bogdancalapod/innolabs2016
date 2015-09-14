document.getElementById('searchBox').onkeypress = function(e){
  if(!e) e = window.event;
  
  var keyCode = e.keyCode || e.which;
  
  if(keyCode == '13'){
    
    search(this);
    
    return false;
  }
}

function search(terms){
  terms = encodeURI(terms.value);
  var url = "https://api.datamarket.azure.com/Bing/Search/Web?Query='" + terms + "+site%3Ainnovationlabs.ro'&$format=json";
  
  ajaxRequest('GET', url, showResults);
}

function showResults(data){
  var results = data.d.results;
  
  var body = document.getElementsByTagName('body')[0];
  
  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.setAttribute(
    'onclick',
    'closeOverlay(this)'
    );
  body.appendChild(overlay);
  body.className = 'noScroll';
  
  if(results.length == 0){
    var title = document.createElement('h2');
    title.innerHTML = 'No results found. Try broadening your search.';
    
    overlay.appendChild(title);
    
    return;
  }
  
  for(i = 0; i < results.length; i++){
    
    var result = results[i];
    
    var resultDiv = document.createElement('div');
    resultDiv.className = 'searchResult';
    resultDiv.setAttribute(
      'onclick',
      "window.location='" + result.Url + "'"
    );
    
    var title = document.createElement('h1');
    title.innerHTML = result.Title;
    
    var desc = document.createElement('p');
    desc.innerHTML = result.Description;
    
    
    
    resultDiv.appendChild(title);
    resultDiv.appendChild(desc);
    overlay.appendChild(resultDiv);
  }
}

function closeOverlay(element){
  element.style.opacity = '0';
  document.getElementsByTagName('body')[0].className = '';
  setTimeout(function(){
    element.parentNode.removeChild(element);
  }, 400);
}
