# CastleCSS Forms
![CastleCSS logo @CastleCss.com](https://www.doordarius.nl/castlecss-logo-250.png)

## CastleCSS Framework
The form files are part of the [CastleCSS Package](https://github.com/CastleCSS/castlecss)

## How to install
- Install via [npm](https://www.npmjs.com/): ```npm install castlecss-forms```
- Require it in your own npm package
- Download or clone the package

## Updating files
CastleCSS is built so it's easy to update, you can just download make it your own as long as you don't ovewrite the core files. 

```npm update castlecss-forms```

## Documentation and examples
You can find the documentation and examples at http://www.castlecss.com and [castlecss-docs](https://github.com/CastleCSS/castlecss-docs)


## Adjusting the variables
Because of the unique update-able setup of CastleCSS you need a seperate variable file to overwrite the default CastleCSS variables. There are a few ways to do this: 

- Use the [boilerplate](https://github.com/CastleCSS/castlecss-boilerplate/) which provides the complete distribution of CastleCSS Forms
- Copy variables.scss from /node_modules/castlecss-core/sass/variables.scss into your own scss folder and include it into your main.scss
- Copy the example from the [documentation](http://castlecss.com/forms.html) into your own variables.scss and include it into your main.scss

## Dependencies
Because CastleCSS Forms uses jQuery as dependency, the distributions contain jQuery. There is however a possibility to make use of the jQuery version of your choice, by making use of the no.vendors distributions.
The no.vendor distributions work, as long as the jQuery variable is defined in the global scope.

## Basic structure
The basis structure for your website should look similar like this:

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
There are a couple of different ways to make use of the CastleCSS Forms library.

### Include as seperate modules
To make use of the modules seperately, use the following scripts:

```
<script type="text/javascript" src="/path/to/scripts/Vendors.bundle.js"></script>
<!--- The modules of your choice --->
<script type="text/javascript" src="/path/to/scripts/Select.min.js"></script>
<script type="text/javascript" src="/path/to/scripts/FileInput.min.js"></script>
<script type="text/javascript" src="/path/to/scripts/State.min.js"></script>

<script type="text/javascript">
	/* For example */
	CastleCSS_Forms_Select();
</script>
```

### Include
To make use of all the modules, simply include the following scripts:

```
<script type="text/javascript" src="/path/to/scripts/Vendors.bundle.js"></script>
<script type="text/javascript" src="/path/to/scripts/Forms.min.js"></script>
<script type="text/javascript">
	CastleCSS_Forms_Forms();
</script>
```

### Require
It is possible to require CastleCSS Forms into your project.

```
var castlecss_forms = require('castlecss-forms');

/* Use all modules */
castlecss_forms.forms();

/* Use seperate modules */
castlecss_forms.select();
castlecss_forms.fileinput();
```

### Selectors
The CastleCSS Forms library by default searches for the following elements:

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
