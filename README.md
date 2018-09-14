# d2l-breadcrumb
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/breadcrumb)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

Polymer-based web component for D2L breadcrumb list.
Breadcrumbs help users understand where they are within the LMS, and provide useful clues about how the space is organized. They also provide a convenient navigation mechanism.

## Installation

`d2l-breadcrumb` can be installed from [Bower][bower-url]:
```shell
bower install d2l-breadcrumb
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) polyfill loader (for browsers who don't natively support web components), then import `d2l-breadcrumb-list.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
	<link rel="import" href="bower_components/d2l-breadcrumb/d2l-breadcrumb-list.html">
</head>
```

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="d2l-breadcrumb-list.html">
	<link rel="import" href="d2l-breadcrumb-item.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-breadcrumb-list>
	<d2l-breadcrumb-item href="#" text="Breadecrumb Item 1"></d2l-breadcrumb-item>
	<d2l-breadcrumb-item href="#" text="Breadecrumb Item 2"></d2l-breadcrumb-item>
</d2l-breadcrumb-list>
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
