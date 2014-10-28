pl-config
============

Configuration for internally-developed web components.

This is NOT a web component, Polymer or otherwise. It is just an html file that, in most all cases, should be imported into your app if you are using any pl-* elements.

##Installation
`bower install --save https://github.com/bearfriend/pl-config.git`


##Usage
Import into your app:

```html
<head>
...
<link rel="import" href="bower_components/pl-config/pl-config.html" />
...
</head>
```
	
Or import into a new pl-* component to force it on all instances of the element:

```html
<link rel="import" href="../pl-config/pl-config.html" />
...
<polymer-element ... >
...
```