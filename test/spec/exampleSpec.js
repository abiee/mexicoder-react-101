import React from 'react';
import HelloWorld from 'app/scripts/components/HelloWorld';

describe('Simple test example', () => {
  'use strict';

  it('should pass', function() {
    expect(true).to.be.true;
  });

  it('import React successfully', () => {
    expect(React).to.not.be.undefined;
  });

  it('import a react comment successfully', () => {
    expect(HelloWorld).not.to.be.undefined;
  });
});

describe('Render a component', () => {
  'use strict';

  beforeEach(() => {
    fixture.load('fixture.html');
  });

  afterEach(() => {
    fixture.cleanup();
  });

  it('render the component correctly', () => {
    React.render(
      React.createElement(HelloWorld, null),
      document.getElementById('fixture')
    );

    expect($('#fixture h1')).to.exist;
    expect($('#fixture h1')).to.contain('Hello from a react component!');
  });
});
