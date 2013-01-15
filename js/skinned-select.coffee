$ = jQuery 
$.skinnedSelect = (element, options) ->
    defaults = 
      textClass : 'skinned-text',
      selectClass : 'skinned-select',
      wrapperClass : 'skinned-wrapper'
    plugin = this;
    plugin.settings = {}
    $element = $(element);
    element = element;
    plugin.init = ->
        plugin.settings = $.extend {}, defaults, options;
        convertSelect()
    convertSelect = ->
        wrapper = $(element).wrapAll '<div class="'+plugin.settings.wrapperClass+'" />';
        wrapper.removeClass this.selector;
        wrapper.addClass plugin.settings.selectClass;
        wrapper.before('<div class="'+plugin.settings.textClass+'">Text</div>').each ->
            $(this).prev().text $(':selected', this).html()
        parentTextObj = wrapper.prev();
        wrapper.click( -> 
          parentTextObj.text $(':selected', this).html();
        )
    plugin.init();
$.fn.skinnedSelect = (options) ->
    return this.each(->
        if undefined == $(this).data('skinnedSelect')
            plugin = new $.skinnedSelect this, options
            $(this).data 'skinnedSelect', plugin;
    );