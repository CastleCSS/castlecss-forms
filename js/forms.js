/**
TODO: Add some licensing / documentation
**/
'use strict';

var $ = require('jquery');

var Forms = function() {
	$('.form-simple').children('li').each(function(){
		var $this = $(this);

		function setValue($field) {
			
			// Check if inputs or textareas have a value
			if( $field.val() == null )
				return;
			else if( $field.val().length > 0 )
				$field.parents('li').addClass('has-value');
			else if( $field.val().length === 0 )
				$field.parents('li').removeClass('has-value');
				// Check if select has an option selected with a value
			else if( field[0].tagName.match('select') && $field.find('option:selected').val() )
				$field.parents('li').addClass('has-value');
			else
				$field.parents('li').removeClass('has-value');
			}

			// Create an empty option for single selects so we can place the label there as a placeholder
			if( $this.hasClass('.input-select') )
				$this.find('select').prepend('<option selected="selected"></option>');
					
			var $formfields = $this.find('input, textarea, select');
			
			// Check if there is already a value
			$formfields.each(function(){
				setValue($(this));
			}).focus(function(){
				$(this).parents('li').addClass('has-focus');
			}).focusout(function(){
				$(this).parents('li').removeClass('has-focus');
			}).on('keyup change', function(){
				setValue($(this));
		});
	});

	if(!$('.select').length) {
		$('select').wrap('.select');
	}

	// http://www.zyxware.com/articles/3980/solved-file-input-browse-button-requiring-double-click-in-ie10
	// Handle custom triggering of clicks for browse button in IE10
	if (navigator.userAgent.indexOf("MSIE") > 0) {
		$("input[type='file']").mousedown(function() {
			$(this).trigger('click');
		})
	}
};

module.exports = Forms;