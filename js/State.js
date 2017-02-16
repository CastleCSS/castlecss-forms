/*
	* Copyright (c) 2017 - present, De Nieuwe Zaak
	* All rights reserved.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*
*/

'use strict';

var util = require('./util');

var State = {};

function setState(inputElement, fieldElement) {
	if(!inputElement.value || inputElement.value.length === 0) {
		util.removeClass(fieldElement, 'has-value');
		return;
	}

	if (inputElement.value.length > 0) {
		util.addClass(fieldElement, 'has-value');
	}
	
	//TODO: Additional checks.
}

// Attaches events to input elements and pass along the field element for adjusting its classes.
var attachEvents = function(inputElement, fieldElement) {
	inputElement.addEventListener('focus', function() {
		util.addClass(fieldElement, 'has-focus');
	}, false);

	inputElement.addEventListener('focusout', function() {
		util.removeClass(fieldElement, 'has-focus');
	}, false);

	inputElement.addEventListener('keyup', function(e) {
		setState(e.target, fieldElement);
	}, false);

	inputElement.addEventListener('change', function(e) {
		setState(e.target, fieldElement);
	}, false);
}

// Initializes this module by setting initial values and attaching events.
State.init = function(selector) {
	var _selector = selector || '[data-castlecss-field]';

	// Once the window has loaded, we are ready to query for elements.
	window.addEventListener('load', function() {
		var fieldElements = document.querySelectorAll(_selector);
	
		// Loop through each element to set their initial values and attach events.
		for (var i = 0; i < fieldElements.length; i++) {
			var fieldElement = fieldElements[i];
		
			var inputElements = fieldElement.querySelectorAll('input, textarea, select');

			for (var j = 0; j < inputElements.length; j++) {
				var inputElement = inputElements[j];

				setState(inputElement, fieldElement);
				attachEvents(inputElement, fieldElement);
			}
		}
	}, false);
};

module.exports = State;