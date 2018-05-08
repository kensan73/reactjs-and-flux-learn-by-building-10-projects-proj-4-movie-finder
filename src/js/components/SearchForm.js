var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function(){
    return(
      <div className="search-form">
        <h1 className="text-center">Search for a movie</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-controller" ref="title" placeholder="Enter a movie title..." />
          </div>
          <button className="btn btn-primary btn-block">Search movies</button>
        </form>
      </div>
    )
  },

  onSubmit: function(e){
    e.preventDefault();

    console.log(this.refs.title.value);
  }
});

module.exports = SearchForm;