angular.module('video-player')
.service('youTube', function($http){
  // TODO
  // Get request


  $http.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      query: 'Gordon Ramsay',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet'
    }
  })
  .then(function(response) {
    console.log('response', response.data.items);
  }, function(err) {
    console.log('error', err);
  });
  // pass in params array
});

// $http.get('/someUrl', config).then(successCallback, errorCallback);