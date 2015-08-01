var React = require('react');
var HelloWorld = require('./components/HelloWorld.jsx');
var ContactList = require('./components/ContactList.jsx');

var contacts = [{
  name: 'Pedrito',
  phone: '3312312424',
  email: 'pedrito@gmail.com'
}, {
  name: 'Juanito',
  phone: '646495383',
  email: 'juanito@gmail.com'
}, {
  name: 'Yo',
  phone: '3474263439',
  email: 'me@gmail.com'
}];

React.render(
  <HelloWorld />,
  document.getElementById('main')
);

React.render(
  <ContactList contacts={contacts} />,
  document.getElementById('contacts')
);
