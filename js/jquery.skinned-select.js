$(document).ready(
  function() {
    $('.my-skinnable-select').each(
      function(i) {
        selectContainer = $(this);
        // Remove the class for non JS browsers
        selectContainer.removeClass('my-skinnable-select');
        // Add the class for JS Browers
        selectContainer.addClass('skinned-select');
        // Find the select box
        selectContainer.children().before('<div class="select-text">a</div>').each(
          function() {
            $(this).prev().text(this.options[0].innerHTML)
          }
        );
        // Store the parent object
        var parentTextObj = selectContainer.children().prev();
        // As we click on the options
        selectContainer.children().click(function() {
          // Set the value of the html
          parentTextObj.text(this.options[this.selectedIndex].innerHTML);
        })        
      }
    );
  }
);
