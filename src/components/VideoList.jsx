import VideoListEntry from './VideoListEntry.js';


var VideoList = (props) => (

  // console.log(props.videos[0][1]),
  <div className="video-list">
    <div><h5><em>videoListEntry <VideoListEntry video={props.videos[0][0]}/></em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>

    {/*
    {props.videos[0].map(video =>

      console.log(video)
      // <VideoListEntry key={etag} video = {video}/>
    )} */}


  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  //we need an array of videos

  videos: PropTypes.array.isRequired

};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
