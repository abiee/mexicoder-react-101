var React = require('react');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {name: 'Abiee'};
  },

  changeName: function() {
    this.setState({name: 'World!'});
  },

  nameChanged: function(event) {
    this.setState({name: event.target.value});
  },

  render: function() {
    return ( 
      <div>
        <h1>Hello {this.state.name}</h1>
        <input type="text" onChange={this.nameChanged} />
        <button className="btn btn-primary" onClick={this.changeName}>
          Click me!
        </button>
      </div>
    );
  }
});

module.exports = HelloWorld;
