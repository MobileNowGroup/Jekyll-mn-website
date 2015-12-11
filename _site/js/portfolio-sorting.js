(function() {
  $.fn.avia_iso_sort = function() {
    $.extend($.Isotope.prototype, {
      _customModeReset: function() {
        return this.fitRows = {
          x: 0,
          y: 0,
          height: 0
        };
      },
      _customModeLayout: function($elems) {
        var containerWidth, extraRange, instance, margin, props, _ref;
        instance = this;
        containerWidth = this.element.width();
        props = this.fitRows;
        margin = (_ref = this.element.is(".no_margin-container")) != null ? _ref : {
          0: (containerWidth / 100) * 6
        };
        extraRange = 2;
        return $elems.each(function() {
          var $this, atomH, atomW;
          $this = $(this);
          atomW = $this.outerWidth();
          atomH = $this.outerHeight(true);
          if (props.x !== 0 && atomW + props.x > containerWidth + extraRange) {
            props.x = 0;
            props.y = props.height;
          }
          props.x = Math.round(props.x);
          props.y = Math.round(props.y);
          instance._pushPosition($this, props.x, props.y);
          props.height = Math.max(props.y + atomH, props.height);
          return props.x += atomW + margin;
        });
      },
      _customModeGetContainerSize: function() {
        return {
          height: this.fitRows.height
        };
      },
      _customModeResizeChanged: function() {
        return true;
      }
    });
    return this.each(function() {
      var applyIso, container, imgParent, links;
      container = $(this);
      links = $("#js_sort_item").find("a");
      imgParent = container.find(".grid-image");
      applyIso = function() {
        return container.isotope({
          layoutMode: "customMode",
          itemSelector: ".item"
        }, function() {
          return container.css({
            overflow: "visible"
          });
        });
      };
      links.on("click", function() {
        var current, selector;
        current = $(this);
        selector = current.data("filter");
        links.removeClass("active_sort");
        current.addClass("active_sort");
        container.isotope({
          layoutMode: "customMode",
          itemSelector: ".item",
          filter: "." + selector
        }, function() {
          return container.css({
            overflow: "visible"
          });
        });
        return false;
      });
      $(window).on("load", function() {
        return imgParent.css({
          height: "auto"
        }).each(function(i) {
          var currentLink;
          currentLink = $(this);
          return setTimeout(function() {
            return currentLink.animate({
              opacity: 1
            }, 1500);
          }, 100 * i);
        });
      });
      return $(window).smartresize(function() {
        return applyIso();
      });
    });
  };

  $(function() {
    return $(".grid-sort-container").avia_iso_sort();
  });

}).call(this);
