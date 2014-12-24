plugin-jsx
===========

JSX loader plugin

This plugin will translate JSX templates to JS and executes them (like coffee-script or es6).

To use it you should install it with jspm:

```
jspm install jsx
```

After that you can include JSX templates in your modules:

```js
var Component = require('component.jsx!');
```

## Tests

```bash
jspm install
jspm install react
npm install
npm test
```
