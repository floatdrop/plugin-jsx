plugin-jsx
===========

JSX loader plugin

This plugin will translate JSX templates to JS and executes them (like coffee-script or es6).

To use it you should install it with jspm:

```
jspm install npm:plugin-jsx
```

After that you need to map `jsx` to this plugin in `config.js` file:

```js
System.config({
	"map": {
		// ... Your maps ...
		"jsx": "npm:plugin-jsx@0.0.2"
	}
});
```
