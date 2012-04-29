(function() {
  var $;

  $ = jQuery;

  $.skinnedSelect = function(element, options) {
    var $element, convertSelect, defaults, plugin;
    defaults = {
      textClass: 'skinned-text',
      selectClass: 'skinned-select',
      wrapperClass: 'skinned-wrapper'
    };
    plugin = this;
    plugin.settings = {};
    $element = $(element);
    element = element;
    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);
      return convertSelect();
    };
    convertSelect = function() {
      var parentTextObj, wrapper;
      wrapper = $(element).wrapAll('<div class="' + plugin.settings.wrapperClass + '" />');
      wrapper.removeClass(this.selector);
      wrapper.addClass(plugin.settings.selectClass);
      wrapper.before('<div class="' + plugin.settings.textClass + '">Text</div>').each(function() {
        return $(this).prev().text($(':selected', this).html());
      });
      parentTextObj = wrapper.prev();
      return wrapper.click(function() {
        return parentTextObj.text($(':selected', this).html());
      });
    };
    return plugin.init();
  };

  $.fn.skinnedSelect = function(options) {
    return this.each(function() {
      var plugin;
      if (void 0 === $(this).data('skinnedSelect')) {
        plugin = new $.skinnedSelect(this, options);
        return $(this).data('skinnedSelect', plugin);
      }
    });
  };

}).call(this);
