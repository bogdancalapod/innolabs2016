function getFlickrPhotos(functionToRun, maxPhotos, isTag, searchTag){
  var flickr = new Galleria.Flickr();
  
  flickr.setOptions({
    max: maxPhotos
  });
  
  if(isTag == false){
    flickr.user('innovationlabs', functionToRun);
  } else {
    flickr.tags(searchTag, functionToRun);
  }
}

function loadGalleria(data){
  Galleria.ready(function(){
    this.lazyLoadChunks( 5 );  
  });
  
  Galleria.run('.gallery', {
    dataSource: data,
    thumbnails: 'lazy'
  });


}