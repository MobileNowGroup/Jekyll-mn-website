---
title: Hungry
permalink: /work/hungry/
order: 13
projectTitle: "Hungry"
support: "ios"
category: "fb_sort lifestyle_sort"
image: "2013/11/Hungry-495x400.jpg"
link: "hungry"
socialShareText: "Hungry"
iosDownload: "http://itunes.apple.com/app/id420798744?mt=8"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 4000; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; ">
      <img src="{{ site.assetsurl }}2013/11/Hungry.jpg" class="ls-bg" alt="Slide background">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">Hungry</h2>

#### Mission

To create an app that helps solve that age old dilemma; where to go for lunch? Targeting Continental European lunchers that really wanted to know just what is on the 'Menu of the Day' at restaurants near them.

#### Concept

Delivered Hungry, a crisp and fun app that makes it super simple for Hungry users to share the freshest daily menus around them at a snap of the camera. So other Hungry users can easily make that important decision on where to head for lunch.

#### Results

A very useful App that will build a unique and fresh database of daily menus. Hungry saves huge amounts of time by helping users get their priorities right!

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
      width : '1440px',
      height : '650px',
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
      skin : 'fullwidth',
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
