# jQuery HTML Skinned Select

Overlays an image on-top of a select box.

## Include the required assets

    <link rel="stylesheet" type="text/css" href="css/skinned-select.css">
    <script src="js/jquery.skinned-select.js" type="text/javascript"></script>

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