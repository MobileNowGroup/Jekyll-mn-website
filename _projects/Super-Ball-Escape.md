---
title: Super Ball Escape
permalink: /work/super-ball-escape/
order: 10
projectTitle: "Super Ball Escape"
support: "ios"
category: "games_sort"
image: "2011/06/Super-Ball-Escape-495x400.jpg"
link: "super-ball-escape"
socialShareText: "Super+Ball+Escape"
iosDownload: "https://itunes.apple.com/us/app/super-ball-escape/id413620748?mt=8"
iPadDownload: "https://itunes.apple.com/us/app/super-ball-escape-hd/id431780680?mt=8"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 4000; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; ">
      <img src="{{ site.assetsurl }}2013/11/Super-Ball-Escape.jpg" class="ls-bg" alt="Slide background">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">Super Ball Escape</h2>

#### Mission

Introducing our first action adventure game for more discerning gamers. Tougher than a casual game, but with the same goal of enticing the user to work their way through increasingly complex levels.

#### Concept

22nd century. Our hero robot needs to escape the evil factory that created it. Training levels included to help user get acquainted with gyroscope control, then it's full on gameplay. Freemium model adopted.

#### Results

&#35;1 downloaded iPhone and iPad game in China App Store. Top 10's around the world for both iPhone and iPad, culminating in over 300,000 downloads.

#### Video

<link href="http://vjs.zencdn.net/4.4/video-js.css" rel="stylesheet" />
<script type="text/javascript" src="http://vjs.zencdn.net/4.4/video.js"></script>
<video class="video-js vjs-default-skin" controls="controls" preload="auto" width="618" height="400" poster="{{ site.assetsurl }}2014/05/SBEthumbnail.jpg" data-setup="{}">
  <source src="{{ site.assetsurl }}videos/SBE.mp4" type="video/mp4" ></source>
  <source src="{{ site.assetsurl }}videos/SBE.webm" type="video/webm" ></source>
  <source src="{{ site.assetsurl }}videos/SBE.ogv" type="video/ogg" ></source>
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
