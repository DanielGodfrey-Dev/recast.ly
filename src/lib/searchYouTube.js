import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      videoEmbeddable: true,
      type: 'video',
      part: 'snippet',
      dataType: 'application/json'
    },
    success: function(data) {
      console.log('Here is the data', data );
      callback(data.items);

    },
    error: function(data) {
      console.error('Failed to send message', data);
    },

  });
};

export default searchYouTube;
