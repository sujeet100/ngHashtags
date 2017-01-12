# ngHashtags

A simple angularJS directive to include facebook like hashtag highlight enabled editable container.

## Screenshots

![Screenshot](https://raw.githubusercontent.com/sujeet100/ngHashtags/master/screenshots/ngHashtags.png "Screenshot")


## Live demo

[Live demo on JSFiddle](https://jsfiddle.net/0c2mebff/)

## Requirementst
 - AngularJS
 - Modern Browser supporting Contenteditable

## Installing

### Download

- [Download ngHashtags](https://github.com/sujeet100/ngHashtags/archive/master.zip) files from GitHub.

### Add files

Add the scripts to your application. Make sure the `ngHashtags.js` file is inserted **after** the `angular.js` library:

```html
<script src="angular.js"></script>
<script src="ngHashtags.js"></script>
<link rel="stylesheet" type="text/css" href="ngHashtags.css">
```

### Add a dependancy

Add the ngHashtags module as a dependancy to your application module:

```js
var myAppModule = angular.module('MyApp', ['ngHashtags']);
```

## Usage

1. Add the ngHashtags directive on a Div container to make it content editable with support for hashtags highlight
2. Bind a model to the container using ng-model proeprty
3. Done!

## Example code

The following code makes a div content editable and highlights any hashtags if found.
The highlight style can be overriden using 'tags-highlight' css class.
The defualt highlight style is similar to the facebook hashtags highlight style.

```html
<div ng-hashtags ng-model="model" placeholder="Enter space separated hashtags e.g. #coffee #burger"></div>
</html>
```

## License

See the [LICENSE](https://github.com/sujeet100/ngHashtags/blob/master/License.md) file.
