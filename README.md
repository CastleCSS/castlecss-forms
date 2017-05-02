# CastleCSS Forms
Quickly add forms with this module

![CastleCSS logo @CastleCss.com](https://www.doordarius.nl/castlecss-logo-250.png)

## CastleCSS Framework
The form files are part of the [CastleCSS Package](https://github.com/CastleCSS/castlecss)

## How to install
- Install via [npm](https://www.npmjs.com/): ```npm install castlecss-forms```
- Require it in your own npm package
- Download or clone the package

## Updating files
CastleCSS is built in such a way that it's easy to update, you can just download and make it your own as long as you don't overwrite the core files. To update the forms module, just run:

```npm update castlecss-forms```

## Documentation and examples
You can find the documentation and examples at http://www.castlecss.com and [castlecss-docs](https://github.com/CastleCSS/castlecss-docs)


## Setup
Your project should have a setup similar to the example below (included in the [CastleCSS Boilerplate](https://github.com/CastleCSS/castlecss-boilerplate)).
This way you make sure your own variables overwrite the castle-core variables and your setup is still updatable.

```
| Your project/
|
|-- scss/ 
| |-- /* Custom project specific scss files here */
| |-- Main.scss
| |
|-- node_modules/
| | 
| | /*	CastleCSS files included automatically here */
| | castlecss-core/
| | castlecss-forms/
| | castlecss-etc ;)/
```

### Main.scss
To enable CastleCSS Forms it is essential that you include the corresponding main.scss file in your project's main.scss. This file should have a setup similar to this: (included in the [CastleCSS Boilerplate](https://github.com/CastleCSS/castlecss-boilerplate)). 

```
/*  core variable files */
@import "node_modules/castlecss-core/sass/variables";

/*  Your own variables so they overwrite the core */
@import "variables";

/*  rest of core files */
@import "node_modules/castlecss-core/sass/main";
@import "node_modules/castlecss-forms/sass/main";

 
/*  Include your own files below this line
    --------------------------------------
*/
```

## Dependencies
Because CastleCSS Forms uses jQuery as dependency, the distributions contain jQuery. There is however a possibility to make use of the jQuery version of your choice, by making use of the no.vendors distributions.
The no.vendor distributions work, as long as the jQuery variable is defined in the global scope. 


## Basic structure
The basis structure for your website should look similar to this:

```
| Project directory/
|
|-- node_modules/
| | -- castlecss-core/
| | -- castlecss-buttons/
| | -- castlecss-notifications/
| | -- castlecss-forms/
| | 
|-- scss/
| |-- main.scss
| |-- variables.scss
| |
|-- js/
| | -- scripts.js
| |
|-- img/
|-- dist/
| |-- styles.min.css
| |-- styles.min.map
| |-- scripts.min.js
| |
|-- index.html
|-- Gruntfile.js
|-- package.json
```

## Usage
There are a couple of different ways to make use of the CastleCSS Forms script library. CastleCSS Forms consists of multiple modules, which can be used separately if desirable.

### Include all Forms modules
To make use of all the modules, simply include the following scripts (that are located in the 'dist' folder):

```
<script type="text/javascript" src="/path/to/scripts/Vendors.bundle.js"></script>
<script type="text/javascript" src="/path/to/scripts/Forms.min.js"></script>
<script type="text/javascript">
	$(function () {
		CastleCSS_Forms_Forms();
	});
</script>
```

### Include as separate modules
To make use of the modules separately, use the following scripts (that are located in the 'dist' folder):

```
<script type="text/javascript" src="/path/to/scripts/Vendors.bundle.js"></script>
<!--- The modules of your choice --->
<script type="text/javascript" src="/path/to/scripts/Select.min.js"></script>
<script type="text/javascript" src="/path/to/scripts/FileInput.min.js"></script>
<script type="text/javascript" src="/path/to/scripts/State.min.js"></script>

<script type="text/javascript">
	/* For example */
	$(function () {
		CastleCSS_Forms_Select();
	});
</script>
```



### Require
It is possible to require CastleCSS Forms into your project.

```
var castlecss_forms = require('castlecss-forms');

/* Use all modules */
castlecss_forms.forms();

/* Use separate modules */
castlecss_forms.select();
castlecss_forms.fileinput();
```

### Selectors
By default, the CastleCSS Forms library searches for the following elements:

```
...
<!--- A wrapping element around the input --->
<div data-castlecss-field> 
	<input type="text"></input>
</div>
...

<!--- The select element --->
<select data-castlecss-select>
...
</select>
```

### Configuration
By default, the CastleCSS Forms library uses the CastleCSS selectors.
It is possible to configure selectors of your own choice. Just add the following configuration:

```
CastleCSS_Forms_Forms({
	fileInput: '.yourOwnSelector',
	select: '.yourOwnSelector'
});

CastleCSS_Forms_Select('.yourOwnSelector');
CastleCSS_Forms_FileInput('.yourOwnSelector');
```
