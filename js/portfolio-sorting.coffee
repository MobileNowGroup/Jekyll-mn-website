---
# use isotope plugin to implement responsive portfollio
---
$.fn.avia_iso_sort = ->
  $.extend( $.Isotope.prototype, {

    _customModeReset: ->
      this.fitRows =
        x : 0,
        y : 0,
        height : 0

    _customModeLayout: ( $elems ) ->
      instance = this
      containerWidth = this.element.width()
      props  = this.fitRows
      margin = this.element.is(".no_margin-container") ? 0 : (containerWidth / 100) * 6 # margin based on %
      extraRange = 2 # adds a little range for % based calculation error in some browsers

      $elems.each ->
        $this = $(this)
        atomW = $this.outerWidth()
        atomH = $this.outerHeight(true)
        if ( props.x != 0 && atomW + props.x > containerWidth + extraRange )
          # if this element cannot fit in the current row
          props.x = 0
          props.y = props.height

        # webkit gets blurry elements if position is a float value
        props.x = Math.round(props.x)
        props.y = Math.round(props.y)

        # position the atom
        instance._pushPosition( $this, props.x, props.y )
        props.height = Math.max( props.y + atomH, props.height )
        props.x += atomW + margin
    
    _customModeGetContainerSize: ->
      return { height : this.fitRows.height }

    _customModeResizeChanged: ->
      return true;
  })

  return this.each ->
    container = $(this)
    portfolio_id = container.data("portfolio-id")
    parentContainer	= container.parents(".entry-content")
    filter = parentContainer.find('.sort_width_container[data-portfolio-id="' + portfolio_id + '"]').find("#js_sort_items").css({visibility: "visible", opacity: 0})
    links = filter.find("a")
    imgParent = container.find(".grid-image")
    # isoActive = false
    items = $(".post-entry", container)

    applyIso = ->
      container.isotope(
        layoutMode : "customMode",
        itemSelector : ".item"
      ,
        ->
          container.css
            overflow: "visible"
      )

      # isoActive = true
      setTimeout ->
        parentContainer.addClass "avia_sortable_active"
      , 0

    # filtering projects on Work page
    links.on "click", ->
      current = $(this)
      selector = current.data "filter"
      links.removeClass "active_sort"
      current.addClass "active_sort"

      parentContainer.find(".open_container .ajax_controlls .avia_close").trigger("click")				
      container.isotope(
        layoutMode: "customMode"
        itemSelector: ".item"
        filter: "."+selector
      ,
        ->
          container.css
            overflow: "visible"
      )

      return false

    # update columnWidth on window resize
    $(window).smartresize ->
      applyIso()


$ ->
  $(".grid-sort-container").avia_iso_sort()
