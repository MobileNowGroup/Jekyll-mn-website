---
---
set_mobile_menu = ->
  body       = document.getElementsByTagName("body")[0]
  show_menu  = $(".site-header .menu-icon")
  hide_menu  = $(".site-header .hide-menu-icon")
  page_links = $("#page-links")
  header     = $("#fixed-site-header")
  siblings   = $("body>.page-content, body>footer")
  full_screen_height = $(window).height() - 2
  wrapper_page_links = page_links.parent()

  show_menu.on "click", (event) ->
    event.preventDefault()
    siblings.hide()
    show_menu.hide()
    hide_menu.show()
    header.addClass "full-screen"
    wrapper_page_links.css "height", full_screen_height
    page_links.addClass "show_mobile_menu"

  hide_menu.on "click", (event) ->
    event.preventDefault()
    siblings.show()
    hide_menu.hide()
    show_menu.show()
    page_links.removeClass "show_mobile_menu"
    header.removeClass "full-screen"


$ ->
  set_mobile_menu()
