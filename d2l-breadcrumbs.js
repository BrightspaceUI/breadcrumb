import '../@polymer/polymer/polymer-legacy.js';
import './d2l-breadcrumb.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-breadcrumbs">
	<template strip-whitespace="">
		<style>
			:host {
				--d2l-breadcrumbs-background-color: rgb(251, 252, 252);
				display: block;
				position: relative;
			}

			:host::after {
				background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(var(--d2l-breadcrumbs-background-color)));
				background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				background: -o-linear-gradient(left, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				bottom: 0;
				content: '';
				pointer-events: none;
				position: absolute;
				right: 0;
				top: 0;
				width: 10px;
			}
			:host-context([dir="rtl"])::after {
				background: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), to(var(--d2l-breadcrumbs-background-color)));
				background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				background: -o-linear-gradient(right, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				background: linear-gradient(to left, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				left: 0;
				right: auto;
			}
			:host(:dir(rtl))::after {
				background: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), to(var(--d2l-breadcrumbs-background-color)));
				background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				background: -o-linear-gradient(right, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				background: linear-gradient(to left, rgba(255, 255, 255, 0), var(--d2l-breadcrumbs-background-color));
				left: 0;
				right: auto;
			}

			.d2l-breadcrumbs-wrapper {
				overflow: hidden;
				position: relative;
				white-space: nowrap;
			}

			div.compact ::slotted(d2l-breadcrumb:not(:last-of-type)) {
				display: none;
			}
		</style>
		<div class$="[[_getConditionalClasses(compact)]]">
			<slot></slot>
		</div>
	</template>

	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-breadcrumbs',
	properties: {

		/**
		* Whether in `1 level` mode
		*/
		compact: {
			type: Boolean,
			value: false
		}
	},
	attached: function() {
		this._ensureAttribute('role', 'list');
	},
	_getConditionalClasses: function(compact) {
		var classes = ['d2l-breadcrumbs-wrapper'];
		if (compact) { classes.push('compact'); }
		return classes.join(' ');
	}
});
