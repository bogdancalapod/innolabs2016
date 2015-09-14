function sendMail(element){
  element.style.maxHeight = '0px';
  setTimeout(function(){
    element.innerHTML = 'Your message has been sent!';
    element.style.maxHeight = '30px';
  }, 600);
  return false;
}