/**
TODO: Add some licensing / documentation
**/
'use strict';

var $ = require('jquery');

function setValue($field) {
	// Check if inputs or textareas have a value
	if( $field.val() == null )
		return;
	else if( $field.val().length > 0 )
		$field.closest('[data-castlecss-field]').addClass('has-value');
	else if( $field.val().length === 0 )
		$field.closest('[data-castlecss-field]').removeClass('has-value');
		// Check if select has an option selected with a value
	else if( field[0].tagName.match('select') && $field.find('option:selected').val() )
		$field.closest('[data-castlecss-field]').addClass('has-value');
	else
		$field.closest('[data-castlecss-field]').removeClass('has-value');
}

var State = function(selector) {
	var _selector = selector || '[data-castlecss-field]';

	$('input, textarea, select', _selector).each(function(){
		setValue($(this));
	});

	$(_selector).on('focus', 'input, textarea, select', function(){
		$(this).closest(_selector).addClass('has-focus');
	}).on('focusout', 'input, textarea, select', function(){
		$(this).closest(_selector).removeClass('has-focus');
	}).on('keyup change', function(){
		setValue($(this));
	});
};

module.exports = State;