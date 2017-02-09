/**
TODO: Add some licensing / documentation
**/
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