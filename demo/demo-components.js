import '../../@polymer/polymer/polymer-legacy.js';
import '../d2l-breadcrumbs.js';
import { Polymer } from '../../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-demo-templated-breadcrumbs">
	<template strip-whitespace="">
		<d2l-breadcrumbs>
			<template items="{{breadcrumbs}}" is="dom-repeat">
				<d2l-breadcrumb href$="{{item.href}}" text="{{item.text}}"></d2l-breadcrumb>
			</template>
		</d2l-breadcrumbs>
	</template>
	
</dom-module><dom-module id="d2l-demo-templated-compact-breadcrumbs">
	<template strip-whitespace="">
		<d2l-breadcrumbs compact="">
			<template items="{{breadcrumbs}}" is="dom-repeat">
				<d2l-breadcrumb href$="{{item.href}}" text="{{item.text}}"></d2l-breadcrumb>
			</template>
		</d2l-breadcrumbs>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-demo-templated-breadcrumbs',
	attached: function() {
		this.breadcrumbs = [
			{href: '#', text: 'Templated Item 1'},
			{href: '#', text: 'Templated Item 2'},
			{href: '#', text: 'Templated Item 3'},
			{href: '#', text: 'Templated Item 4'}
		];
	}
});
Polymer({
	is: 'd2l-demo-templated-compact-breadcrumbs',
	attached: function() {
		this.breadcrumbs = [
			{href: '#', text: 'Compact Templated Item 1'},
			{href: '#', text: 'Compact Templated Item 2'},
			{href: '#', text: 'Compact Templated Item 3'}
		];
	}
});
