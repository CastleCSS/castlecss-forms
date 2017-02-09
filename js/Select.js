/**
TODO: Add some licensing / documentation
**/
'use strict';

var $ = require('jquery');

function wrapSelects(selector) {
	$(selector).each(function() {
		var $this = $(this);

		if ( $this.parent('.select').length == 0 ) {
			$this.wrap('<div class="select">');
			$('.select').append('<div class="select-arrow">')
		}
	});
}

var Select = function(selector) {
	var _selector = selector || 'select[data-castlecss-select]';
	wrapSelects(_selector);

	$(document).on('DOMChanged', function() {
		wrapSelects(_selector);
	});
};

module.exports = Select;