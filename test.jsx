import React from 'react';

var App = React.createClass({
  render: function () {
    return <div id="jsx">Hello JSX!!</div>;
  }
});

React.render(<App />, document.body);
