import '@polymer/polymer/polymer-legacy.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-link/d2l-link.js';
import 'd2l-polymer-behaviors/d2l-dom.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-breadcrumb">
	<template strip-whitespace="">
		<style>
			:host {
				align-items: center;
				display: inline-flex;
			}

			div.d2l-breadcrumb-wrapper {
				align-items: center;
			}

			div.d2l-breadcrumb-wrapper.compact {
				display: flex;
				flex-direction: row-reverse;
			}

			d2l-icon {
				height: 8px;
				padding-left: 10px;
				padding-right: 5px;
				width: 8px;
			}
			d2l-icon:dir(rtl) {
				padding-left: 5px;
				padding-right: 10px;
			}
			div.d2l-breadcrumb-wrapper.compact d2l-icon {
				padding-right: 10px;
				padding-left: 0;
			}
			div.d2l-breadcrumb-wrapper.compact d2l-icon:dir(rtl) {
				padding-right: 0;
				padding-left: 10px;
			}
		</style>
		<div class$="[[_getConditionalClasses(_compact)]]" role="navigation" aria-label$="[[_getAriaLabel(text, ariaLabel)]]">
			<d2l-link href$="[[href]]">[[text]]</d2l-link>
			<d2l-icon icon="[[_breadcrumbIcon]]"></d2l-icon>
		</div>
	</template>


</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-breadcrumb',
	properties: {
		/**
		* Item href
		*/
		href: {
			type: String,
			value: '#'
		},
		/**
		* Item text
		*/
		text: {
			type: String,
			value: ''
		},
		/**
		* Aria Label (optional)
		*/
		ariaLabel: {
			type: String,
			value: null
		},
		/**
		* Whether in compact mode
		*/
		_compact: {
			type: Boolean,
			value: false
		},
		_breadcrumbIcon: {
			type: String,
			computed: '_computeIcon(_compact)'
		}
	},
	attached: function() {
		this._ensureAttribute('role', 'listitem');
		this._compact = this._getCompactProperty();
		afterNextRender(this, function() {
			this._compact = this._getCompactProperty();
		}.bind(this));
	},
	_computeIcon: function(compact) { return compact ? 'd2l-tier1:chevron-left' : 'd2l-tier1:chevron-right'; },
	_getConditionalClasses: function(compact) {
		var classes = ['d2l-breadcrumb-wrapper'];
		if (compact) { classes.push('compact'); }
		return classes.join(' ');
	},
	_getCompactProperty: function() {
		var compact = null;
		D2L.Dom.findComposedAncestor(this, function(node) {
			if (node.tagName !== 'D2L-BREADCRUMBS') {
				return false;
			}
			compact = node.compact;
			return true;
		});
		return compact;
	},
	_getAriaLabel: function(text, ariaLabel) {
		return ariaLabel ? ariaLabel : text;
	}
});
