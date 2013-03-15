# jQuery HTML Skinned Select

Overlays an image on-top of a select box.

@example src/index.html

## Include the required assets

    <link rel="stylesheet" type="text/css" href="css/skinned-select.css">
    <script src="js/skinned-select.js" type="text/javascript"></script>

## Compose the markup

	<select name="name" class="my-skinned-select">
		<option value="1">One</option>
		<option value="2">Two</option>
		<option value="3">Three</option>
		<option value="4">Four</option>
		<option value="5">Five</option>
	</select>

## Apply a skin to the selected class

    <script type="text/javascript">
      $(document).ready(function() {
        $('.my-skinned-select').skinnedSelect();
      })
    </script>

## Submitting pull requests

Modifications are to be made in src/js/skinned-select.coffee and compiled to src/js/skinned-select.js.

Indentation style, size and encoding should be followed as per .editorconfig settings.

If you are not familiar with editorconfig, check out [editorconfig.org](http://editorconfig.org/#download) to see if your editor has a plugin available.

### Development

I'm now using grunt to compile .coffee to .js and also for the live reload support available.

If you'd like to use this workflow to make changes, install the dependencies.

    $ npm install

Then run the local server

    $ grunt

Nice and simple ;)

## Contributors

[@andrefy](https://github.com/andrefy)
