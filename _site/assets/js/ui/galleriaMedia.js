

window.videoData = [      {      'video': 'http://vimeo.com/12309423'    }   ];

window.ready = galleryInit();

function galleryInit() { Galleria.loadTheme('/assets/js/thirdparty/classic/galleria.classic.min.js');
  getFlickrPhotos(processData, 100, false);
}

function processData(data){
  
  var videoData = window.videoData;
  
  var localData = data;
  
  for(i = 0; i < videoData.length; i++)
    localData.push(videoData[i]);
  
  console.log(localData);
  
  loadGalleria(localData);
}