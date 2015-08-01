var React = require('react');
var Contact = require('./Contact.jsx');

var ContactList = React.createClass({
  render: function() {
    // var contacts = this.props.contacts.map(function() {
    //   return (<Contact />)
    // });

    var contacts = [];

    for (var i=0; i<this.props.contacts.length; i++) {
      var contact = this.props.contacts[i];
      contacts.push(<Contact data={contact} />);
    }

    return (
      <div>
        {contacts}
      </div>
    );
  }
});

module.exports = ContactList;
