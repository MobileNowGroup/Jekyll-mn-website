(function() {
  var set_mobile_menu;

  set_mobile_menu = function() {
    var body, full_screen_height, header, hide_menu, page_links, show_menu, siblings, wrapper_page_links;
    body = document.getElementsByTagName("body")[0];
    show_menu = $(".site-header .menu-icon");
    hide_menu = $(".site-header .hide-menu-icon");
    page_links = $("#page-links");
    header = $("#fixed-site-header>.wrapper:first-child");
    siblings = $("body>.page-content, body>footer");
    full_screen_height = $(window).height() - 2;
    wrapper_page_links = page_links.parent();
    show_menu.on("click", function(event) {
      event.preventDefault();
      siblings.hide();
      show_menu.hide();
      hide_menu.show();
      header.addClass("full-screen");
      wrapper_page_links.css("height", full_screen_height);
      return page_links.addClass("show_mobile_menu");
    });
    return hide_menu.on("click", function(event) {
      event.preventDefault();
      siblings.show();
      hide_menu.hide();
      show_menu.show();
      page_links.removeClass("show_mobile_menu");
      return header.removeClass("full-screen");
    });
  };

  $(function() {
    return set_mobile_menu();
  });

}).call(this);
