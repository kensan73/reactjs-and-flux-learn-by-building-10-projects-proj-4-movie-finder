var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function(){
    return(
      <div className="search-form">
        <h1 className="text-center">Search for a movie</h1>
        <form>
          <div className="form-group">
            <input type="text" className="form-controller" ref="title" placeholder="Enter a movie title..." />
            <button className="btn btn-primary btn-block">Search movies</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;