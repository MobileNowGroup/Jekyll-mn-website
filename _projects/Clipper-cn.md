---
title: Clipper.cn
permalink: /work/clipper-cn/
order: 18
projectTitle: "Clipper.cn"
support: "html5"
category: "lifestyle_sort"
image: "2014/04/ClipperThumbnail.png"
link: "clipper-cn"
socialShareText: "Clipper.cn"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 4000; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; ">
      <img src="{{ site.assetsurl }}2014/04/clipper.cn_.png" class="ls-bg" alt="Slide background">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">Clipper.cn</h2>

#### Mission

With China an increasingly important market for the iconic Barcelona based lighter brand; offering Chinese consumers a Simplified Chinese interface became imperative.

#### Concept

With the mobile surpassing PCs as the preferred way of accessing the Internet in China as far back as 2012, as well as the multitude of mobile devices used, a responsive web solution ticked all the boxes.

As a brand with such a rich heritage, it was important to showcase this to the Chinese consumer. A focus was therefore placed on telling the story of Clipper's evolution to the iconic brand that it is today.

The main focus of the site though, remains to highlight the staggering range of products in the Clipper portfolio. Helpful filters are also included to enable that search to be narrowed down further.

Playing in such a competitive and price sensitive market as China, it was also important to call out the key product features that differentiate Clipper from the competition. This was achieved through the Super Lighter module.

Visit [clipper.cn](http://www.clipper.cn) from any device to explore more.

#### Results

The new site, Clipper's first dedicated site for the Chinese market has exceeded expectation in terms of both traffic and dwell time.

</div>

{% include share-and-download.html %}

<script>
$(document).ready(function() {
  if (typeof $.fn.layerSlider == "undefined") {
    lsShowNotice('layerslider_1','jquery');
  }
  else if (typeof $.transit == "undefined" || typeof $.transit.modifiedForLayerSlider == "undefined") {
    lsShowNotice('layerslider_1', 'transit');
  }
  else
  {
    $("#layerslider_1").layerSlider({
      width : '1280px',
      height : '578px',
      responsive : true,
      responsiveUnder : 0,
      sublayerContainer : 0,
      autoStart : true,
      pauseOnHover : true,
      firstLayer : 1,
      animateFirstLayer : true,
      randomSlideshow : false,
      twoWaySlideshow : true,
      loops : 0,
      forceLoopNum : true,
      autoPlayVideos : true,
      autoPauseSlideshow : 'auto',
      youtubePreview : 'maxresdefault.jpg',
      keybNav : true,
      touchNav : true,
      skin : '.DS_Store',
      skinsPath : '../../css/LayerSlider/skins/',
      globalBGColor : 'transparent',
      navPrevNext : true,
      navStartStop : true,
      navButtons : true,
      hoverPrevNext : true,
      hoverBottomNav : false,
      showBarTimer : false,
      showCircleTimer : true,
      thumbnailNavigation : 'hover',
      tnWidth : 100,
      tnHeight : 60,
      tnContainerWidth : '60%',
      tnActiveOpacity : 35,
      tnInactiveOpacity : 100,
      imgPreload : true,
      yourLogo : false,
      yourLogoStyle : 'left: 10px; top: 10px;',
      yourLogoLink : false,
      yourLogoTarget : '_self',
      cbInit : function(element) { },
      cbStart : function(data) { },
      cbStop : function(data) { },
      cbPause : function(data) { },
      cbAnimStart : function(data) { },
      cbAnimStop : function(data) { },
      cbPrev : function(data) { },
      cbNext : function(data) { }
    });
  }
});
</script>
