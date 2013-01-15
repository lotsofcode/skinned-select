# jQuery HTML Skinned Select

Overlays an image on-top of a select box.

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

Modifications are to be made in js/skinned-select.coffee and compiled to js/skinned-select.js.

Indentation style, size and encoding should be followed as per .editorconfig settings.
