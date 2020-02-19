import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '/compiled/src/lib/searchYouTube.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';

class App extends React.Component {
  constructor() {
    super(),
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      boolean: false
    };

    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick(index) {
    // this.state.video = //get video that was clicked?
    this.setState({
      video: exampleVideoData[index]
    });

  }


  // searchYouTube(data, callback = (data)=>{
  //   console.log(data);
  //   }
  // )
  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em></em><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Video Player</em><VideoPlayer video={this.state.video}/>
            </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em><VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
