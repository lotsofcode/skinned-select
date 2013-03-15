(($, undefined_) ->
  $.skinnedSelect = (element, options) ->
    defaults =
      textClass: "skinned-text"
      selectClass: "skinned-select"
      wrapperClass: "skinned-wrapper"
    plugin = this
    plugin.settings = {}
    $element = $(element)
    plugin.init = ->
      plugin.settings = $.extend({}, defaults, options)
      convertSelect()
    convertSelect = ->
      wrapper = $(element).wrapAll("<div class=\"" + plugin.settings.wrapperClass + "\" />")
      wrapper.removeClass @selector
      wrapper.addClass plugin.settings.selectClass
      wrapper.before("<div class=\"" + plugin.settings.textClass + "\">Text</div>").each ->
        $(this).prev().text $(":selected", this).html()
      parentTextObj = wrapper.prev()
      wrapper.change ->
        parentTextObj.text $(":selected", this).html()
    plugin.init()
  $.fn.skinnedSelect = (options) ->
    @each ->
      plugin = undefined
      if undefined is $(this).data("skinnedSelect")
        plugin = new $.skinnedSelect(this, options)
        $(this).data "skinnedSelect", plugin
) jQuery
