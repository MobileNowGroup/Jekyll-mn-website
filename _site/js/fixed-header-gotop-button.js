(function() {
  var toggle_fixed_header_size, toggle_gotop_button;

  toggle_fixed_header_size = function() {
    var el_height, element, isMobile, set_height, win;
    win = $(window);
    element = $("#fixed-site-header");
    el_height = $(element).height() + 2;
    isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
    set_height = function() {
      var current_position, newH;
      current_position = win.scrollTop();
      newH = 0;
      if (current_position < el_height / 2) {
        newH = el_height - current_position;
      } else {
        newH = el_height / 2 + 1;
      }
      return element.css({
        "height": newH + "px",
        "line-height": newH + "px"
      });
    };
    if (isMobile) {
      return false;
    }
    win.scroll(set_height);
    return set_height();
  };

  toggle_gotop_button = function() {
    var go_top, set_status, threshold, win;
    win = $(window);
    go_top = $("#go-top-button");
    threshold = 500;
    set_status = function() {
      var current_position;
      current_position = win.scrollTop();
      if (current_position < threshold) {
        return go_top.removeClass("show-gotop");
      } else {
        if (!go_top.hasClass("show-gotop")) {
          return go_top.addClass("show-gotop");
        }
      }
    };
    win.scroll(set_status);
    return set_status();
  };

  $(function() {
    toggle_fixed_header_size();
    return toggle_gotop_button();
  });

}).call(this);
