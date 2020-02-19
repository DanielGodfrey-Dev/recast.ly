import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  // console.log(options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
    },
    success: function(data) {
      console.log('Here is the data', data );
      callback(data);
    },
    error: function(data) {
      console.error('Failed to send message', data);
    },
    dataType: 'json'
  });
};

export default searchYouTube;
