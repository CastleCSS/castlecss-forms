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

var FileInput = function(selector) {
	var _selector = selector || '[data-castlecss-field]';
	// http://www.zyxware.com/articles/3980/solved-file-input-browse-button-requiring-double-click-in-ie10
	// Handle custom triggering of clicks for browse button in IE10 
	if (navigator.userAgent.indexOf("MSIE") > 0) {
		$(_selector).on('mousedown', "input[type='file']", function() {
			$(this).trigger('click');
		});
	}
};

module.exports = FileInput;