/*
	* Copyright (c) 2017 - present, De Nieuwe Zaak
	* All rights reserved.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*
*/

'use strict';

var $ = require('jquery');

function wrapSelects(selector) {
	$(selector).each(function () {
		var $this = $(this);
		if ($this.parent('.select').length == 0) {
			$this.wrap('<div class="select">');
			if ($this.parent('.select').length > 0) {
				$this.parent('.select').append('<div class="select-arrow">');
			}
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