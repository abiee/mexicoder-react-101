var React = require('react');

var Contact = React.createClass({
  render: function() {
    return (
      <div className="contact col-sm-4">
        <h3>{this.props.data.name}</h3>
        <span className="phone">{this.props.data.phone}</span>
        <span className="email">{this.props.data.email}</span>
        <button className="btn btn-primary">
          Edit
        </button>
      </div>
    );
  }
});

module.exports = Contact;
