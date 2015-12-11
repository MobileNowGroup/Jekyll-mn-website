---
title: Speed Racer
permalink: /work/speed-racer/
order: 20
projectTitle: "Speed Racer"
support: "ios"
category: "games_sort"
image: "2013/11/SGI-495x400.jpg"
link: "speed-racer"
socialShareText: "Speed+Racer"
iosDownload: "https://itunes.apple.com/app/speed-racer-the-beginning/id507046660?mt=8"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 4000; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; ">
      <img class="ls-s-1" src="{{ site.assetsurl }}2013/11/SGI.jpg" style="position: absolute; top: 50%; left: 50%; slidedirection : fade; slideoutdirection : fade; durationin : 1000; durationout : 1000; easingin : easeInOutQuint; easingout : easeInOutQuint; delayin : 0; delayout : 0; showuntil : 0; width: 1440px; height: 650px; ">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">Speed Racer</h2>

#### Mission

Social Games International (SGI), an LA based digital entertainment group commissioned Mobile Now to create a Speed Racer game. SGI had prepared the original game design, but needed help and support to develop the concept and bring to market for iPhone.

#### Concept

Challenges abound as players learn to avoid deadly obstacles; such as oil slicks, rough terrain, falling rocks and incremental weather, as well as jump treacherous canyons and outrun enemy racers. Before and after each race, Speed Racer: The Beginning also allows players to customize their Mach 5 with performance enhancing tires, power boosts, increased durability, extra lives and additional Trixie helicopter rides. Speed Racer: The Beginning retains the classic look and feel of the original series and gameplay is interspersed with exciting clips from the actual show.

#### Results

20 levels were developed for Speed Racer: The Beginning in time for launch. The app was featured in iTunes over 300 times in the first week alone!

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
