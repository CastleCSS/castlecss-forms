/*
	* Copyright (c) 2017 - present, De Nieuwe Zaak
	* All rights reserved.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*
*/

'use strict';

var State =  require('./State');
var FileInput = require('./FileInput');
var Select = require('./Select');

var Forms = {};

Forms.init = function(selectors) {
	selectors = selectors || {};

	FileInput(selectors.fileInput);
	Select(selectors.select);
	State.init();
};

module.exports = Forms;