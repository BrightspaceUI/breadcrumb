# d2l-breadcrumbs
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/breadcrumbs)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

Polymer-based web component for D2L breadcrumb list.
Breadcrumbs help users understand where they are within the LMS, and provide useful clues about how the space is organized. They also provide a convenient navigation mechanism.

## Installation

`d2l-breadcrumbs` can be installed from [Bower][bower-url]:
```shell
bower install d2l-breadcrumbs
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) polyfill loader (for browsers who don't natively support web components), then import `d2l-breadcrumbs.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
</head>
```

### Components

#### `d2l-breadcrumbs`

`d2l-breadcrumbs` wraps a list of items, and provides spacing between the items.

<!---
```
<custom-element-demo>
	<template>
		<script src="../webcomponentsjs/webcomponents-loader.js"></script>
		<link rel="import" href="d2l-breadcrumbs.html">
		<next-code-block></next-code-block>
	</template>
</custom-element-demo>
```
-->
```html
<d2l-breadcrumbs>
	<d2l-breadcrumb text="Item 1" href="#"></d2l-breadcrumb>
	<d2l-breadcrumb text="Item 2" href="#"></d2l-breadcrumb>
	<d2l-breadcrumb text="Item 3" href="#"></d2l-breadcrumb>
</d2l-breadcrumbs>
```

The `compact` parameter can be used to display the last breadcrumb only.
<!---
```
<custom-element-demo>
	<template>
		<script src="../webcomponentsjs/webcomponents-loader.js"></script>
		<link rel="import" href="d2l-breadcrumbs.html">
		<next-code-block></next-code-block>
	</template>
</custom-element-demo>
```
-->
```html
<d2l-breadcrumbs compact>
	<d2l-breadcrumb text="Compact Item 1" href="#"></d2l-breadcrumb>
	<d2l-breadcrumb text="Compact Item 2" href="#"></d2l-breadcrumb>
	<d2l-breadcrumb text="Compact Item 3" href="#"></d2l-breadcrumb>
</d2l-breadcrumbs>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-breadcrumbs
[bower-image]: https://badge.fury.io/bo/d2l-breadcrumbs.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/breadcrumbs
[ci-image]: https://travis-ci.org/BrightspaceUI/breadcrumbs.svg?branch=master
[design.d2l-url]: http://design.d2l/components/breadcrumbs/

## Versioning

Commits and PR merges to master will automatically do a minor version bump which will:
* Update the version in `package.json`
* Add a tag matching the new version
* Create a github release matching the new version

By using either **[increment major]** or **[increment patch]** notation inside your merge message, you can overwrite the default version upgrade of minor to the position of your choice.
