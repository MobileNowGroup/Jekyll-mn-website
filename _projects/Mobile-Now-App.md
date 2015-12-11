---
title: Mobile Now App
permalink: /work/mobilenow-app/
order: 15
projectTitle: "Mobile Now App"
support: "ios"
category: "lifestyle_sort"
image: "2013/11/MOBILE-NOW-495x400.jpg"
link: "mobilenow-app"
socialShareText: "Mobile+Now+App"
iosDownload: "https://itunes.apple.com/us/app/mobile-now/id448251120?mt=8"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 4000; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; ">
      <img src="{{ site.assetsurl }}2013/11/MOBILE-NOW.jpg" class="ls-bg" alt="Slide background">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">Mobile Now App</h2>

#### Mission

After cooking up and launching many apps and games for cool clients, we decided to treat ourselves to a little birthday present to celebrate closing our 2nd year in business.

#### Concept

The Mobile Now iPhone app, provides our partners and friends with quick access to our case studies, on the fly, including videos, news, and of course this is the easiest way to download other Mobile Now apps. Also features useful tools including locating Mobile Now offices , a tricky Mobile IQ test and a very useful tool to retrieve your device UDID.

#### Results

Our partners and friends now have the perfect app to be the first to know when the next Mobile Now app gets launched, as well as staying in touch with Mobile Now on the go!

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
