# plugin-jsx [![Build Status](https://travis-ci.org/floatdrop/plugin-jsx.svg)](https://travis-ci.org/floatdrop/plugin-jsx)

> JSX loader plugin for [jspm](https://jspm.io)

This plugin will translate JSX templates to JS and executes them (like coffee-script or es6).

To use it you should install it with jspm:

```
jspm install jsx
```

After that you can include JSX templates in your modules:

```js
var Component = require('component.jsx!');
```

### [React v0.13 RC](http://facebook.github.io/react/blog/2015/03/03/react-v0.13-rc2.html)

To use all new hot features from beta version of React you can install `jsx` plugin from `0.13-rc` branch like this:

```
jspm install jsx@0.13-rc
```

This will install jsx plugin from branch with `es6module` option set to `true`.

### Tests

```bash
npm install
npm test
```
