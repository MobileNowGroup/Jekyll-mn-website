---
title: King of Frogs
permalink: /work/king-frogs/
order: 5
projectTitle: "King of Frogs"
support: "universal"
category: "games_sort"
image: "2013/11/King-of-Frogs-495x400.jpg"
link: "king-frogs"
socialShareText: "King+of+Frogs"
iosDownload: "http://itunes.apple.com/sg/app/king-of-frogs/id395644916?mt=8"
androidDownload: "https://market.android.com/details?id=com.playlithium.kingoffrogs&feature=search_result&rdid=com.playlithium.kingoffrogs&rdot=1"
androidDownloadIcon: "2013/12/badge_android.png"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 4000; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; ">
      <img src="{{ site.assetsurl }}2013/11/King-of-Frogs.jpg" class="ls-bg" alt="Slide background">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">King of Frogs</h2>

#### Mission

Our first casual game designed to engage users of all ages in a simple, but addictive puzzle game.

#### Concept

Drawing inspiration from French Solitaire, King of Frogs players guide the King Frog to his throne through more than 200 levels. Freemium model utilised. Created initially for iPhone with iPad to follow.

#### Results

Top 5 Family / Puzzle Game in over 62 App Stores. Featured over 100 times on Apple App Store. Over 600,000 downloads.

#### Video

<link href="http://vjs.zencdn.net/4.4/video-js.css" rel="stylesheet" />
<script type="text/javascript" src="http://vjs.zencdn.net/4.4/video.js"></script>
<video class="video-js vjs-default-skin" controls="controls" preload="auto" width="618" height="400" poster="{{ site.assetsurl }}2014/05/KOFthumbnail.jpg" data-setup="{}">
  <source src="{{ site.assetsurl }}videos/KOF.mp4" type="video/mp4" ></source>
  <source src="{{ site.assetsurl }}videos/KOF.webm" type="video/webm" ></source>
  <source src="{{ site.assetsurl }}videos/KOF.ogv" type="video/ogg" ></source>
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
