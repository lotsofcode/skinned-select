;(function($, undefined) {
    $.SelectSkin = function(element, options) {
        var defaults = {}
        var plugin = this;
        plugin.settings = {}
        var $element = $(element), element = element;
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            convertSelect() 
        }
        var convertSelect = function() {
            selectContainer = $(element);
            selectContainer.removeClass(this.selector);
            selectContainer.addClass('skinned-select');
            selectContainer.children().before('<div class="select-text">Text</div>').each(function() {
                $(this).prev().text(this.options[0].innerHTML)
              }
            );
            var parentTextObj = selectContainer.children().prev();
            selectContainer.children().click(function() {
              parentTextObj.text(this.options[this.selectedIndex].innerHTML);
            })
        }
        plugin.init();
    }
    $.fn.SelectSkin = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('SelectSkin')) {
                var plugin = new $.SelectSkin(this, options);
                $(this).data('SelectSkin', plugin);
            }
        });

    }
})(jQuery);