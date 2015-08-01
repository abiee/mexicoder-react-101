var React = require('react');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {name: 'Abiee'};
  },

  changeName: function() {
    this.setState({name: 'World!'});
  },

  render: function() {
    return ( 
      <div>
        <h1>Hello {this.state.name}</h1>
        <button className="btn btn-primary" onClick={this.changeName}>
          Click me!
        </button>
      </div>
    );
  }
});

module.exports = HelloWorld;
