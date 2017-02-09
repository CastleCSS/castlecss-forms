/**
TODO: Add some licensing / documentation
**/
'use strict';

var State =  require('./State');
var FileInput = require('./FileInput');
var Select = require('./Select');

var Forms = function(selectors) {
	selectors = selectors || {};

	FileInput(selectors.fileInput);
	Select(selectors.select);
	State(selectors.state);
};

module.exports = Forms;