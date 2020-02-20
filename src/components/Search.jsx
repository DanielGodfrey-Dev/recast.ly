// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

class Search extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState (
      {
        value: event.target.value
      }
    );


    // var searchYouTube = searchYouTube(options, data =>{
    //   // console.log(data);
    // }
    // );
  }

  handleSubmit(event) {
    alert('a name was submitted: ' + this.state.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input value={this.state.value} onChange={this.handleChange} className="form-control" type="text" />
        <button onClick={this.handleSubmit} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
