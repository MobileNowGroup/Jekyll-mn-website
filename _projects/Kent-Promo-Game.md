---
title: Kent Promo Game
permalink: /work/kent-promo-game/
order: 8
projectTitle: "Kent Promo Game"
support: "ios"
category: "lifestyle_sort"
image: "2013/11/BRITISH-AMERICAN-TOBACCO-Kent-Promo-Game-495x400.jpg"
link: "kent-promo-game"
socialShareText: "Kent+Promo+Game"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 4000; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; ">
      <img src="{{ site.assetsurl }}2013/11/BRITISH-AMERICAN-TOBACCO-Kent-Promo-Game.jpg" class="ls-bg" alt="Slide background">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">Kent Promo Game</h2>

#### Mission

How can the power of mobile technology be exploited within trade channels? Objective remains the same; engage the consumer and also undertake first round of data capture.

#### Concept

Traditional sales presenters were replaced with iPads. The consumer was challenged by Swiss Promotion Girls to play "Tron Style" racing game, opt-in for data registration, and bring the Kent product proposition to life.

#### Results

Proved a very effective data acquisition tool; with thousands of users registered their details and taking the Kent Switch challenge. Awarded 'Coolest use of iPad' by BAT Worldwide!

#### Video

<link href="http://vjs.zencdn.net/4.4/video-js.css" rel="stylesheet" />
<script type="text/javascript" src="http://vjs.zencdn.net/4.4/video.js"></script>
<video class="video-js vjs-default-skin" controls="controls" preload="auto" width="618" height="400" poster="{{ site.assetsurl }}2014/05/Kentthumbnail.jpg" data-setup="{}">
  <source src="{{ site.assetsurl }}videos/Kent.mp4" type="video/mp4" ></source>
  <source src="{{ site.assetsurl }}videos/Kent.webm" type="video/webm" ></source>
  <source src="{{ site.assetsurl }}videos/Kent.ogv" type="video/ogg" ></source>
</video>

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
