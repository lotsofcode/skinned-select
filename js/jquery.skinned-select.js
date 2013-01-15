;(function($, undefined) {
    $.skinnedSelect = function(element, options) {
        var defaults = {
          textClass : 'skinned-text',
          selectClass : 'skinned-select',
          wrapperClass : 'skinned-wrapper'
        }
        var plugin = this;
        plugin.settings = {}
        var $element = $(element), element = element;
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            convertSelect() 
        }
        var convertSelect = function() {
            selectContainer = $(element).wrapAll('<div class="'+plugin.settings.wrapperClass+'" />');

            selectContainer.removeClass(this.selector);
            selectContainer.addClass(plugin.settings.selectClass);

            selectContainer.before('<div class="'+plugin.settings.textClass+'">Text</div>').each(function() {
                $(this).prev().text($(':selected', this).html())
              }
            );
            var parentTextObj = selectContainer.prev();
            selectContainer.click(function() {
              parentTextObj.text($(':selected', this).html());
            })
        }
        plugin.init();
    }
    $.fn.skinnedSelect = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('skinnedSelect')) {
                var plugin = new $.skinnedSelect(this, options);
                $(this).data('skinnedSelect', plugin);
            }
        });

    }
})(jQuery);