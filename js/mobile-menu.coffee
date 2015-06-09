---
---
set_mobile_menu = ->
  body       = document.getElementsByTagName("body")[0]
  show_menu  = $(".site-header .menu-icon")
  hide_menu  = $(".site-header .hide-menu-icon")
  page_links = $("#page-links")
  header     = $("#fixed-site-header")
  siblings   = $("body>.page-content, body>footer")

  show_menu.on "click", (event) ->
    event.preventDefault()
    siblings.hide()
    show_menu.hide()
    hide_menu.show()
    header.addClass "full-screen"
    page_links
      .show()
      .parent().addClass "full-screen"

  hide_menu.on "click", (event) ->
    event.preventDefault()
    siblings.show()
    hide_menu.hide()
    show_menu.show()
    header.removeClass "full-screen"
    page_links
      .hide(1000)
      .parent().removeClass "full-screen"


$ ->
  set_mobile_menu()
