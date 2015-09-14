/*global console,XMLHttpRequest,localStorage*/
/*jshint unused:false*/

function ajaxRequest(method, url, calee, isVimeo) {
  'use strict';
  var request = new XMLHttpRequest();
  var key =  ':hn4NNKZDBcWjhhqrrzXm4HUIQ/DTnjvC73SHjLll5wc=';
  var vimeoID = '64c7b51c596e95a19640cc9aee869613c9557286';
  var vimeoKey = '7b13116b1f9527c4727b34d983223718';
  
  request.open(method, url, true);
  
  if(isVimeo == 'true'){
    request.setRequestHeader('Authorization', 'basic ' + btoa(vimeoID + ':' + vimeoKey));
  } else {
  request.setRequestHeader('Authorization', 'Basic ' + btoa(key + ':' + key));
  }
  
  
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var receivedData = request.responseText;
      try{
        receivedData = JSON.parse(receivedData);
      } catch (e) {
        console.log('Error parsing data:');
        console.log(receivedData);
      }

      calee(receivedData);

    } else {
      // We reached our target server, but it returned an error
      console.log('Server error:');
      console.log(request.responseText);
    }
  };

  request.onerror = function () {
    // There was a connection error of some sort
    console.log('Error connecting to server');
  };

  request.send();
}
